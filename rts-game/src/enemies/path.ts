import { Node } from './node';

export class Path {
    constructor(readonly nodes: Node[], readonly cost: number) {
    }

    static heuristicDistance(fromNode: Node, toNode: Node): number {
        return this.actualDistance(fromNode, toNode);
    }
    static actualDistance(fromNode: Node, toNode: Node): number {
        let xdiff = fromNode.x - toNode.x;
        let ydiff = fromNode.y - toNode.y;
        return Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }

    static defaultFindNeighbors(fromNode: Node): [Node, number][] {
        return fromNode.neighbors.map(n => <[Node, number]>[n, Path.actualDistance(fromNode, n)]);
    }

    static readonly MAX_CHECK = 250;

    static pathfind(fromNode: Node, toNode: Node, findNeighbors: ((fromNode: Node) => [Node, number][]) | null = null, allowPartial = false): Path | null {
        if (!findNeighbors) findNeighbors = Path.defaultFindNeighbors;
        
        var checkedNodes = new Set<Node>();
        var toCheck = new Set<Node>();
        toCheck.add(fromNode);

        var cameFrom = new Map<Node, Node>();

        var gScores = new Map<Node, number>();
        gScores.set(fromNode, 0);

        var fScores = new Map<Node, number>();
        fScores.set(fromNode, Path.heuristicDistance(fromNode, toNode));

        while (toCheck.size != 0 && toCheck.size < Path.MAX_CHECK) {
            let currentFScore = Infinity;
            let current: Node | null = null;
            toCheck.forEach(node => {
                let fScore: number;
                if (!fScores.has(node)) fScore = Infinity;
                else fScore = fScores.get(node);
                if (fScore < currentFScore) {
                    currentFScore = fScore;
                    current = node;
                }
            });

            if (current == toNode) return new Path(Path.reconstructPath(cameFrom, current), gScores.get(current));

            toCheck.delete(current);
            checkedNodes.add(current);
            for (let [conn, cost] of findNeighbors(current))
            {
                if (checkedNodes.has(conn)) continue;

                var tentativeGScore = gScores.get(current) + cost;
                if (!toCheck.has(conn)) toCheck.add(conn);
                else if (gScores.has(conn) && tentativeGScore >= gScores.get(conn)) continue;

                cameFrom.set(conn, current);
                gScores.set(conn, tentativeGScore);
                fScores.set(conn, tentativeGScore + Path.heuristicDistance(conn, toNode));
            }
        }

        if (allowPartial) {
            let bestDistance = Infinity;
            let bestNode: Node | null = null;
            checkedNodes.forEach(node => {
                let dist = Path.heuristicDistance(node, toNode);
                if (dist < bestDistance) {
                    bestDistance = dist;
                    bestNode = node;
                }
            });
            if (bestNode && bestNode !== fromNode) return new Path(Path.reconstructPath(cameFrom, bestNode), gScores.get(bestNode));
        }

        return null;
    }

    static reconstructPath(cameFrom: Map<Node, Node>, current: Node): Node[] {
        var completePath = [current];
        while (cameFrom.has(current) && (current = cameFrom.get(current)) != null) completePath.unshift(current);
        return completePath;
    }
}
