#include "stdafx.h"

struct Node
{
    bool blocked, inPath, wasChecked;
    float x, y;
    std::vector<Node*> connections;
};

static const uint32_t GRID_WIDTH = 10;
static const uint32_t GRID_HEIGHT = 10;
static Node nodes[GRID_WIDTH][GRID_HEIGHT] { { false, false, false, 0.f, 0.f, {} } };

void printNodes();
std::vector<Node*> *pathfind(Node *fromNode, Node *toNode);

uint32_t main()
{
    for (size_t q = 0; q < GRID_WIDTH; q++)
    {
        for (size_t w = 0; w < GRID_HEIGHT; w++)
        {
            auto &node = nodes[q][w];
            node.x = q * 10.f;
            node.y = w * 10.f;
        }
    }

    for (size_t q = 3; q <= 6; q++)
    {
        nodes[q][GRID_HEIGHT - 4].blocked = true;
        nodes[GRID_WIDTH - 4][q].blocked = true;
    }

    for (size_t q = 0; q < GRID_WIDTH; q++)
    {
        for (size_t w = 0; w < GRID_HEIGHT; w++)
        {
            auto &node = nodes[q][w];
            if (node.blocked) continue;
            if (q != 0 && !nodes[q - 1][w].blocked) node.connections.push_back(&nodes[q - 1][w]);
            if (q != GRID_WIDTH - 1 && !nodes[q + 1][w].blocked) node.connections.push_back(&nodes[q + 1][w]);
            if (w != 0 && !nodes[q][w - 1].blocked) node.connections.push_back(&nodes[q][w - 1]);
            if (w != GRID_HEIGHT - 1 && !nodes[q][w + 1].blocked) node.connections.push_back(&nodes[q][w + 1]);
        }
    }

    auto path = pathfind(&nodes[1][1], &nodes[GRID_WIDTH - 2][GRID_HEIGHT - 2]);
    //auto path = pathfind(&nodes[1][1], &nodes[2][1]);
    for (auto it = path->begin(); it != path->end(); it++)
    {
        auto &node = **it;
        node.inPath = true;
    }

    printNodes();

    return 0;
}

void printNodes()
{
    for (size_t q = 0; q < GRID_WIDTH; q++)
    {
        for (size_t w = 0; w < GRID_HEIGHT; w++)
        {
            auto &node = nodes[q][w];
            std::cout << (node.blocked ? "X " :
                           node.inPath ? "* " :
                       node.wasChecked ? ", " :
                                         ". ");
        }
        std::cout << std::endl;
    }
    std::cout << std::endl;
}

float actualDistance(Node *fromNode, Node *toNode)
{
    auto xdiff = fromNode->x - toNode->x;
    auto ydiff = fromNode->y - toNode->y;
    //return sqrt(xdiff * xdiff + ydiff * ydiff);
    return xdiff * xdiff + ydiff * ydiff;
}
float heuristicDistance(Node *fromNode, Node *toNode)
{
    //auto xdiff = fromNode->x - toNode->x;
    //auto ydiff = fromNode->y - toNode->y;
    //return (xdiff + ydiff) / 2;
    return actualDistance(fromNode, toNode);
}

template <typename TKey, typename TVal>
TVal get_with_default(std::map<TKey, TVal> &map, TKey key, TVal default)
{
    auto it = map.find(key);
    if (it == map.end()) return default;
    else return it->second;
}

template <typename T>
bool collection_remove(std::vector<T> &collection, T elem)
{
    auto it = std::find(collection.begin(), collection.end(), elem);
    if (it == collection.end()) return false;
    collection.erase(it);
    return true;
}

static const float infinity = std::numeric_limits<float>::infinity();

std::vector<Node*> *reconstructPath(std::map<Node*, Node*> cameFrom, Node *current)
{
    auto completePath = new std::vector<Node*> { current };
    while ((current = get_with_default(cameFrom, current, (Node*)nullptr)) != nullptr) completePath->push_back(current);
    return completePath;
}

std::vector<Node*> *pathfind(Node *fromNode, Node *toNode)
{
    std::vector<Node*> checked;
    std::vector<Node*> toCheck;
    toCheck.push_back(fromNode);

    std::map<Node*, Node*> cameFrom;

    std::map<Node*, float> gScores;
    gScores[fromNode] = 0;

    std::map<Node*, float> fScores;
    fScores[fromNode] = heuristicDistance(fromNode, toNode);

    while (toCheck.size() != 0)
    {
        float currentFScore = infinity;
        Node *current;
        for (auto node : toCheck)
        {
            auto fScore = get_with_default(fScores, node, infinity);
            if (fScore < currentFScore)
            {
                currentFScore = fScore;
                current = node;
            }
        }

        if (current == toNode) return reconstructPath(cameFrom, current);

        collection_remove(toCheck, current);
        checked.push_back(current);
        current->wasChecked = true;
        for (auto conn : current->connections)
        {
            if (std::find(checked.begin(), checked.end(), conn) != checked.end()) continue;

            auto tentativeGScore = gScores[current] + actualDistance(current, conn);
            if (std::find(toCheck.begin(), toCheck.end(), conn) == toCheck.end()) toCheck.push_back(conn);
            else if (tentativeGScore >= get_with_default(gScores, conn, infinity)) continue;

            cameFrom[conn] = current;
            gScores[conn] = tentativeGScore;
            fScores[conn] = tentativeGScore + heuristicDistance(conn, toNode);
        }
    }

    return nullptr;
}
