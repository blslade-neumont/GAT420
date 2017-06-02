/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(50));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEM_SIZE = 24;
exports.sfx = {
    titleScreenMusic: { src: 'audio/music/Town1.ogg' },
    overworldMusic: { src: 'audio/music/Airship.ogg' },
    dungeonMusic: { src: 'audio/music/Dungeon1.ogg' },
    gameOverMusic: { src: 'audio/music/Gameover2.ogg' },
    teleport: { src: 'audio/sfx/Absorb2.ogg' },
    playerDeath: { src: 'audio/sfx/Cry2.ogg' },
    playerDamage: { src: 'audio/sfx/Scream.ogg' },
    explode: { src: 'audio/sfx/Explosion1.ogg' },
    batDeath: { src: 'audio/sfx/Book1.ogg' },
    rekolte: { src: 'audio/sfx/Wind2.ogg' },
    heal: { src: 'audio/sfx/Heal5.ogg' }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var item_db_1 = __webpack_require__(15);
var sfx_db_1 = __webpack_require__(1);
exports.TILE_SIZE = 32;
;
exports.tiles = {
    grass: {
        sprite: {
            src: 'images/Tiles/Outside_A2.png',
            tileset: { width: 32, height: 32, tilex: 0, tiley: 0 }
        },
        variants: [{
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 1, tiley: 0 }
            }, {
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 0, tiley: 1 }
            }, {
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 1, tiley: 1 }
            }, {
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 0, tiley: 2 }
            }, {
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 1, tiley: 2 }
            }],
        isSolid: false,
    },
    sand: {
        sprite: {
            src: 'images/Tiles/Outside_A2.png',
            tileset: { width: 32, height: 32, tilex: 0, tiley: 3 }
        },
        variants: [{
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 1, tiley: 3 }
            }, {
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 0, tiley: 4 }
            }, {
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 1, tiley: 4 }
            }, {
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 0, tiley: 5 }
            }, {
                src: 'images/Tiles/Outside_A2.png',
                tileset: { width: 32, height: 32, tilex: 1, tiley: 5 }
            }],
        isSolid: false,
    },
    wallSide: {
        sprite: {
            src: 'images/Tiles/Outside_Tiles.png',
            tileset: { width: 32, height: 32, tilex: 0, tiley: 3 }
        },
        isSolid: true
    },
    wallTop: {
        sprite: {
            src: 'images/Tiles/Outside_Tiles.png',
            tileset: { width: 32, height: 32, tilex: 0, tiley: 2 }
        },
        isSolid: true,
    },
    lava: {
        sprite: {
            src: 'images/Tiles/World_A1.png',
            tileset: { width: 32, height: 32, tilex: 14, tiley: 3 }
        },
        variants: [{
                src: 'images/Tiles/World_A1.png',
                tileset: { width: 32, height: 32, tilex: 15, tiley: 3 }
            }, {
                src: 'images/Tiles/World_A1.png',
                tileset: { width: 32, height: 32, tilex: 14, tiley: 4 }
            }, {
                src: 'images/Tiles/World_A1.png',
                tileset: { width: 32, height: 32, tilex: 15, tiley: 4 }
            }, {
                src: 'images/Tiles/World_A1.png',
                tileset: { width: 32, height: 32, tilex: 14, tiley: 5 }
            }, {
                src: 'images/Tiles/World_A1.png',
                tileset: { width: 32, height: 32, tilex: 15, tiley: 5 }
            }],
        isSolid: false,
        onTick: function (delta, entity, x, y) {
            if (!entity.flying) {
                entity.takeDamage(3);
            }
        }
    },
    lava_left: {
        sprite: {
            src: 'images/Tiles/Dungeon_A1.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 14, tiley: 0 },
                { tilex: 14, tiley: 1 },
                { tilex: 14, tiley: 2 },
            ],
            framesPerSecond: 4,
        },
        isSolid: false,
        onTick: function (delta, entity, x, y) {
            if (!entity.flying) {
                entity.takeDamage(3);
            }
        }
    },
    lava_right: {
        sprite: {
            src: 'images/Tiles/Dungeon_A1.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 15, tiley: 0 },
                { tilex: 15, tiley: 1 },
                { tilex: 15, tiley: 2 },
            ],
            framesPerSecond: 4,
        },
        isSolid: false,
        onTick: function (delta, entity, x, y) {
            if (!entity.flying) {
                entity.takeDamage(3);
            }
        }
    },
    water: {
        sprite: {
            src: 'images/Tiles/World_A1.png',
            tileset: { width: 32, height: 32, tilex: 9, tiley: 0 }
        },
        isSolid: false,
        onTick: function (delta, entity, x, y) {
            if (!entity.flying) {
                entity.takeDamage(1);
            }
        }
    },
    water_left: {
        sprite: {
            src: 'images/Tiles/Dungeon_A1.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 14, tiley: 6 },
                { tilex: 14, tiley: 7 },
                { tilex: 14, tiley: 8 },
            ],
            framesPerSecond: 4,
        },
        isSolid: false,
        onTick: function (delta, entity, x, y) {
            if (!entity.flying) {
                entity.takeDamage(1);
            }
        }
    },
    water_right: {
        sprite: {
            src: 'images/Tiles/Dungeon_A1.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 15, tiley: 6 },
                { tilex: 15, tiley: 7 },
                { tilex: 15, tiley: 8 },
            ],
            framesPerSecond: 4,
        },
        isSolid: false,
        onTick: function (delta, entity, x, y) {
            if (!entity.flying) {
                entity.takeDamage(1);
            }
        }
    },
    dungeonGrass: {
        sprite: {
            src: 'images/Tiles/Dungeon_A2.png',
            tileset: { width: 32, height: 32, tilex: 2, tiley: 6 }
        },
        isSolid: false,
    },
    dungeonSand: {
        sprite: {
            src: 'images/Tiles/Dungeon_A2.png',
            tileset: { width: 32, height: 32, tilex: 4, tiley: 6 }
        },
        isSolid: false,
    },
    teleporter: {
        sprite: {
            src: 'images/Tiles/Outside_A2.png',
            tileset: { width: 32, height: 32, tilex: 10, tiley: 10 }
        },
        isSolid: false,
        onLand: function (entity, x, y) {
            if (entity.name == "Player") {
                var scene = entity.scene;
                scene.dungeon.enter(scene, entity.x, entity.y);
            }
        }
    },
    dungeonTeleporter: {
        sprite: {
            src: 'images/Tiles/Outside_A2.png',
            tileset: { width: 32, height: 32, tilex: 10, tiley: 10 }
        },
        isSolid: false,
        onLand: function (entity, x, y) {
            if (entity.name == "Player") {
                var scene = entity.scene;
                scene.exit();
            }
        }
    },
    carrotCrop: {
        sprite: {
            src: 'images/Tiles/Outside_A2.png',
            tileset: { width: 32, height: 32, tilex: 8, tiley: 0 }
        },
        isSolid: false,
        onLand: function (entity, x, y) {
            if (entity.name == "Player") {
                var inventory = entity.inventory;
                if (!inventory)
                    throw new Error("Player has no inventory!");
                inventory.addItem(item_db_1.items['crop_carrot'], 1);
                var world = entity.scene.findObject('World');
                world.setTileAt(x, y, exports.tiles['grass']);
                entity.scene.addObject(new engine_1.AudioSourceObject('rekolte', sfx_db_1.sfx['rekolte'], { x: x * exports.TILE_SIZE, y: y * exports.TILE_SIZE }));
            }
        }
    },
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
exports.alives = {
    'player-south': {
        sprite: {
            src: 'images/Alive/Katie.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 0 },
                { tilex: 1, tiley: 0 },
                { tilex: 2, tiley: 0 },
                { tilex: 1, tiley: 0 }
            ]
        }
    },
    'player-west': {
        sprite: {
            src: 'images/Alive/Katie.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 1 },
                { tilex: 1, tiley: 1 },
                { tilex: 2, tiley: 1 },
                { tilex: 1, tiley: 1 }
            ]
        }
    },
    'player-east': {
        sprite: {
            src: 'images/Alive/Katie.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 2 },
                { tilex: 1, tiley: 2 },
                { tilex: 2, tiley: 2 },
                { tilex: 1, tiley: 2 }
            ]
        }
    },
    'player-north': {
        sprite: {
            src: 'images/Alive/Katie.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 3 },
                { tilex: 1, tiley: 3 },
                { tilex: 2, tiley: 3 },
                { tilex: 1, tiley: 3 }
            ]
        }
    },
    'bat-south': {
        sprite: {
            src: 'images/Alive/Monster3.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 0 },
                { tilex: 1, tiley: 0 },
                { tilex: 2, tiley: 0 },
                { tilex: 1, tiley: 0 }
            ]
        }
    },
    'bat-west': {
        sprite: {
            src: 'images/Alive/Monster3.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 1 },
                { tilex: 1, tiley: 1 },
                { tilex: 2, tiley: 1 },
                { tilex: 1, tiley: 1 }
            ]
        }
    },
    'bat-east': {
        sprite: {
            src: 'images/Alive/Monster3.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 2 },
                { tilex: 1, tiley: 2 },
                { tilex: 2, tiley: 2 },
                { tilex: 1, tiley: 2 }
            ]
        }
    },
    'bat-north': {
        sprite: {
            src: 'images/Alive/Monster3.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 3 },
                { tilex: 1, tiley: 3 },
                { tilex: 2, tiley: 3 },
                { tilex: 1, tiley: 3 }
            ]
        }
    },
    'dead-player': {
        sprite: {
            src: 'images/Alive/Katie.png',
            tileset: { width: 32, height: 32, tilex: 0, tiley: 4 }
        }
    },
    'large-dim-light-source': {
        sprite: {
            src: 'images/Alive/large-dim-light-source.png',
            pivot: { x: 150, y: 150 }
        }
    },
    'bomb': {
        sprite: {
            src: 'images/Alive/Bomb1.png',
            tileset: { width: 32, height: 32 },
            frames: [
                { tilex: 0, tiley: 0 },
                { tilex: 1, tiley: 0 },
                { tilex: 2, tiley: 0 },
                { tilex: 3, tiley: 0 }
            ],
            framesPerSecond: 2
        }
    }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var tile_db_1 = __webpack_require__(2);
var MOVE_SPEED = 4 * 30;
var SIZE = 32;
var OFFSET = (tile_db_1.TILE_SIZE - SIZE) / 2.0;
var CLOSE_ENOUGH = 1.0;
var Entity = (function (_super) {
    __extends(Entity, _super);
    function Entity(name, opts) {
        var _this = _super.call(this, name, opts) || this;
        _this._maxHealth = 1;
        _this._flying = false;
        _this._currentHealth = 1;
        _this._damageImmunity = 0;
        _this._damageImmunityTimer = 1;
        _this._isAlive = true;
        _this._takeDamageSound = null;
        _this._killSound = null;
        if (opts.maxHealth <= 0)
            throw new Error("Max health must be positive. The passed-in value: " + opts.maxHealth);
        _this._maxHealth = opts.maxHealth;
        if (typeof opts.currentHealth !== 'undefined') {
            if (opts.currentHealth <= 0)
                throw new Error("Current health must be positive. The passed-in value: " + opts.currentHealth);
            if (opts.currentHealth > _this.maxHealth)
                throw new Error("Attempting to set current health higher than max health");
            _this.currentHealth = opts.currentHealth;
        }
        else
            _this.currentHealth = _this.maxHealth;
        if (typeof opts.damageImmunity !== 'undefined')
            _this._damageImmunity = opts.damageImmunity;
        if (typeof opts.damageImmunityTimer !== 'undefined')
            _this._damageImmunityTimer = opts.damageImmunityTimer;
        if (typeof opts.takeDamageSound !== 'undefined')
            _this.takeDamageSound = opts.takeDamageSound;
        if (typeof opts.killSound !== 'undefined')
            _this.killSound = opts.killSound;
        if (typeof opts.flying !== 'undefined')
            _this._flying = opts.flying;
        return _this;
    }
    Object.defineProperty(Entity.prototype, "maxHealth", {
        get: function () {
            return this._maxHealth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "flying", {
        get: function () {
            return this._flying;
        },
        set: function (val) {
            this._flying = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "currentHealth", {
        get: function () {
            return this._currentHealth;
        },
        set: function (val) {
            if (this.isDead)
                throw new Error("This entity is dead! You can't set currentHealth on a dead entity!");
            val = engine_1.clamp(val, 0, this._maxHealth);
            if (val == this._currentHealth)
                return;
            this._currentHealth = val;
            if (val == 0)
                this.kill();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "damageImmunity", {
        get: function () {
            return this._damageImmunity;
        },
        set: function (val) {
            this._damageImmunity = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "damageImmunityTimer", {
        get: function () {
            return this._damageImmunityTimer;
        },
        set: function (val) {
            this._damageImmunityTimer = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "isImmuneToDamage", {
        get: function () {
            return this.damageImmunity > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "isAlive", {
        get: function () {
            return this._isAlive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "isDead", {
        get: function () {
            return !this.isAlive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "takeDamageSound", {
        get: function () {
            return this._takeDamageSound;
        },
        set: function (val) {
            this._takeDamageSound = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "killSound", {
        get: function () {
            return this._killSound;
        },
        set: function (val) {
            this._killSound = val;
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.snapToTile = function (h, v) {
        var thisTileX = engine_1.fmod(this.x, tile_db_1.TILE_SIZE);
        var thisTileY = engine_1.fmod(this.y, tile_db_1.TILE_SIZE);
        var stopH = (Math.abs(h) < CLOSE_ENOUGH);
        if (stopH && (thisTileX <= CLOSE_ENOUGH)) {
            this.x = OFFSET + (Math.floor(this.x / tile_db_1.TILE_SIZE)) * tile_db_1.TILE_SIZE;
            this.hspeed = 0.0;
        }
        else if (stopH && ((thisTileX + CLOSE_ENOUGH) >= tile_db_1.TILE_SIZE)) {
            this.x = OFFSET + (Math.floor(this.x / tile_db_1.TILE_SIZE) + 1) * tile_db_1.TILE_SIZE;
            this.hspeed = 0.0;
        }
        else {
            this.hspeed = (stopH ? this.hspeed : h);
        }
        var stopV = (Math.abs(v) < CLOSE_ENOUGH);
        if (stopV && (thisTileY <= CLOSE_ENOUGH)) {
            this.y = OFFSET + (Math.floor(this.y / tile_db_1.TILE_SIZE)) * tile_db_1.TILE_SIZE;
            this.vspeed = 0.0;
        }
        else if (stopV && ((thisTileY + CLOSE_ENOUGH) >= tile_db_1.TILE_SIZE)) {
            this.y = OFFSET + (Math.floor(this.y / tile_db_1.TILE_SIZE) + 1) * tile_db_1.TILE_SIZE;
            this.vspeed = 0.0;
        }
        else {
            this.vspeed = (stopV ? this.vspeed : v);
        }
    };
    Entity.prototype.tick = function (delta) {
        var nextX = this.x + delta * this.hspeed;
        var nextY = this.y + delta * this.vspeed;
        var nextMinX = nextX;
        var nextMinY = nextY;
        var nextMaxX = (nextX + SIZE - 1);
        var nextMaxY = (nextY + SIZE - 1);
        var minTX = Math.floor(nextMinX / tile_db_1.TILE_SIZE) * tile_db_1.TILE_SIZE;
        var maxTX = Math.floor(nextMaxX / tile_db_1.TILE_SIZE) * tile_db_1.TILE_SIZE;
        var minTY = Math.floor(nextMinY / tile_db_1.TILE_SIZE) * tile_db_1.TILE_SIZE;
        var maxTY = Math.floor(nextMaxY / tile_db_1.TILE_SIZE) * tile_db_1.TILE_SIZE;
        var scene = this.scene;
        if (this.hspeed > 0.0) {
            if ((nextMaxX > maxTX) && (scene.world.getTileAt(maxTX / tile_db_1.TILE_SIZE, minTY / tile_db_1.TILE_SIZE).isSolid || scene.world.getTileAt(maxTX / tile_db_1.TILE_SIZE, maxTY / tile_db_1.TILE_SIZE).isSolid)) {
                this.x = OFFSET + minTX;
                this.hspeed = 0.0;
            }
        }
        else if (this.hspeed < 0.0) {
            if ((nextMinX < maxTX) && (scene.world.getTileAt(minTX / tile_db_1.TILE_SIZE, minTY / tile_db_1.TILE_SIZE).isSolid || scene.world.getTileAt(minTX / tile_db_1.TILE_SIZE, maxTY / tile_db_1.TILE_SIZE).isSolid)) {
                this.x = OFFSET + maxTX;
                this.hspeed = 0.0;
            }
        }
        if (this.vspeed > 0.0) {
            if ((nextMaxY > maxTY) && (scene.world.getTileAt(minTX / tile_db_1.TILE_SIZE, maxTY / tile_db_1.TILE_SIZE).isSolid || scene.world.getTileAt(maxTX / tile_db_1.TILE_SIZE, maxTY / tile_db_1.TILE_SIZE).isSolid)) {
                this.y = OFFSET + minTY;
                this.vspeed = 0.0;
            }
        }
        else if (this.vspeed < 0.0) {
            if ((nextMinY < maxTY) && (scene.world.getTileAt(minTX / tile_db_1.TILE_SIZE, minTY / tile_db_1.TILE_SIZE).isSolid || scene.world.getTileAt(maxTX / tile_db_1.TILE_SIZE, minTY / tile_db_1.TILE_SIZE).isSolid)) {
                this.y = OFFSET + maxTY;
                this.vspeed = 0.0;
            }
        }
        this.damageImmunity -= delta;
        _super.prototype.tick.call(this, delta);
    };
    Entity.prototype.recoverDamage = function (amt) {
        if (!this.isAlive)
            throw new Error('This entity is already dead!');
        if (amt < 0)
            throw new Error('Cannot heal a negative amount');
        this.currentHealth += amt;
        return true;
    };
    Entity.prototype.takeDamage = function (amt) {
        if (!this.isAlive)
            throw new Error('This entity is already dead!');
        if (amt < 0)
            throw new Error("Cannot take negative damage");
        if (this.isImmuneToDamage)
            return false;
        this.currentHealth -= amt;
        if (!this.isDead && this.takeDamageSound)
            this.scene.addObject(new engine_1.AudioSourceObject(this.name + "-TakeDamageSound", this.takeDamageSound, { x: this.x, y: this.y }));
        this.damageImmunity = this.damageImmunityTimer;
        return true;
    };
    Entity.prototype.kill = function () {
        if (!this.isAlive)
            throw new Error('This entity is already dead!');
        this._isAlive = false;
        if (this.killSound)
            this.scene.addObject(new engine_1.AudioSourceObject(this.name + "-KillSound", this.killSound, { x: this.x, y: this.y }));
        this.scene.removeObject(this);
    };
    Entity.prototype.renderImpl = function (context) {
        if (this.damageImmunity <= 0 || this.damageImmunity % .2 > .1)
            _super.prototype.renderImpl.call(this, context);
    };
    return Entity;
}(engine_1.GameObject));
exports.Entity = Entity;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function pauseWithGame(gobj) {
    var game = gobj.game;
    var onPause = game.onPause;
    var onPlay = game.onPlay;
    if (onPause && onPlay) {
        onPause.addListener(function () { return gobj.shouldTick = false; });
        onPlay.addListener(function () { return gobj.shouldTick = true; });
    }
}
exports.pauseWithGame = pauseWithGame;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function degToRad(deg) {
    return (deg / 180) * Math.PI;
}
exports.degToRad = degToRad;
function radToDeg(rad) {
    return (rad / Math.PI) * 180;
}
exports.radToDeg = radToDeg;
function clamp(value, lowerBound, upperBound) {
    if (lowerBound > upperBound) {
        throw new Error("Attempting to clamp with a lower bound greater than the upper bound");
    }
    if (value < lowerBound)
        value = lowerBound;
    else if (value > upperBound)
        value = upperBound;
    return value;
}
exports.clamp = clamp;
function fmod(a, b) {
    return +(a - (Math.floor(a / b) * b)).toPrecision(8);
}
exports.fmod = fmod;
function pointDirection(x1, y1, x2, y2) {
    var xdiff = x2 - x1, ydiff = y2 - y1;
    return fmod(radToDeg(Math.atan2(-ydiff, xdiff)), 360);
}
exports.pointDirection = pointDirection;
//# sourceMappingURL=math.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var overworld_scene_1 = __webpack_require__(40);
var title_scene_1 = __webpack_require__(19);
;
exports.gui = {
    inventory: {
        sprite: { src: 'images/GUI/inventory.png' },
        itemSlots: [
            { x: 11 + (36 * 0), y: 51 + (36 * 0), upIndex: 18, downIndex: 9, leftIndex: 8, rightIndex: 1 },
            { x: 11 + (36 * 1), y: 51 + (36 * 0), upIndex: 19, downIndex: 10, leftIndex: 0, rightIndex: 2 },
            { x: 11 + (36 * 2), y: 51 + (36 * 0), upIndex: 20, downIndex: 11, leftIndex: 1, rightIndex: 3 },
            { x: 11 + (36 * 3), y: 51 + (36 * 0), upIndex: 21, downIndex: 12, leftIndex: 2, rightIndex: 4 },
            { x: 11 + (36 * 4), y: 51 + (36 * 0), upIndex: 22, downIndex: 13, leftIndex: 3, rightIndex: 5 },
            { x: 11 + (36 * 5), y: 51 + (36 * 0), upIndex: 23, downIndex: 14, leftIndex: 4, rightIndex: 6 },
            { x: 11 + (36 * 6), y: 51 + (36 * 0), upIndex: 24, downIndex: 15, leftIndex: 5, rightIndex: 7 },
            { x: 11 + (36 * 7), y: 51 + (36 * 0), upIndex: 25, downIndex: 16, leftIndex: 6, rightIndex: 8 },
            { x: 11 + (36 * 8), y: 51 + (36 * 0), upIndex: 26, downIndex: 17, leftIndex: 7, rightIndex: 0 },
            { x: 11 + (36 * 0), y: 51 + (36 * 1), upIndex: 0, downIndex: 18, leftIndex: 17, rightIndex: 10 },
            { x: 11 + (36 * 1), y: 51 + (36 * 1), upIndex: 1, downIndex: 19, leftIndex: 9, rightIndex: 11 },
            { x: 11 + (36 * 2), y: 51 + (36 * 1), upIndex: 2, downIndex: 20, leftIndex: 10, rightIndex: 12 },
            { x: 11 + (36 * 3), y: 51 + (36 * 1), upIndex: 3, downIndex: 21, leftIndex: 11, rightIndex: 13 },
            { x: 11 + (36 * 4), y: 51 + (36 * 1), upIndex: 4, downIndex: 22, leftIndex: 12, rightIndex: 14 },
            { x: 11 + (36 * 5), y: 51 + (36 * 1), upIndex: 5, downIndex: 23, leftIndex: 13, rightIndex: 15 },
            { x: 11 + (36 * 6), y: 51 + (36 * 1), upIndex: 6, downIndex: 24, leftIndex: 14, rightIndex: 16 },
            { x: 11 + (36 * 7), y: 51 + (36 * 1), upIndex: 7, downIndex: 25, leftIndex: 15, rightIndex: 17 },
            { x: 11 + (36 * 8), y: 51 + (36 * 1), upIndex: 8, downIndex: 26, leftIndex: 16, rightIndex: 9 },
            { x: 11 + (36 * 0), y: 51 + (36 * 2), upIndex: 9, downIndex: 0, leftIndex: 26, rightIndex: 19 },
            { x: 11 + (36 * 1), y: 51 + (36 * 2), upIndex: 10, downIndex: 1, leftIndex: 18, rightIndex: 20 },
            { x: 11 + (36 * 2), y: 51 + (36 * 2), upIndex: 11, downIndex: 2, leftIndex: 19, rightIndex: 21 },
            { x: 11 + (36 * 3), y: 51 + (36 * 2), upIndex: 12, downIndex: 3, leftIndex: 20, rightIndex: 22 },
            { x: 11 + (36 * 4), y: 51 + (36 * 2), upIndex: 13, downIndex: 4, leftIndex: 21, rightIndex: 23 },
            { x: 11 + (36 * 5), y: 51 + (36 * 2), upIndex: 14, downIndex: 5, leftIndex: 22, rightIndex: 24 },
            { x: 11 + (36 * 6), y: 51 + (36 * 2), upIndex: 15, downIndex: 6, leftIndex: 23, rightIndex: 25 },
            { x: 11 + (36 * 7), y: 51 + (36 * 2), upIndex: 16, downIndex: 7, leftIndex: 24, rightIndex: 26 },
            { x: 11 + (36 * 8), y: 51 + (36 * 2), upIndex: 17, downIndex: 8, leftIndex: 25, rightIndex: 18 }
        ]
    },
    title: {
        sprite: { src: 'images/GUI/title.png' },
        navigation: {
            'Enter': function () { return new overworld_scene_1.OverworldScene(); }
        }
    },
    'game-over': {
        sprite: { src: 'images/GUI/game-over.png' },
        navigation: {
            'Enter': function () { return new title_scene_1.TitleScene(); },
            'Escape': function () { return new title_scene_1.TitleScene(); }
        }
    },
    'full-health-heart': {
        sprite: {
            src: 'images/GUI/hearts.png',
            pivot: { x: 12, y: 24 },
            tileset: { width: 24, height: 24, tilex: 0, tiley: 0 }
        }
    },
    'empty-health-heart': {
        sprite: {
            src: 'images/GUI/hearts.png',
            pivot: { x: 12, y: 24 },
            tileset: { width: 24, height: 24, tilex: 1, tiley: 0 }
        }
    }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var tile_db_1 = __webpack_require__(2);
var pause_with_game_1 = __webpack_require__(5);
var GridRenderer = (function (_super) {
    __extends(GridRenderer, _super);
    function GridRenderer() {
        return _super.call(this, 'GridRenderer') || this;
    }
    GridRenderer.prototype.addToScene = function (scene) {
        if (!scene || !scene.world)
            throw new Error("The GridRenderer can only be added to a scene with a World");
        _super.prototype.addToScene.call(this, scene);
        pause_with_game_1.pauseWithGame(this);
    };
    Object.defineProperty(GridRenderer.prototype, "world", {
        get: function () {
            if (this.scene)
                return this.scene.world;
            return null;
        },
        enumerable: true,
        configurable: true
    });
    GridRenderer.prototype.renderImpl = function (context) {
        if (!this.world) {
            throw new Error("World not set! Cannot render grid!");
        }
        if (!this.resources) {
            throw new Error("Resource loader not set! Cannot render grid!");
        }
        if (!this.shouldRender)
            return;
        var bounds = this.game.scene.camera.bounds;
        var startx = Math.floor(bounds.left / tile_db_1.TILE_SIZE);
        var starty = Math.floor(bounds.bottom / tile_db_1.TILE_SIZE);
        var endx = Math.floor(bounds.right / tile_db_1.TILE_SIZE) + 1;
        var endy = Math.floor(bounds.top / tile_db_1.TILE_SIZE) + 1;
        for (var x = startx; x < endx; x++) {
            for (var y = starty; y < endy; y++) {
                var sprite = this.world.getSpriteAt(x, y);
                engine_1.drawSprite(context, this.resources, sprite, x * tile_db_1.TILE_SIZE, y * tile_db_1.TILE_SIZE, this.animationAge);
            }
        }
    };
    return GridRenderer;
}(engine_1.GameObject));
exports.GridRenderer = GridRenderer;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var gui_db_1 = __webpack_require__(7);
var gui_1 = __webpack_require__(41);
var MenuGuiObject = (function (_super) {
    __extends(MenuGuiObject, _super);
    function MenuGuiObject(gui) {
        var _this = _super.call(this, "MenuGuiObject", { renderCamera: 'none' }) || this;
        _this.inventoryPos = 0;
        _this.gui = typeof gui === 'string' ? gui_db_1.gui[gui] : gui;
        return _this;
    }
    MenuGuiObject.prototype.addToScene = function (scene) {
        _super.prototype.addToScene.call(this, scene);
        this._playerRef = this.scene.findObject(function (x) { return x.name == "Player"; });
    };
    Object.defineProperty(MenuGuiObject.prototype, "Gui", {
        get: function () {
            return this.gui;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuGuiObject.prototype, "currentItem", {
        get: function () {
            if (!this.gui.itemSlots) {
                return null;
            }
            return this.gui.itemSlots[this.inventoryPos];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuGuiObject.prototype, "inventory", {
        get: function () {
            if (!this._playerRef) {
                return null;
            }
            return this._playerRef.inventory;
        },
        enumerable: true,
        configurable: true
    });
    MenuGuiObject.prototype.handleEvent = function (evt) {
        if (_super.prototype.handleEvent.call(this, evt))
            return true;
        if (gui_1.handleGUIEvent(evt, this.game, this.gui))
            return true;
        if (evt.type == 'keyTyped' && this.currentItem) {
            if (evt.code == 'KeyA' || evt.code == 'ArrowLeft') {
                this.inventoryPos = this.currentItem.leftIndex;
                return true;
            }
            else if (evt.code == 'KeyD' || evt.code == 'ArrowRight') {
                this.inventoryPos = this.currentItem.rightIndex;
                return true;
            }
            else if (evt.code == 'KeyW' || evt.code == 'ArrowUp') {
                this.inventoryPos = this.currentItem.upIndex;
                return true;
            }
            else if (evt.code == 'KeyS' || evt.code == 'ArrowDown') {
                this.inventoryPos = this.currentItem.downIndex;
                return true;
            }
            else if (evt.code == 'Enter') {
                if (this.inventory.items[this.inventoryPos]) {
                    this.inventory.items[this.inventoryPos].onUse(this._playerRef);
                    this.inventory.removeItem(this.inventory.items[this.inventoryPos]);
                }
                return true;
            }
        }
        return false;
    };
    MenuGuiObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        gui_1.tickGUI(delta, this.game, this.gui);
    };
    MenuGuiObject.prototype.renderImpl = function (context) {
        gui_1.drawGUI(this.currentItem, this.inventory, context, this.game, this.gui, this.animationAge);
    };
    return MenuGuiObject;
}(engine_1.GameObject));
exports.MenuGuiObject = MenuGuiObject;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var tile_db_1 = __webpack_require__(2);
var pause_with_game_1 = __webpack_require__(5);
var noise_1 = __webpack_require__(42);
var entity_1 = __webpack_require__(4);
var TIME_SCALE = 1 / (60 * 5);
var World = (function (_super) {
    __extends(World, _super);
    function World(seed, tileDefaults) {
        if (seed === void 0) { seed = Math.random(); }
        if (tileDefaults === void 0) { tileDefaults = {}; }
        var _this = _super.call(this, 'World', { shouldRender: false }) || this;
        _this.seed = seed;
        _this.tileDefaults = tileDefaults;
        _this._initialized = false;
        _this._gameTime = 8 / 24;
        _this._variantCache = new Map();
        _this._chunks = new Map();
        return _this;
    }
    World.prototype.addToScene = function (scene) {
        if (this._initialized)
            throw new Error('This World has already been initialized');
        this._initialized = true;
        _super.prototype.addToScene.call(this, scene);
        pause_with_game_1.pauseWithGame(this);
    };
    Object.defineProperty(World.prototype, "gameTime", {
        get: function () {
            return this._gameTime;
        },
        set: function (val) {
            this._gameTime = val;
        },
        enumerable: true,
        configurable: true
    });
    World.prototype.tick = function (delta) {
        this._gameTime += delta * TIME_SCALE;
        for (var _i = 0, _a = this.scene.findObjects(function (obj) { return obj instanceof entity_1.Entity; }); _i < _a.length; _i++) {
            var entity = _a[_i];
            var bounds = entity.collisionBounds;
            var _b = [Math.floor((entity.x - bounds.left + 1) / tile_db_1.TILE_SIZE), Math.floor((entity.y - bounds.bottom + 1) / tile_db_1.TILE_SIZE)], fromx = _b[0], fromy = _b[1];
            var _c = [Math.floor((entity.x + bounds.right - 1) / tile_db_1.TILE_SIZE), Math.floor((entity.y + bounds.top - 1) / tile_db_1.TILE_SIZE)], tox = _c[0], toy = _c[1];
            for (var tlx = fromx; tlx <= tox; tlx++) {
                for (var tly = fromy; tly <= toy; tly++) {
                    if (entity.isDead) {
                        break;
                    }
                    var tileUnder = this.getTileAt(tlx, tly);
                    if (!tileUnder) {
                        continue;
                    }
                    if (tileUnder.onTick) {
                        tileUnder.onTick(delta, entity, tlx, tly);
                    }
                    if (tileUnder.onLand && Math.abs(entity.hspeed - 0.0005) <= 0.001 && Math.abs(entity.vspeed - 0.0005) <= 0.001) {
                        tileUnder.onLand(entity, tlx, tly);
                    }
                }
            }
        }
    };
    World.prototype.getSpriteAt = function (x, y) {
        var tile = this.getTileAt(x, y);
        if (!tile.variants)
            return tile.sprite;
        var key = x + "_" + y;
        if (!this._variantCache.has(key)) {
            this._variantCache.set(key, this.variantNumber(x, y, tile.variants.length + 1));
        }
        var v = this._variantCache.get(key);
        if (!v)
            return tile.sprite;
        return tile.variants[v - 1];
    };
    World.prototype.getTileAt = function (x, y) {
        var chunk = this.getChunk(Math.floor(x / 64), Math.floor(y / 64));
        var _a = [engine_1.fmod(x, 64), engine_1.fmod(y, 64)], relativex = _a[0], relativey = _a[1];
        return chunk[relativex][relativey];
    };
    World.prototype.setTileAt = function (x, y, tile) {
        var chunk = this.getChunk(Math.floor(x / 64), Math.floor(y / 64));
        var _a = [engine_1.fmod(x, 64), engine_1.fmod(y, 64)], relativex = _a[0], relativey = _a[1];
        chunk[relativex][relativey] = tile;
        var key = x + "_" + y;
        if (this._variantCache.has(key))
            this._variantCache.delete(key);
    };
    World.prototype.getChunk = function (x, y) {
        var key = x + ", " + y;
        !this._chunks.has(key) && this._chunks.set(key, this.generateChunk(x, y));
        return this._chunks.get(key);
    };
    World.prototype.generateChunk = function (x, y) {
        var noise = noise_1.generateNoise(this.seed, x, y);
        var chunk = [];
        var chunkNames = [];
        for (var q = 0; q < 64; q++) {
            var names = [];
            for (var w = 0; w < 64; w++) {
                var num = noise[q][w];
                var name_1 = num < -.2 ? this.tileDefaults.water || 'water' :
                    num < .35 ? this.tileDefaults.grass || 'grass' :
                        num < .5 || w == 63 || (noise[q][w + 1] < .5 && (w == 0 || noise[q][w - 1] < .5)) ? this.tileDefaults.sand || 'sand' :
                            noise[q][w + 1] < .5 || w == 62 ? this.tileDefaults.wallSide || 'wallSide' :
                                this.tileDefaults.wallTop || 'wallTop';
                if (name_1 == (this.tileDefaults.grass || 'grass') && Math.random() < .0015) {
                    name_1 = this.tileDefaults.carrotCrop || 'carrotCrop';
                }
                names.push(name_1);
            }
            chunkNames.push(names);
        }
        for (var q = 0; q < 64; q++) {
            var column = [];
            for (var w = 0; w < 64; w++) {
                if (q > 0 && q < 63 && w > 0 && w < 63) {
                    var wallSideName = this.tileDefaults.wallSide || 'wallSide';
                    if ((chunkNames[q][w] == wallSideName) && (chunkNames[q - 1][w] == wallSideName) && (chunkNames[q + 1][w] == wallSideName)) {
                        chunkNames[q][w] = this.tileDefaults.teleporter || 'teleporter';
                    }
                }
                column.push(tile_db_1.tiles[chunkNames[q][w]]);
            }
            chunk.push(column);
        }
        return chunk;
    };
    World.prototype.variantNumber = function (x, y, variantCount) {
        for (var q = variantCount; q > 1; q--) {
            var n = Math.random() * Math.pow(q, 6 - (variantCount / 3));
            if (n < 1)
                return q - 1;
        }
        return 0;
    };
    return World;
}(engine_1.GameObject));
exports.World = World;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (typeof key == 'number' && value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  if (!(isArray(source) || isTypedArray(source))) {
    var props = baseKeysIn(source);
  }
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
      else {
        newValue = objValue;
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44), __webpack_require__(45)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(6);
var Camera = (function () {
    function Camera(_scene) {
        this._scene = _scene;
        this._clearColor = null;
        this._center = [0, 0];
        this._zoomScale = 1;
        this._maxZoomScale = 4;
        this._minZoomScale = .25;
        this._smoothing = true;
        if (!this._scene)
            throw new Error("You must pass in a valid Scene when you create a Camera.");
    }
    Object.defineProperty(Camera.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "game", {
        get: function () {
            return this.scene.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "clearColor", {
        get: function () {
            return this._clearColor;
        },
        set: function (val) {
            this._clearColor = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "center", {
        get: function () {
            return [this._center[0], this._center[1]];
        },
        set: function (_a) {
            var x = _a[0], y = _a[1];
            this._center = [x, y];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "zoomScale", {
        get: function () {
            return this._zoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The zoom scale must be positive");
            this._zoomScale = math_1.clamp(val, this.minZoomScale, this.maxZoomScale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "maxZoomScale", {
        get: function () {
            return this._maxZoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The max zoom scale must be positive");
            if (val < this._minZoomScale)
                throw new Error("The min zoom scale is greater than the max zoom scale.");
            this._maxZoomScale = val;
            this.zoomScale = this.zoomScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "minZoomScale", {
        get: function () {
            return this._minZoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The min zoom scale must be positive");
            if (val > this._maxZoomScale)
                throw new Error("The max zoom scale is less than the min zoom scale.");
            this._minZoomScale = val;
            this.zoomScale = this.zoomScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "enableSmoothing", {
        get: function () {
            return this._smoothing;
        },
        set: function (val) {
            this._smoothing = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "bounds", {
        get: function () {
            var _a = this.game.canvasSize, cvWidth = _a[0], cvHeight = _a[1];
            var _b = [(cvWidth / 2) / this._zoomScale, (cvHeight / 2) / this._zoomScale], hoff = _b[0], voff = _b[1];
            return {
                left: this._center[0] - hoff,
                right: this._center[0] + hoff,
                top: this._center[1] + voff,
                bottom: this._center[1] - voff
            };
        },
        enumerable: true,
        configurable: true
    });
    Camera.prototype.tick = function (delta) {
    };
    Camera.prototype.push = function (context) {
        var _a = this.game.canvasSize, cvWidth = _a[0], cvHeight = _a[1];
        context.save();
        if (this._clearColor) {
            context.fillStyle = this._clearColor;
            context.fillRect(0, 0, cvWidth, cvHeight);
        }
        context.imageSmoothingEnabled = context.mozImageSmoothingEnabled = context.oImageSmoothingEnabled = context.webkitImageSmoothingEnabled = this._smoothing;
        context.translate(Math.floor(cvWidth / 2), Math.floor(cvHeight / 2));
        context.scale(this._zoomScale, this._zoomScale);
        context.translate(-Math.floor(this._center[0]), -Math.floor(this._center[1]));
    };
    Camera.prototype.pop = function (context) {
        context.restore();
    };
    return Camera;
}());
exports.Camera = Camera;
//# sourceMappingURL=camera.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sprite_1 = __webpack_require__(25);
var math_1 = __webpack_require__(6);
var LINE_HEIGHT = 12;
function fillText(context, text, x, y) {
    var lines = text.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        context.fillText(line, x, y);
        y += LINE_HEIGHT;
    }
}
exports.fillText = fillText;
function drawSprite(context, loader, sprite, x, y, imageIndex, defaultFps) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (imageIndex === void 0) { imageIndex = 0; }
    if (defaultFps === void 0) { defaultFps = 30; }
    if (!loader || !loader.loadImage)
        throw new Error("You must pass in a valid ResourceLoader to draw a sprite.");
    if (!sprite || !sprite.src)
        throw new Error("Invalid sprite. Cannot render " + sprite + ".");
    var img = loader.loadImage(sprite.src);
    var pivot = sprite.pivot || { x: 0, y: 0 };
    if (sprite_1.isAnimationSprite(sprite)) {
        var tileset = sprite.tileset;
        var frames_1 = sprite.frames;
        var fps = sprite.framesPerSecond;
        if (typeof fps === 'undefined')
            fps = defaultFps;
        var frameIdx = math_1.fmod(Math.floor(imageIndex * fps), frames_1.length);
        var frame = frames_1[frameIdx];
        context.drawImage(img, frame.tilex * tileset.width, frame.tiley * tileset.height, tileset.width, tileset.height, x - pivot.x, y - pivot.y, tileset.width, tileset.height);
    }
    else if (sprite_1.isSingleTileSprite(sprite)) {
        var tileset = sprite.tileset;
        context.drawImage(img, tileset.tilex * tileset.width, tileset.tiley * tileset.height, tileset.width, tileset.height, x - pivot.x, y - pivot.y, tileset.width, tileset.height);
    }
    else {
        context.drawImage(img, x - pivot.x, y - pivot.y);
    }
}
exports.drawSprite = drawSprite;
function measureSprite(loader, sprite) {
    if (!sprite || !sprite.src)
        throw new Error("Invalid sprite. Cannot measure " + sprite + ".");
    var img = loader && loader.loadImage(sprite.src);
    if (sprite_1.isAnimationSprite(sprite) || sprite_1.isSingleTileSprite(sprite)) {
        var _a = sprite.tileset, width = _a.width, height = _a.height;
        return { width: width, height: height };
    }
    else {
        return { width: img.width || 0, height: img.height || 0 };
    }
}
exports.measureSprite = measureSprite;
//# sourceMappingURL=render.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
exports.effects = {
    'explosion': {
        sprite: {
            src: 'images/Effects/Fire2.png',
            tileset: { width: 192, height: 192 },
            frames: [
                { tilex: 0, tiley: 0 },
                { tilex: 1, tiley: 0 },
                { tilex: 2, tiley: 0 },
                { tilex: 3, tiley: 0 },
                { tilex: 4, tiley: 0 },
                { tilex: 0, tiley: 1 },
                { tilex: 1, tiley: 1 },
                { tilex: 2, tiley: 1 },
                { tilex: 3, tiley: 1 },
                { tilex: 4, tiley: 1 },
                { tilex: 0, tiley: 2 },
                { tilex: 1, tiley: 2 },
                { tilex: 2, tiley: 2 }
            ],
            pivot: { x: 192 / 2 - 16, y: 192 / 2 - 16 }
        }
    },
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var sfx_db_1 = __webpack_require__(1);
exports.ITEM_SIZE = 24;
;
exports.items = {
    crop_carrot: {
        sprite: {
            src: 'images/Icons/IconSet.png',
            tileset: { width: exports.ITEM_SIZE, height: exports.ITEM_SIZE, tilex: 0, tiley: 18 }
        },
        onUse: function (player) {
            player.recoverDamage(300);
            player.scene.addObject(new engine_1.AudioSourceObject('heal', sfx_db_1.sfx['heal'], { x: player.x, y: player.y }));
        }
    }
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var gui_db_1 = __webpack_require__(7);
var menu_gui_object_1 = __webpack_require__(9);
var InGameGuiObject = (function (_super) {
    __extends(InGameGuiObject, _super);
    function InGameGuiObject() {
        var _this = _super.call(this, gui_db_1.gui['inventory']) || this;
        _this.showInventory = false;
        return _this;
    }
    Object.defineProperty(InGameGuiObject.prototype, "gameTimeString", {
        get: function () {
            var gameTime = this.scene.world.gameTime;
            var day = Math.floor(gameTime);
            var hour = Math.floor((gameTime - day) * 24);
            return "Day " + (day + 1) + ", " + ((hour + 23) % 12 + 1) + " " + (hour < 12 ? 'AM' : 'PM');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InGameGuiObject.prototype, "score", {
        get: function () {
            return "Score: " + this.game.score;
        },
        enumerable: true,
        configurable: true
    });
    InGameGuiObject.prototype.handleEvent = function (evt) {
        if (evt.type === 'keyPressed') {
            if (evt.code == 'KeyE' || (evt.code == 'Escape' && this.showInventory)) {
                this.showInventory = !this.showInventory;
                var game = this.game;
                if (this.showInventory) {
                    game.onPause.emit(void (0));
                }
                else
                    game.onPlay.emit(void (0));
                return true;
            }
        }
        return this.showInventory && _super.prototype.handleEvent.call(this, evt);
    };
    InGameGuiObject.prototype.tick = function (delta) {
        if (this.showInventory)
            _super.prototype.tick.call(this, delta);
    };
    InGameGuiObject.prototype.renderImpl = function (context) {
        var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
        var timeText = this.gameTimeString;
        context.font = '24px Verdana';
        var timeTextWidth = context.measureText(timeText).width;
        var scoreText = this.score;
        var scoreTextWidth = context.measureText(scoreText).width;
        var timeyOffset = 0;
        var scoreyOffset = 24;
        context.fillStyle = 'rgba(0, 0, 0, .5)';
        context.fillRect(canvasWidth - (8 + timeTextWidth), timeyOffset, 8 + timeTextWidth, 8 + 24);
        context.fillStyle = 'rgba(0, 0, 0, .5)';
        context.fillRect(canvasWidth - (8 + scoreTextWidth), scoreyOffset + 8, 8 + scoreTextWidth, 8 + 24);
        context.fillStyle = 'white';
        context.textAlign = 'right';
        context.textBaseline = 'top';
        context.fillText(timeText, canvasWidth - 4, timeyOffset + 4);
        context.fillText(scoreText, canvasWidth - 4, scoreyOffset + 10);
        this.renderHealth(context);
        if (this.showInventory) {
            _super.prototype.renderImpl.call(this, context);
        }
    };
    InGameGuiObject.prototype.renderHealth = function (context) {
        var HEART_SIZE = 24;
        var OFFSET_FROM_BOTTOM = 8;
        var DEFAULT_MAX_HEARTS = 10;
        var p = this.scene.findObject('Player');
        var total = (p && p.maxHealth) || DEFAULT_MAX_HEARTS;
        var hearts = (p && p.currentHealth) || 0;
        var _a = this.game.canvasSize, xx = _a[0], yy = _a[1];
        xx /= 2;
        xx -= (HEART_SIZE * (total - 1)) / 2;
        yy -= OFFSET_FROM_BOTTOM;
        var fullHeartSprite = gui_db_1.gui['full-health-heart'].sprite;
        var emptyHeartSprite = gui_db_1.gui['empty-health-heart'].sprite;
        for (var q = 0; q < total; q++) {
            var spr = (q < hearts) ? fullHeartSprite : emptyHeartSprite;
            engine_1.drawSprite(context, this.resources, spr, xx + (q * HEART_SIZE), yy, this.animationAge);
        }
    };
    return InGameGuiObject;
}(menu_gui_object_1.MenuGuiObject));
exports.InGameGuiObject = InGameGuiObject;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var LightingObject = (function (_super) {
    __extends(LightingObject, _super);
    function LightingObject(ambient, dayNightCycle) {
        if (ambient === void 0) { ambient = 1; }
        if (dayNightCycle === void 0) { dayNightCycle = true; }
        var _this = _super.call(this, 'LightingObject', { renderCamera: 'none' }) || this;
        _this.ambient = ambient;
        _this.dayNightCycle = dayNightCycle;
        _this.compositeCanvas = document.createElement('canvas');
        _this.compositeContext = _this.compositeCanvas.getContext('2d');
        return _this;
    }
    LightingObject.prototype.renderImpl = function (context) {
        var world = this.scene.world;
        if (!world && this.dayNightCycle)
            throw new Error("Unsupported state: no world, no game time; but dayNightCycle is true!");
        var darkness = 0;
        var gameTime = world && (world.gameTime - Math.floor(world.gameTime));
        if (this.dayNightCycle && (gameTime <= 7 / 24 || gameTime >= 19 / 24)) {
            darkness = 1;
            if (gameTime <= 7 / 24 && gameTime > 5.5 / 24)
                darkness = 1 - ((gameTime * 24) - 5.5) / 1.5;
            if (gameTime >= 19 / 24 && gameTime < 20.5 / 24)
                darkness = ((gameTime * 24) - 19) / 1.5;
            darkness *= .95;
        }
        darkness = Math.max(1 - this.ambient, darkness);
        if (darkness == 0)
            return;
        this.createCompositeImage(darkness);
        context.save();
        try {
            context.globalCompositeOperation = 'multiply';
            context.drawImage(this.compositeCanvas, 0, 0);
        }
        finally {
            context.restore();
        }
    };
    LightingObject.prototype.createCompositeImage = function (darkness) {
        var _a = this.game.canvasSize, width = _a[0], height = _a[1];
        _b = [width, height], this.compositeCanvas.width = _b[0], this.compositeCanvas.height = _b[1];
        var ctx = this.compositeContext;
        var color = Math.floor(255 * (1 - darkness));
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = "rgb(" + color + ", " + color + ", " + color + ")";
        ctx.fillRect(0, 0, width, height);
        var camera = this.scene.camera;
        if (camera)
            camera.push(ctx);
        try {
            ctx.globalCompositeOperation = 'lighten';
            var objects = this.scene.findObjects();
            for (var _i = 0, _c = objects.filter(function (obj) { return typeof obj.renderLight === 'function'; }); _i < _c.length; _i++) {
                var obj = _c[_i];
                obj.renderLight(ctx);
            }
        }
        finally {
            if (camera)
                camera.pop(ctx);
        }
        var _b;
    };
    return LightingObject;
}(engine_1.GameObject));
exports.LightingObject = LightingObject;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tile_db_1 = __webpack_require__(2);
var dead_player_1 = __webpack_require__(28);
var engine_1 = __webpack_require__(0);
var entity_1 = __webpack_require__(4);
var alive_db_1 = __webpack_require__(3);
var sfx_db_1 = __webpack_require__(1);
var pause_with_game_1 = __webpack_require__(5);
var merge = __webpack_require__(11);
var bomb_1 = __webpack_require__(27);
var simple_enemy_1 = __webpack_require__(20);
var inventory_1 = __webpack_require__(30);
var CLOSE_ENOUGH = 3.0;
var MOVE_SPEED = 4 * 30;
var SIZE = 32;
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(opts) {
        if (opts === void 0) { opts = { maxHealth: 10 }; }
        var _this = _super.call(this, "Player", merge({
            sprite: alive_db_1.alives['player-south'].sprite,
            collisionBounds: new engine_1.Rect(0, SIZE, 0, SIZE),
            takeDamageSound: sfx_db_1.sfx['playerDamage'],
            killSound: sfx_db_1.sfx['playerDeath']
        }, opts)) || this;
        _this.bombPlaceTimer = 0.0;
        _this._inventory = new inventory_1.Inventory();
        _this._lightSourceSprite = alive_db_1.alives['large-dim-light-source'].sprite;
        return _this;
    }
    Player.prototype.addToScene = function (scene) {
        _super.prototype.addToScene.call(this, scene);
        pause_with_game_1.pauseWithGame(this);
    };
    Player.prototype.handleEvent = function (evt) {
        if (evt.type == 'mouseWheel') {
            var scale = Math.pow(2, -engine_1.clamp(evt.delta, -1, 1) / 7);
            this.game.scene.camera.zoomScale *= scale;
        }
        else if (evt.type == 'keyPressed') {
            if (this.events.isKeyDown('Space') && this.bombPlaceTimer <= 0.0) {
                var offset = [0, 0];
                if (this.sprite == alive_db_1.alives['player-east'].sprite) {
                    offset = [1, 0];
                }
                else if (this.sprite == alive_db_1.alives['player-west'].sprite) {
                    offset = [-1, 0];
                }
                else if (this.sprite == alive_db_1.alives['player-south'].sprite) {
                    offset = [0, 1];
                }
                else if (this.sprite == alive_db_1.alives['player-north'].sprite) {
                    offset = [0, -1];
                }
                this.scene.addObject(new bomb_1.Bomb({
                    x: Math.floor(this.x / tile_db_1.TILE_SIZE + offset[0]) * tile_db_1.TILE_SIZE,
                    y: Math.floor(this.y / tile_db_1.TILE_SIZE + offset[1]) * tile_db_1.TILE_SIZE,
                }));
                this.bombPlaceTimer = 1.0;
            }
        }
        _super.prototype.handleEvent.call(this, evt);
    };
    Player.prototype.tick = function (delta) {
        this.bombPlaceTimer -= delta;
        var h = 0.0;
        if ((this.events.isKeyDown('ArrowLeft') || this.events.isKeyDown('KeyA')) && (Math.abs(this.vspeed) < CLOSE_ENOUGH)) {
            h -= MOVE_SPEED;
        }
        if ((this.events.isKeyDown('ArrowRight') || this.events.isKeyDown('KeyD')) && (Math.abs(this.vspeed) < CLOSE_ENOUGH)) {
            h += MOVE_SPEED;
        }
        var v = 0.0;
        if ((this.events.isKeyDown('ArrowUp') || this.events.isKeyDown('KeyW')) && (Math.abs(this.hspeed) < CLOSE_ENOUGH)) {
            v -= MOVE_SPEED;
        }
        if ((this.events.isKeyDown('ArrowDown') || this.events.isKeyDown('KeyS')) && (Math.abs(this.hspeed) < CLOSE_ENOUGH)) {
            v += MOVE_SPEED;
        }
        this.snapToTile(h, v);
        _super.prototype.tick.call(this, delta);
        this.animationSpeed = this.speed > 0 ? .2 : 0;
        if (this.hspeed > 0)
            this.sprite = alive_db_1.alives['player-east'].sprite;
        else if (this.hspeed < 0)
            this.sprite = alive_db_1.alives['player-west'].sprite;
        else if (this.vspeed > 0)
            this.sprite = alive_db_1.alives['player-south'].sprite;
        else if (this.vspeed < 0)
            this.sprite = alive_db_1.alives['player-north'].sprite;
        for (var _i = 0, _a = this.scene.findObjects(function (obj) { return obj instanceof simple_enemy_1.SimpleEnemy; }); _i < _a.length; _i++) {
            var entity = _a[_i];
            var xDiff = entity.x - this.x;
            var yDiff = entity.y - this.y;
            var distSqrd = (xDiff * xDiff) + (yDiff * yDiff);
            if (distSqrd <= 32 * 32) {
                this.takeDamage(2);
                break;
            }
        }
    };
    Player.prototype.renderLight = function (context) {
        engine_1.drawSprite(context, this.resources, this._lightSourceSprite, this.x + (SIZE / 2), this.y + (SIZE / 2), this.animationAge);
    };
    Player.prototype.kill = function () {
        this.scene.addObject(new dead_player_1.DeadPlayer({
            x: this.x,
            y: this.y
        }));
        _super.prototype.kill.call(this);
    };
    Object.defineProperty(Player.prototype, "inventory", {
        get: function () {
            return this._inventory;
        },
        set: function (val) {
            this._inventory = val;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}(entity_1.Entity));
exports.Player = Player;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var world_1 = __webpack_require__(10);
var menu_gui_object_1 = __webpack_require__(9);
var grid_renderer_1 = __webpack_require__(8);
var sfx_db_1 = __webpack_require__(1);
var TitleScene = (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene() {
        return _super.call(this) || this;
    }
    Object.defineProperty(TitleScene.prototype, "world", {
        get: function () {
            return this._world;
        },
        enumerable: true,
        configurable: true
    });
    TitleScene.prototype.start = function () {
        _super.prototype.start.call(this);
        this._world = new world_1.World();
        this.addObject(this._world);
        this.addObject(new grid_renderer_1.GridRenderer());
        this.addObject(new menu_gui_object_1.MenuGuiObject('title'));
        var cameraFollowObject = new engine_1.GameObject("CameraFollowObject", {
            direction: -30,
            speed: 4 * 30,
            shouldRender: false
        });
        this.addObject(cameraFollowObject);
        this.addObject(new engine_1.AudioSourceObject('Music', sfx_db_1.sfx['titleScreenMusic'], { shouldLoop: true }));
        var camera = this.camera = new engine_1.FollowCamera(this);
        camera.follow = cameraFollowObject;
        camera.enableSmoothing = false;
        this.game.score = 0;
    };
    return TitleScene;
}(engine_1.GameScene));
exports.TitleScene = TitleScene;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__(4);
var alive_db_1 = __webpack_require__(3);
var merge = __webpack_require__(11);
var sfx_db_1 = __webpack_require__(1);
var engine_1 = __webpack_require__(0);
var pause_with_game_1 = __webpack_require__(5);
var SIZE = 32;
var CLOSE_ENOUGH = 3.0;
var MOVE_SPEED = 4 * 30;
var SimpleEnemy = (function (_super) {
    __extends(SimpleEnemy, _super);
    function SimpleEnemy(opts) {
        if (opts === void 0) { opts = { maxHealth: 5 }; }
        var _this = _super.call(this, "Simple Enemy", merge({
            sprite: alive_db_1.alives['bat-south'].sprite,
            collisionBounds: new engine_1.Rect(0, SIZE, 0, SIZE),
            killSound: sfx_db_1.sfx['batDeath'],
            flying: true
        }, opts)) || this;
        _this._moves = [0, 1, 2];
        return _this;
    }
    SimpleEnemy.prototype.addToScene = function (scene) {
        _super.prototype.addToScene.call(this, scene);
        pause_with_game_1.pauseWithGame(this);
    };
    SimpleEnemy.prototype.getMove = function () {
        var r = Math.random();
        var i = this._moves[Math.floor(r * 3.0)];
        this._moves = [0, 1, 2, 3].filter(function (x) { return (x != ((i + 2) % 4)); });
        return i;
    };
    SimpleEnemy.prototype.tick = function (delta) {
        var h = 0.0;
        var v = 0.0;
        if (this.speed <= 0.01) {
            var i = this.getMove();
            if ((i == 0)) {
                v = -MOVE_SPEED;
            }
            else if ((i == 1)) {
                h = +MOVE_SPEED;
            }
            else if ((i == 2)) {
                v = +MOVE_SPEED;
            }
            else if ((i == 3)) {
                h = -MOVE_SPEED;
            }
        }
        this.snapToTile(h, v);
        _super.prototype.tick.call(this, delta);
        this.animationSpeed = this.speed > 0 ? .2 : 0;
        if (this.hspeed > 0)
            this.sprite = alive_db_1.alives['bat-east'].sprite;
        else if (this.hspeed < 0)
            this.sprite = alive_db_1.alives['bat-west'].sprite;
        else if (this.vspeed > 0)
            this.sprite = alive_db_1.alives['bat-south'].sprite;
        else if (this.vspeed < 0)
            this.sprite = alive_db_1.alives['bat-north'].sprite;
    };
    SimpleEnemy.prototype.kill = function () {
        this.game.score += 50;
        _super.prototype.kill.call(this);
    };
    return SimpleEnemy;
}(entity_1.Entity));
exports.SimpleEnemy = SimpleEnemy;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventQueue = (function () {
    function EventQueue() {
        this.DEBUG_KEYS = false;
        this.DEBUG_MOUSE = false;
        this._events = [];
        this._keys = new Map();
        this._mouseButtons = new Map();
        this._pageX = 0;
        this._pageY = 0;
        this.init();
    }
    EventQueue.prototype.init = function () {
        var body = document.getElementsByTagName('body')[0];
        this.initKeyboard(body);
        this.initMouse(body);
    };
    EventQueue.prototype.initKeyboard = function (body) {
        var _this = this;
        body.onkeydown = function (e) {
            if (_this.DEBUG_KEYS)
                console.log("Key Pressed: " + e.key + "; " + e.code);
            if (!_this.isKeyDown(e.code)) {
                _this.enqueue({
                    type: 'keyPressed',
                    code: e.code,
                    altPressed: !!e.altKey,
                    ctrlPressed: !!e.ctrlKey,
                    shiftPressed: !!e.shiftKey
                });
                _this._keys.set(e.code, true);
            }
            _this.enqueue({
                type: 'keyTyped',
                key: e.key,
                code: e.code,
                altPressed: !!e.altKey,
                ctrlPressed: !!e.ctrlKey,
                shiftPressed: !!e.shiftKey
            });
        };
        body.onkeyup = function (e) {
            if (_this.DEBUG_KEYS)
                console.log("Key Released: " + e.key + "; " + e.code);
            if (_this.isKeyDown(e.code)) {
                _this.enqueue({
                    type: 'keyReleased',
                    code: e.code,
                    altPressed: !!e.altKey,
                    ctrlPressed: !!e.ctrlKey,
                    shiftPressed: !!e.shiftKey
                });
                _this._keys.set(e.code, false);
            }
        };
    };
    EventQueue.prototype.initMouse = function (body) {
        var _this = this;
        body.onmousemove = function (e) {
            if (_this.DEBUG_MOUSE)
                console.log("Mouse moved. Movement: " + e.movementX + ", " + e.movementY + "; Position: " + e.pageX + ", " + e.pageY);
            if (typeof e.pageX !== 'undefined')
                _this._pageX = e.pageX;
            else
                _this._pageX += e.movementX;
            if (typeof e.pageY !== 'undefined')
                _this._pageY = e.pageY;
            else
                _this._pageY += e.movementY;
            _this.enqueue({
                type: 'mouseMoved',
                movementX: e.movementX,
                movementY: e.movementY,
                pageX: _this._pageX,
                pageY: _this._pageY
            });
        };
        body.onmousedown = function (e) {
            if (_this.DEBUG_MOUSE)
                console.log("Mouse button pressed. Button: " + e.button + "; Position: " + e.pageX + ", " + e.pageY);
            if (!_this.isMouseButtonDown(e.button)) {
                if (typeof e.pageX !== 'undefined')
                    _this._pageX = e.pageX;
                if (typeof e.pageY !== 'undefined')
                    _this._pageY = e.pageY;
                _this.enqueue({
                    type: 'mouseButtonPressed',
                    button: e.button,
                    pageX: _this._pageX,
                    pageY: _this._pageY
                });
                _this._mouseButtons.set(e.button, true);
            }
        };
        body.onmouseup = function (e) {
            if (_this.DEBUG_MOUSE)
                console.log("Mouse button released. Button: " + e.button + "; Position: " + e.pageX + ", " + e.pageY);
            if (_this.isMouseButtonDown(e.button)) {
                if (typeof e.pageX !== 'undefined')
                    _this._pageX = e.pageX;
                if (typeof e.pageY !== 'undefined')
                    _this._pageY = e.pageY;
                _this.enqueue({
                    type: 'mouseButtonReleased',
                    button: e.button,
                    pageX: _this._pageX,
                    pageY: _this._pageY
                });
                _this._mouseButtons.set(e.button, false);
            }
        };
        body.onwheel = function (e) {
            if (_this.DEBUG_MOUSE)
                console.log("Mouse wheel. delta: " + e.deltaY + "; Position: " + e.pageX + ", " + e.pageY);
            if (typeof e.pageX !== 'undefined')
                _this._pageX = e.pageX;
            if (typeof e.pageY !== 'undefined')
                _this._pageY = e.pageY;
            _this.enqueue({
                type: 'mouseWheel',
                delta: e.deltaY,
                pageX: _this._pageX,
                pageY: _this._pageY
            });
        };
    };
    EventQueue.prototype.isKeyDown = function (code) {
        if (!this._keys.has(code))
            return false;
        return this._keys.get(code);
    };
    EventQueue.prototype.isMouseButtonDown = function (button) {
        if (!this._mouseButtons.has(button))
            return false;
        return this._mouseButtons.get(button);
    };
    Object.defineProperty(EventQueue.prototype, "mousePosition", {
        get: function () {
            return { x: this._pageX, y: this._pageY };
        },
        enumerable: true,
        configurable: true
    });
    EventQueue.prototype.enqueue = function (e) {
        var lastEvent = this._events[this._events.length - 1];
        if (lastEvent && lastEvent.type == e.type) {
            switch (e.type) {
                case 'mouseMoved':
                    lastEvent.movementX += e.movementX;
                    lastEvent.movementY += e.movementY;
                    lastEvent.pageX = e.pageX;
                    lastEvent.pageY = e.pageY;
                    return;
                case 'mouseWheel':
                    lastEvent.delta += e.delta;
                    return;
                case 'canvasResize':
                    lastEvent.size = e.size;
                    return;
            }
        }
        this._events.push(e);
    };
    EventQueue.prototype.clearQueue = function () {
        return this._events.splice(0);
    };
    return EventQueue;
}());
exports.EventQueue = EventQueue;
//# sourceMappingURL=event-queue.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(6);
var rect_1 = __webpack_require__(24);
var render_1 = __webpack_require__(13);
;
var GameObject = (function () {
    function GameObject(name, opts) {
        if (opts === void 0) { opts = {}; }
        this.DEBUG_MOVEMENT = false;
        this._x = 0;
        this._y = 0;
        this._shouldTick = true;
        this._dir = 0;
        this._speed = 0;
        this._hspeed = 0;
        this._vspeed = 0;
        this._shouldRender = true;
        this._renderCamera = 'default';
        this._sprite = null;
        this._animationAge = 0;
        this._animationSpeed = 1;
        this._imageAngle = 0;
        this._name = name;
        if (typeof opts.x != 'undefined')
            this.x = opts.x;
        if (typeof opts.y != 'undefined')
            this.y = opts.y;
        if (typeof opts.collisionBounds != 'undefined')
            this.collisionBounds = opts.collisionBounds;
        if (typeof opts.shouldTick != 'undefined')
            this.shouldTick = opts.shouldTick;
        if (typeof opts.direction != 'undefined')
            this.direction = opts.direction;
        if (typeof opts.speed != 'undefined')
            this.speed = opts.speed;
        if (typeof opts.hspeed != 'undefined')
            this.hspeed = opts.hspeed;
        if (typeof opts.vspeed != 'undefined')
            this.vspeed = opts.vspeed;
        if (typeof opts.shouldRender != 'undefined')
            this.shouldRender = opts.shouldRender;
        if (typeof opts.renderCamera != 'undefined')
            this.renderCamera = opts.renderCamera;
        if (typeof opts.sprite != 'undefined')
            this.sprite = opts.sprite;
        if (typeof opts.animationAge != 'undefined')
            this.animationAge = opts.animationAge;
        if (typeof opts.animationSpeed != 'undefined')
            this.animationSpeed = opts.animationSpeed;
        if (typeof opts.imageAngle != 'undefined')
            this.imageAngle = opts.imageAngle;
    }
    Object.defineProperty(GameObject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            this._x = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (val) {
            this._y = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "collisionBounds", {
        get: function () {
            if (!this._collisionBounds) {
                if (!this.sprite)
                    return rect_1.Rect.zero;
                var pivot = this.sprite.pivot || { x: 0, y: 0 };
                var spriteSize = render_1.measureSprite(this.resources, this.sprite);
                return new rect_1.Rect(-pivot.x, spriteSize.width - pivot.x, -pivot.y, spriteSize.height - pivot.y);
            }
            return this._collisionBounds;
        },
        set: function (val) {
            this._collisionBounds = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "shouldTick", {
        get: function () {
            return this._shouldTick;
        },
        set: function (val) {
            this._shouldTick = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "direction", {
        get: function () {
            return this._dir;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting direction: " + val);
            val = math_1.fmod(val, 360);
            if (this._dir == val)
                return;
            this._dir = val;
            this.updateHVSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting speed: " + val);
            if (val < 0)
                throw new Error("Invalid speed: " + val + ". Must be >= 0");
            if (this._speed == val)
                return;
            this._speed = val;
            this.updateHVSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "hspeed", {
        get: function () {
            return this._hspeed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting hspeed: " + val);
            if (this._hspeed == val)
                return;
            this._hspeed = val;
            this.updateDirectionAndSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "vspeed", {
        get: function () {
            return this._vspeed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting vspeed: " + val);
            if (this._vspeed == val)
                return;
            this._vspeed = val;
            this.updateDirectionAndSpeed();
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.updateHVSpeed = function () {
        var radians = math_1.degToRad(this._dir);
        this._vspeed = -Math.sin(radians) * this._speed;
        this._hspeed = Math.cos(radians) * this._speed;
        if (this.DEBUG_MOVEMENT)
            console.log("  hspeed: " + this._hspeed + "; vspeed: " + this._vspeed);
    };
    GameObject.prototype.updateDirectionAndSpeed = function () {
        this._speed = Math.sqrt(this._hspeed * this._hspeed + this._vspeed * this._vspeed);
        if (this._speed == 0)
            return;
        this._dir = math_1.pointDirection(0, 0, this._hspeed, this._vspeed);
        if (this._dir < 0)
            this._dir += 360;
        if (this.DEBUG_MOVEMENT)
            console.log("  speed: " + this._speed + "; direction: " + this._dir);
    };
    Object.defineProperty(GameObject.prototype, "shouldRender", {
        get: function () {
            return this._shouldRender;
        },
        set: function (val) {
            this._shouldRender = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "renderCamera", {
        get: function () {
            return this._renderCamera;
        },
        set: function (val) {
            this._renderCamera = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (val) {
            this._sprite = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "animationAge", {
        get: function () {
            return this._animationAge;
        },
        set: function (val) {
            this._animationAge = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "animationSpeed", {
        get: function () {
            return this._animationSpeed;
        },
        set: function (val) {
            this._animationSpeed = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "imageAngle", {
        get: function () {
            return this._imageAngle;
        },
        set: function (val) {
            this._imageAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "scene", {
        get: function () {
            if (!this._scene)
                return null;
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "game", {
        get: function () {
            if (!this.scene)
                return null;
            return this.scene.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "resources", {
        get: function () {
            if (!this.game)
                return null;
            return this.game.resourceLoader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "events", {
        get: function () {
            if (!this.game)
                return null;
            return this.game.eventQueue;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.addToScene = function (scene) {
        if (this._scene)
            throw new Error('This game object is already added to a scene!');
        this._scene = scene;
    };
    GameObject.prototype.removeFromScene = function () {
        this._scene = null;
    };
    GameObject.prototype.onSceneEnter = function () { };
    GameObject.prototype.onSceneExit = function () { };
    GameObject.prototype.handleEvent = function (evt) {
    };
    GameObject.prototype.tick = function (delta) {
        if (!this.shouldTick)
            return;
        this.x += this.hspeed * delta;
        this.y += this.vspeed * delta;
        this.animationAge += this.animationSpeed * delta;
    };
    GameObject.prototype.render = function (context) {
        if (!this.shouldRender)
            return;
        context.save();
        try {
            context.translate(this.x, this.y);
            context.rotate(-math_1.degToRad(this.imageAngle));
            this.renderImpl(context);
        }
        finally {
            context.restore();
        }
    };
    GameObject.prototype.renderImpl = function (context) {
        if (this.sprite) {
            render_1.drawSprite(context, this.resources, this.sprite, 0, 0, this.animationAge);
        }
        else {
            context.fillStyle = 'red';
            context.fillRect(0, 0, 16, 16);
            context.fillStyle = 'white';
            context.font = '16px Consolas';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('?', 0 + 8, 0 + 8);
        }
    };
    return GameObject;
}());
exports.GameObject = GameObject;
//# sourceMappingURL=game-object.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(13);
var ResourceLoader = (function () {
    function ResourceLoader() {
        this.DEBUG_RESOURCES = false;
        this._resourcesLoaded = 0;
        this._resourcesLoading = 0;
        this._errors = [];
        this._images = new Map();
        this._audio = new Map();
        var pathParts = window.location.pathname.split('/');
        this._baseUrl = window.location.origin + (pathParts[pathParts.length - 1] == 'index.html' ? pathParts.slice(0, pathParts.length - 1) : pathParts).join('/');
        if (this._baseUrl.startsWith('null/'))
            this._baseUrl = 'file:///' + this._baseUrl.slice(5);
    }
    ResourceLoader.prototype.addPreloadStrategy = function (strategy) {
        strategy.preload(this);
    };
    Object.defineProperty(ResourceLoader.prototype, "baseUrl", {
        get: function () {
            return this._baseUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "resourcesLoaded", {
        get: function () {
            return this._resourcesLoaded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "totalResources", {
        get: function () {
            return this._resourcesLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "error", {
        get: function () {
            return this._errors.join('\n');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "isDone", {
        get: function () {
            return this.totalResources == this.resourcesLoaded && !this.error;
        },
        enumerable: true,
        configurable: true
    });
    ResourceLoader.prototype.loadImage = function (src) {
        var _this = this;
        src = this.resolvePath(src);
        if (this._images.has(src))
            return this._images.get(src);
        this._resourcesLoading++;
        if (this.DEBUG_RESOURCES)
            console.log("Loading image: '" + src + "'");
        var img = document.createElement('img');
        this._images.set(src, img);
        img.onload = function () {
            _this._resourcesLoaded++;
        };
        img.onerror = function (e) {
            _this._errors.push("ERROR: Could not load " + src);
        };
        img.src = src;
        return img;
    };
    ResourceLoader.prototype.loadAudio = function (src) {
        var _this = this;
        src = this.resolvePath(src);
        if (this._audio.has(src))
            return this._audio.get(src);
        this._resourcesLoading++;
        if (this.DEBUG_RESOURCES)
            console.log("Loading audio: '" + src + "'");
        var aud = document.createElement('audio');
        this._audio.set(src, aud);
        aud.onloadeddata = function () {
            _this._resourcesLoaded++;
        };
        aud.onerror = function (e) {
            _this._errors.push("ERROR: Could not load " + src);
        };
        aud.src = src;
        return aud;
    };
    ResourceLoader.prototype.resolvePath = function (src) {
        if (src.match(/^[a-z]:\/\//i))
            return src;
        if (src.startsWith('/'))
            return "" + this.baseUrl + src;
        else
            return this.baseUrl + "/" + src;
    };
    ResourceLoader.prototype.render = function (context) {
        context.fillStyle = 'grey';
        context.fillRect(0, 0, context.canvas.scrollWidth, context.canvas.scrollHeight);
        if (this.totalResources > 0) {
            context.fillStyle = 'white';
            context.fillRect(4, 4, 100, 4);
            context.fillStyle = 'black';
            context.fillRect(4, 4, 100 * (this.resourcesLoaded / this.totalResources), 4);
        }
        var msg = this.resourcesLoaded + "/" + this.totalResources;
        if (this._errors.length)
            msg += '\n' + this.error;
        context.textBaseline = 'top';
        context.textAlign = 'left';
        context.fillStyle = 'black';
        render_1.fillText(context, msg, 4, 12);
    };
    return ResourceLoader;
}());
exports.ResourceLoader = ResourceLoader;
//# sourceMappingURL=resource-loader.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rect = (function () {
    function Rect(left, right, bottom, top) {
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.top = top;
    }
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this.top - this.bottom;
        },
        enumerable: true,
        configurable: true
    });
    return Rect;
}());
Rect.zero = new Rect(0, 0, 0, 0);
exports.Rect = Rect;
;
//# sourceMappingURL=rect.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isSingleTileSprite(sprite) {
    return !!sprite.tileset && !sprite.frames;
}
exports.isSingleTileSprite = isSingleTileSprite;
function isAnimationSprite(sprite) {
    return !!sprite.frames;
}
exports.isAnimationSprite = isAnimationSprite;
//# sourceMappingURL=sprite.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var tile_preload_strategy_1 = __webpack_require__(37);
var item_preload_strategy_1 = __webpack_require__(35);
var alive_preload_strategy_1 = __webpack_require__(32);
var gui_preload_strategy_1 = __webpack_require__(34);
var effect_preload_strategy_1 = __webpack_require__(33);
var title_scene_1 = __webpack_require__(19);
var sfx_preload_strategy_1 = __webpack_require__(36);
var AgileGame = (function (_super) {
    __extends(AgileGame, _super);
    function AgileGame(framesPerSecond) {
        if (framesPerSecond === void 0) { framesPerSecond = 30; }
        var _this = _super.call(this, framesPerSecond) || this;
        _this._pause = new engine_1.EventEmitter();
        _this._play = new engine_1.EventEmitter();
        _this._score = 0;
        _this.resourceLoader.addPreloadStrategy(new tile_preload_strategy_1.TilePreloadStrategy());
        _this.resourceLoader.addPreloadStrategy(new item_preload_strategy_1.ItemPreloadStrategy());
        _this.resourceLoader.addPreloadStrategy(new alive_preload_strategy_1.AlivePreloadStrategy());
        _this.resourceLoader.addPreloadStrategy(new gui_preload_strategy_1.GuiPreloadStrategy());
        _this.resourceLoader.addPreloadStrategy(new sfx_preload_strategy_1.SfxPreloadStrategy());
        _this.resourceLoader.addPreloadStrategy(new effect_preload_strategy_1.EffectPreloadStrategy());
        return _this;
    }
    Object.defineProperty(AgileGame.prototype, "onPause", {
        get: function () {
            return this._pause;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AgileGame.prototype, "onPlay", {
        get: function () {
            return this._play;
        },
        enumerable: true,
        configurable: true
    });
    AgileGame.prototype.start = function () {
        _super.prototype.start.call(this);
        this.changeScene(new title_scene_1.TitleScene());
    };
    Object.defineProperty(AgileGame.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (val) {
            this._score = val;
        },
        enumerable: true,
        configurable: true
    });
    AgileGame.prototype.addToScore = function (val) {
        this._score += val;
    };
    return AgileGame;
}(engine_1.Game));
exports.AgileGame = AgileGame;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var alive_db_1 = __webpack_require__(3);
var sfx_db_1 = __webpack_require__(1);
var explosion_1 = __webpack_require__(29);
var entity_1 = __webpack_require__(4);
var radiusSquared = 64 * 64;
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, 'Bomb', opts) || this;
        _this.timeUntilExplode = 2;
        if (!_this.sprite)
            _this.sprite = alive_db_1.alives['bomb'].sprite;
        return _this;
    }
    Bomb.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        this.timeUntilExplode -= delta;
        if (this.timeUntilExplode <= 0) {
            this.explode();
        }
    };
    Bomb.prototype.explode = function () {
        for (var _i = 0, _a = this.scene.findObjects(function (obj) { return obj instanceof entity_1.Entity; }); _i < _a.length; _i++) {
            var entity = _a[_i];
            var xDiff = entity.x - this.x;
            var yDiff = entity.y - this.y;
            var distSqrd = (xDiff * xDiff) + (yDiff * yDiff);
            if (distSqrd < radiusSquared) {
                entity.takeDamage(5);
            }
        }
        this.scene.addObject(new explosion_1.Explosion({ x: this.x, y: this.y }));
        this.scene.addObject(new engine_1.AudioSourceObject(this.name + "-KillSound", sfx_db_1.sfx['explode'], { x: this.x, y: this.y }));
        this.game.scene.removeObject(this);
    };
    return Bomb;
}(engine_1.GameObject));
exports.Bomb = Bomb;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var alive_db_1 = __webpack_require__(3);
var game_over_scene_1 = __webpack_require__(39);
var DeadPlayer = (function (_super) {
    __extends(DeadPlayer, _super);
    function DeadPlayer(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, 'DeadPlayer', opts) || this;
        _this.timeUntilGameOver = 2;
        if (!_this.sprite)
            _this.sprite = alive_db_1.alives['dead-player'].sprite;
        return _this;
    }
    DeadPlayer.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        this.timeUntilGameOver -= delta;
        if (this.timeUntilGameOver <= 0)
            this.game.changeScene(new game_over_scene_1.GameOverScene());
    };
    return DeadPlayer;
}(engine_1.GameObject));
exports.DeadPlayer = DeadPlayer;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var effect_db_1 = __webpack_require__(14);
var Explosion = (function (_super) {
    __extends(Explosion, _super);
    function Explosion(opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, 'Explosion', opts) || this;
        _this.effectTime = 1;
        if (!_this.sprite)
            _this.sprite = effect_db_1.effects['explosion'].sprite;
        _this.animationSpeed = 0.4;
        return _this;
    }
    Explosion.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        this.effectTime -= delta;
        if (this.effectTime <= 0) {
            this.game.scene.removeObject(this);
        }
    };
    return Explosion;
}(engine_1.GameObject));
exports.Explosion = Explosion;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Inventory = (function () {
    function Inventory() {
        this._MAX_ITEM_COUNT = 27;
        this._currentItemCount = 0;
        this._items = [];
    }
    Object.defineProperty(Inventory.prototype, "MAX_ITEM_COUNT", {
        get: function () {
            return this._MAX_ITEM_COUNT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "currentItemCount", {
        get: function () {
            return this._currentItemCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Inventory.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Inventory.prototype.containsItem = function (itemToFind) {
        return this.items.indexOf(itemToFind) >= 0;
    };
    Inventory.prototype.addItem = function (newItem, count) {
        if (count === void 0) { count = 1; }
        if (count !== 1) {
            throw new Error("Not implemented: cannot add more than one item at a time");
        }
        if (this._currentItemCount == this._MAX_ITEM_COUNT) {
            return false;
        }
        this.items.push(newItem);
        ++this._currentItemCount;
        return true;
    };
    Inventory.prototype.removeItem = function (itemToRemove) {
        if (!this.containsItem(itemToRemove)) {
            throw new Error('Attempted to remove an item that was not in the inventory from the inventory.');
        }
        this.items.splice(this.items.indexOf(itemToRemove), 1);
        --this._currentItemCount;
    };
    return Inventory;
}());
exports.Inventory = Inventory;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var agile_game_1 = __webpack_require__(26);
var game = new agile_game_1.AgileGame();
game.start();


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var alive_db_1 = __webpack_require__(3);
var AlivePreloadStrategy = (function () {
    function AlivePreloadStrategy() {
    }
    AlivePreloadStrategy.prototype.preload = function (loader) {
        for (var alive in alive_db_1.alives) {
            loader.loadImage(alive_db_1.alives[alive].sprite.src);
        }
    };
    return AlivePreloadStrategy;
}());
exports.AlivePreloadStrategy = AlivePreloadStrategy;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var effect_db_1 = __webpack_require__(14);
var EffectPreloadStrategy = (function () {
    function EffectPreloadStrategy() {
    }
    EffectPreloadStrategy.prototype.preload = function (loader) {
        for (var effect in effect_db_1.effects) {
            loader.loadImage(effect_db_1.effects[effect].sprite.src);
        }
    };
    return EffectPreloadStrategy;
}());
exports.EffectPreloadStrategy = EffectPreloadStrategy;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gui_db_1 = __webpack_require__(7);
var GuiPreloadStrategy = (function () {
    function GuiPreloadStrategy() {
    }
    GuiPreloadStrategy.prototype.preload = function (loader) {
        for (var name_1 in gui_db_1.gui) {
            loader.loadImage(gui_db_1.gui[name_1].sprite.src);
        }
    };
    return GuiPreloadStrategy;
}());
exports.GuiPreloadStrategy = GuiPreloadStrategy;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var item_db_1 = __webpack_require__(15);
var ItemPreloadStrategy = (function () {
    function ItemPreloadStrategy() {
    }
    ItemPreloadStrategy.prototype.preload = function (loader) {
        for (var item in item_db_1.items) {
            loader.loadImage(item_db_1.items[item].sprite.src);
        }
    };
    return ItemPreloadStrategy;
}());
exports.ItemPreloadStrategy = ItemPreloadStrategy;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sfx_db_1 = __webpack_require__(1);
var SfxPreloadStrategy = (function () {
    function SfxPreloadStrategy() {
    }
    SfxPreloadStrategy.prototype.preload = function (loader) {
        for (var name_1 in sfx_db_1.sfx) {
            var sound = sfx_db_1.sfx[name_1];
            loader.loadAudio(sound.src);
        }
    };
    return SfxPreloadStrategy;
}());
exports.SfxPreloadStrategy = SfxPreloadStrategy;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tile_db_1 = __webpack_require__(2);
var TilePreloadStrategy = (function () {
    function TilePreloadStrategy() {
    }
    TilePreloadStrategy.prototype.preload = function (loader) {
        for (var name_1 in tile_db_1.tiles) {
            var tile = tile_db_1.tiles[name_1];
            loader.loadImage(tile.sprite.src);
            for (var _i = 0, _a = tile.variants || []; _i < _a.length; _i++) {
                var variant = _a[_i];
                loader.loadImage(variant.src);
            }
        }
    };
    return TilePreloadStrategy;
}());
exports.TilePreloadStrategy = TilePreloadStrategy;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var world_1 = __webpack_require__(10);
var grid_renderer_1 = __webpack_require__(8);
var player_1 = __webpack_require__(18);
var in_game_gui_object_1 = __webpack_require__(16);
var lighting_object_1 = __webpack_require__(17);
var sfx_db_1 = __webpack_require__(1);
var tile_db_1 = __webpack_require__(2);
var simple_enemy_1 = __webpack_require__(20);
var DungeonScene = (function (_super) {
    __extends(DungeonScene, _super);
    function DungeonScene() {
        var _this = _super.call(this) || this;
        _this._world = new world_1.World(Math.random(), {
            grass: 'dungeonGrass',
            sand: 'dungeonSand',
            teleporter: 'dungeonTeleporter',
            water: 'lava',
            carrotCrop: 'dungeonGrass',
        });
        _this._followCamera = new engine_1.FollowCamera(_this);
        _this.player = new player_1.Player({ maxHealth: 10 });
        _this._initialized = false;
        return _this;
    }
    Object.defineProperty(DungeonScene.prototype, "world", {
        get: function () {
            return this._world;
        },
        enumerable: true,
        configurable: true
    });
    DungeonScene.prototype.enter = function (fromScene, portalx, portaly) {
        this._returnScene = fromScene;
        this._returnX = portalx;
        this._returnY = portaly + 33;
        fromScene.game.changeScene(this);
        this.game = fromScene.game;
        var otherPlayer = fromScene.findObject('Player');
        if (!otherPlayer)
            throw new Error("Could not find player object in previous scene while entering dungeon.");
        this.player.x = 0;
        this.player.y = 0;
        this.player.hspeed = 0;
        this.player.vspeed = 0;
        this.player.currentHealth = otherPlayer.currentHealth;
        this.player.inventory = otherPlayer.inventory;
        var otherWorld = fromScene.findObject('World');
        if (otherWorld)
            this.world.gameTime = otherWorld.gameTime;
        this.addObject(new engine_1.AudioSourceObject('EnterDungeonSound', sfx_db_1.sfx['teleport'], { x: this.player.x, y: this.player.y }));
        var otherCamera = fromScene.camera;
        if (otherCamera)
            this._followCamera.zoomScale = otherCamera.zoomScale;
    };
    DungeonScene.prototype.exit = function () {
        this.game.changeScene(this._returnScene);
        var otherPlayer = this._returnScene.findObject('Player');
        if (!otherPlayer)
            throw new Error("Could not find player object in previous scene to return to it.");
        otherPlayer.x = this._returnX;
        otherPlayer.y = this._returnY;
        otherPlayer.hspeed = 0;
        otherPlayer.vspeed = 0;
        otherPlayer.currentHealth = this.player.currentHealth;
        var otherWorld = this._returnScene.findObject('World');
        if (otherWorld)
            otherWorld.gameTime = this.world.gameTime;
        this._returnScene.addObject(new engine_1.AudioSourceObject('ExitDungeonSound', sfx_db_1.sfx['teleport'], { x: this.player.x, y: this.player.y }));
        var otherCamera = this._returnScene.camera;
        if (otherCamera)
            otherCamera.zoomScale = this._followCamera.zoomScale;
    };
    DungeonScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this._initialized)
            return;
        this._initialized = true;
        this.addObject(this.world);
        this.addObject(new grid_renderer_1.GridRenderer());
        this.addObject(this.player);
        for (var i = 0; i < 1000; ++i) {
            var x = Math.floor(((Math.random() - 0.5) * 10000) / tile_db_1.TILE_SIZE) * tile_db_1.TILE_SIZE;
            var y = Math.floor(((Math.random() - 0.5) * 10000) / tile_db_1.TILE_SIZE) * tile_db_1.TILE_SIZE;
            if (!this.world.getTileAt(Math.floor(x / tile_db_1.TILE_SIZE), Math.floor(y / tile_db_1.TILE_SIZE)).isSolid) {
                this.addObject(new simple_enemy_1.SimpleEnemy({ maxHealth: 5, x: x, y: y }));
            }
        }
        this.addObject(new lighting_object_1.LightingObject(.4, false));
        this.addObject(new in_game_gui_object_1.InGameGuiObject());
        this.addObject(new engine_1.AudioSourceObject('Music', sfx_db_1.sfx['dungeonMusic'], { shouldLoop: true }));
        var camera = this.camera = this._followCamera;
        camera.follow = this.player;
        camera.enableSmoothing = false;
        camera.followOffset = [16, 16];
        camera.minZoomScale = .75;
    };
    return DungeonScene;
}(engine_1.GameScene));
exports.DungeonScene = DungeonScene;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var menu_gui_object_1 = __webpack_require__(9);
var sfx_db_1 = __webpack_require__(1);
var GameOverScene = (function (_super) {
    __extends(GameOverScene, _super);
    function GameOverScene() {
        return _super.call(this) || this;
    }
    GameOverScene.prototype.start = function () {
        _super.prototype.start.call(this);
        this.addObject(new menu_gui_object_1.MenuGuiObject('game-over'));
        this.addObject(new engine_1.AudioSourceObject('Music', sfx_db_1.sfx['gameOverMusic']));
        this.camera.clearColor = 'black';
    };
    return GameOverScene;
}(engine_1.GameScene));
exports.GameOverScene = GameOverScene;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var world_1 = __webpack_require__(10);
var grid_renderer_1 = __webpack_require__(8);
var player_1 = __webpack_require__(18);
var in_game_gui_object_1 = __webpack_require__(16);
var dungeon_scene_1 = __webpack_require__(38);
var lighting_object_1 = __webpack_require__(17);
var sfx_db_1 = __webpack_require__(1);
var OverworldScene = (function (_super) {
    __extends(OverworldScene, _super);
    function OverworldScene() {
        var _this = _super.call(this) || this;
        _this._world = null;
        _this.dungeon = new dungeon_scene_1.DungeonScene();
        _this._initialized = false;
        return _this;
    }
    Object.defineProperty(OverworldScene.prototype, "world", {
        get: function () {
            return this._world;
        },
        enumerable: true,
        configurable: true
    });
    OverworldScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this._initialized)
            return;
        this._initialized = true;
        this._world = new world_1.World();
        this.addObject(this.world);
        this.addObject(new grid_renderer_1.GridRenderer());
        var player = new player_1.Player({ maxHealth: 10 });
        this.addObject(player);
        this.addObject(new lighting_object_1.LightingObject(1, true));
        this.addObject(new in_game_gui_object_1.InGameGuiObject());
        this.addObject(new engine_1.AudioSourceObject('Music', sfx_db_1.sfx['overworldMusic'], { shouldLoop: true }));
        var camera = this.camera = new engine_1.FollowCamera(this);
        camera.follow = player;
        camera.enableSmoothing = false;
        camera.followOffset = [16, 16];
        camera.minZoomScale = .75;
    };
    return OverworldScene;
}(engine_1.GameScene));
exports.OverworldScene = OverworldScene;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
function handleGUIEvent(evt, game, gui) {
    if (evt.type == 'keyPressed') {
        if (gui.navigation && gui.navigation[evt.code]) {
            game.changeScene(gui.navigation[evt.code]());
            return true;
        }
    }
    return false;
}
exports.handleGUIEvent = handleGUIEvent;
function tickGUI(delta, game, gui) {
}
exports.tickGUI = tickGUI;
function drawGUI(currentItem, inventory, context, game, gui, imageIndex, defaultFps) {
    if (imageIndex === void 0) { imageIndex = 0; }
    if (defaultFps === void 0) { defaultFps = 30; }
    var _a = game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
    context.fillStyle = 'rgba(0, 0, 0, .4)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    var resources = game.resourceLoader;
    var imgSize = engine_1.measureSprite(resources, gui.sprite);
    var offset = imgSize ? {
        x: (canvasWidth / 2) - (imgSize.width / 2),
        y: (canvasHeight / 2) - (imgSize.height / 2)
    } : { x: 0, y: 0 };
    engine_1.drawSprite(context, resources, gui.sprite, offset.x, offset.y, imageIndex, defaultFps);
    if (currentItem) {
        context.fillStyle = 'rgba(0, 0, 255, .5)';
        context.fillRect(offset.x + currentItem.x, offset.y + currentItem.y, 28, 28);
    }
    if (inventory) {
        for (var i = 0; i < inventory.items.length; ++i) {
            var slot = gui.itemSlots[i];
            var item = inventory.items[i];
            drawItemStack(context, game, item, offset.x + slot.x, offset.y + slot.y, 1, imageIndex, defaultFps);
        }
    }
}
exports.drawGUI = drawGUI;
function drawItemStack(context, game, item, x, y, count, imageIndex, defaultFps) {
    if (count === void 0) { count = 1; }
    if (imageIndex === void 0) { imageIndex = 0; }
    if (defaultFps === void 0) { defaultFps = 30; }
    var resources = game.resourceLoader;
    engine_1.drawSprite(context, resources, item.sprite, x, y, imageIndex, defaultFps);
    if (count != 1)
        throw new Error("Not implemented: trying to render an item stack with count " + count);
}
exports.drawItemStack = drawItemStack;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nnn = __webpack_require__(43);
var Noise = nnn.Noise;
var cache = new Map();
function generateNoise(seed, chunkx, chunky) {
    !cache.has(seed) && cache.set(seed, new Noise(seed));
    var noise = cache.get(seed);
    var columns = [];
    for (var q = 0; q < 64; q++) {
        var column = [];
        for (var w = 0; w < 64; w++) {
            column.push(noise.perlin2((chunkx * 64 + q) / 12, (chunky * 64 + w) / 12));
        }
        columns.push(column);
    }
    return columns;
}
exports.generateNoise = generateNoise;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */

(function(global){

  // Passing in seed will seed this Noise instance
  function Noise(seed) {
    function Grad(x, y, z) {
      this.x = x; this.y = y; this.z = z;
    }

    Grad.prototype.dot2 = function(x, y) {
      return this.x*x + this.y*y;
    };

    Grad.prototype.dot3 = function(x, y, z) {
      return this.x*x + this.y*y + this.z*z;
    };

    this.grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
                 new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
                 new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

    this.p = [151,160,137,91,90,15,
    131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
    190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
    88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
    77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
    102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
    135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
    5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
    223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
    129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
    251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
    49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
    138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
    // To remove the need for index wrapping, double the permutation table length
    this.perm = new Array(512);
    this.gradP = new Array(512);

    this.seed(seed || 0);
  }

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  Noise.prototype.seed = function(seed) {
    if(seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if(seed < 256) {
      seed |= seed << 8;
    }

    var p = this.p;
    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed>>8) & 255);
      }

      var perm = this.perm;
      var gradP = this.gradP;
      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = this.grad3[v % 12];
    }
  };

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  // 2D simplex noise
  Noise.prototype.simplex2 = function(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin)*F2; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var t = (i+j)*G2;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      i1=1; j1=0;
    } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      i1=0; j1=1;
    }
    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2;
    // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;

    var perm = this.perm;
    var gradP = this.gradP;
    var gi0 = gradP[i+perm[j]];
    var gi1 = gradP[i+i1+perm[j+j1]];
    var gi2 = gradP[i+1+perm[j+1]];
    // Calculate the contribution from the three corners
    var t0 = 0.5 - x0*x0-y0*y0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2*x2-y2*y2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot2(x2, y2);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
  };

  // 3D simplex noise
  Noise.prototype.simplex3 = function(xin, yin, zin) {
    var n0, n1, n2, n3; // Noise contributions from the four corners

    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin+zin)*F3; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var k = Math.floor(zin+s);

    var t = (i+j+k)*G3;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    var z0 = zin-k+t;

    // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if(x0 >= y0) {
      if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
      else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
      else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
    } else {
      if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
      else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
      else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
    }
    // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;

    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;

    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3;

    // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;

    var perm = this.perm;
    var gradP = this.gradP;
    var gi0 = gradP[i+   perm[j+   perm[k   ]]];
    var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
    var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
    var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

    // Calculate the contribution from the four corners
    var t0 = 0.5 - x0*x0-y0*y0-z0*z0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1-z1*z1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.5 - x2*x2-y2*y2-z2*z2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.5 - x3*x3-y3*y3-z3*z3;
    if(t3<0) {
      n3 = 0;
    } else {
      t3 *= t3;
      n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);

  };

  // ##### Perlin noise stuff

  function fade(t) {
    return t*t*t*(t*(t*6-15)+10);
  }

  function lerp(a, b, t) {
    return (1-t)*a + t*b;
  }

  // 2D Perlin Noise
  Noise.prototype.perlin2 = function(x, y) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X; y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255;

    // Calculate noise contributions from each of the four corners
    var perm = this.perm;
    var gradP = this.gradP;
    var n00 = gradP[X+perm[Y]].dot2(x, y);
    var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
    var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
    var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

    // Compute the fade curve value for x
    var u = fade(x);

    // Interpolate the four results
    return lerp(
        lerp(n00, n10, u),
        lerp(n01, n11, u),
       fade(y));
  };

  // 3D Perlin Noise
  Noise.prototype.perlin3 = function(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
    // Get relative xyz coordinates of point within that cell
    x = x - X; y = y - Y; z = z - Z;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255; Y = Y & 255; Z = Z & 255;

    // Calculate noise contributions from each of the eight corners
    var perm = this.perm;
    var gradP = this.gradP;
    var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
    var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
    var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
    var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
    var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
    var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
    var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
    var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

    // Compute the fade curve value for x, y, z
    var u = fade(x);
    var v = fade(y);
    var w = fade(z);

    // Interpolate
    return lerp(
        lerp(
          lerp(n000, n100, u),
          lerp(n001, n101, u), w),
        lerp(
          lerp(n010, n110, u),
          lerp(n011, n111, u), w),
       v);
  };

  global.Noise = Noise;

})( false ? this : module.exports);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var game_object_1 = __webpack_require__(22);
var merge = __webpack_require__(11);
var AudioSourceObject = (function (_super) {
    __extends(AudioSourceObject, _super);
    function AudioSourceObject(name, audio, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, name, merge({
            shouldRender: false
        }, opts)) || this;
        _this.audio = audio;
        _this._shouldLoop = false;
        if (typeof opts.shouldLoop !== 'undefined')
            _this._shouldLoop = opts.shouldLoop;
        return _this;
    }
    Object.defineProperty(AudioSourceObject.prototype, "shouldLoop", {
        get: function () {
            return this._shouldLoop;
        },
        enumerable: true,
        configurable: true
    });
    AudioSourceObject.prototype.addToScene = function (scene) {
        var _this = this;
        _super.prototype.addToScene.call(this, scene);
        var theirAudio = this.resources.loadAudio(this.audio.src);
        this._myAudio = document.createElement('audio');
        this._myAudio.src = theirAudio.src;
        this._myAudio.onended = function () {
            if (_this._shouldLoop)
                _this._myAudio.play();
            else
                _this.scene.removeObject(_this);
        };
        if (this.game.scene == scene)
            this._myAudio.play();
    };
    Object.defineProperty(AudioSourceObject.prototype, "myAudio", {
        get: function () {
            return this._myAudio;
        },
        enumerable: true,
        configurable: true
    });
    AudioSourceObject.prototype.onSceneEnter = function () {
        if (this.myAudio.paused)
            this._myAudio.play();
    };
    AudioSourceObject.prototype.onSceneExit = function () {
        if (!this.myAudio.paused)
            this._myAudio.pause();
    };
    return AudioSourceObject;
}(game_object_1.GameObject));
exports.AudioSourceObject = AudioSourceObject;
//# sourceMappingURL=audio-source-object.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var camera_1 = __webpack_require__(12);
var FollowCamera = (function (_super) {
    __extends(FollowCamera, _super);
    function FollowCamera(scene) {
        var _this = _super.call(this, scene) || this;
        _this._follow = null;
        _this._offset = [0, 0];
        return _this;
    }
    Object.defineProperty(FollowCamera.prototype, "follow", {
        get: function () {
            return this._follow;
        },
        set: function (val) {
            this._follow = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FollowCamera.prototype, "followOffset", {
        get: function () {
            return [this._offset[0], this._offset[1]];
        },
        set: function (_a) {
            var offsetx = _a[0], offsety = _a[1];
            this._offset = [offsetx, offsety];
        },
        enumerable: true,
        configurable: true
    });
    FollowCamera.prototype.tick = function (delta) {
        if (this.follow) {
            var target = [this._follow.x + this._offset[0], this._follow.y + this._offset[1]];
            this.center = target;
        }
        _super.prototype.tick.call(this, delta);
    };
    return FollowCamera;
}(camera_1.Camera));
exports.FollowCamera = FollowCamera;
//# sourceMappingURL=follow-camera.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var camera_1 = __webpack_require__(12);
var GameScene = (function () {
    function GameScene(_game) {
        if (_game === void 0) { _game = null; }
        this._game = _game;
        this._objects = [];
        this._camera = null;
    }
    Object.defineProperty(GameScene.prototype, "game", {
        get: function () {
            return this._game;
        },
        set: function (val) {
            this._game = val;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.onEnter = function () {
        this.start();
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.onSceneEnter();
        }
    };
    GameScene.prototype.onExit = function () {
        this.stop();
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.onSceneExit();
        }
    };
    GameScene.prototype.start = function () {
        if (!this.camera)
            this.initCamera();
    };
    GameScene.prototype.stop = function () {
    };
    GameScene.prototype.handleEvent = function (evt) {
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldTick && obj.handleEvent(evt))
                break;
        }
    };
    GameScene.prototype.tick = function (delta) {
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldTick)
                obj.tick(delta);
        }
        if (this.camera)
            this.camera.tick(delta);
    };
    GameScene.prototype.render = function (context) {
        var defaultCamera = this.camera;
        var lastRenderCamera = null;
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldRender) {
                var renderCamera = obj.renderCamera === 'default' ? defaultCamera :
                    obj.renderCamera !== 'none' ? obj.renderCamera :
                        null;
                if (lastRenderCamera != renderCamera) {
                    if (lastRenderCamera)
                        lastRenderCamera.pop(context);
                    lastRenderCamera = renderCamera;
                    if (lastRenderCamera)
                        lastRenderCamera.push(context);
                }
                obj.render(context);
            }
        }
        if (lastRenderCamera)
            lastRenderCamera.pop(context);
    };
    GameScene.prototype.addObject = function (obj) {
        this._objects.push(obj);
        obj.addToScene(this);
    };
    GameScene.prototype.removeObject = function (obj) {
        var idx = this._objects.indexOf(obj);
        if (idx == -1)
            throw new Error("Cannot remove game object '" + obj.name + "': it has not been added.");
        this._objects.splice(idx, 1);
        obj.removeFromScene();
    };
    GameScene.prototype.findObject = function (predicate) {
        if (typeof predicate == 'string') {
            var name_1 = predicate;
            predicate = function (obj) { return obj.name == name_1; };
        }
        else if (!predicate)
            throw new Error("Invalid predicate: " + predicate);
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (predicate(obj))
                return obj;
        }
        return null;
    };
    GameScene.prototype.findObjects = function (predicate) {
        if (!predicate)
            return this._objects.slice();
        if (typeof predicate !== 'function')
            throw new Error("Invalid predicate: " + predicate);
        return this._objects.filter(predicate);
    };
    GameScene.prototype.initCamera = function () {
        this.camera = new camera_1.Camera(this);
    };
    Object.defineProperty(GameScene.prototype, "camera", {
        get: function () {
            return this._camera;
        },
        set: function (val) {
            this._camera = val;
        },
        enumerable: true,
        configurable: true
    });
    return GameScene;
}());
exports.GameScene = GameScene;
;
//# sourceMappingURL=game-scene.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resource_loader_1 = __webpack_require__(23);
var event_queue_1 = __webpack_require__(21);
var Game = (function () {
    function Game(framesPerSecond) {
        if (framesPerSecond === void 0) { framesPerSecond = 30; }
        this.framesPerSecond = framesPerSecond;
        this._scene = null;
        this._nextScene = null;
        this.LOGIC_TICKS_PER_RENDER_TICK = 3;
        this.canvas = null;
        this.context = null;
        this.previousTick = null;
        this._resourceLoader = null;
        this._eventQueue = null;
        this._isRunning = false;
        this._size = [640, 480];
        this.init();
    }
    Object.defineProperty(Game.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.changeScene = function (newScene) {
        if (!newScene) {
            throw new Error("Tried to changeScene to a bad scene!");
        }
        if (this._nextScene) {
            throw new Error("Scene cannot be set more than once per tick!");
        }
        this._nextScene = newScene;
        if (!this._scene) {
            this.handleSceneChange();
        }
    };
    Game.prototype.handleSceneChange = function () {
        if (this._nextScene) {
            if (this._scene)
                this._scene.onExit();
            this._scene = this._nextScene;
            this._scene.game = this;
            this._scene.onEnter();
            this._nextScene = null;
        }
    };
    Game.prototype.init = function () {
        this._resourceLoader = new resource_loader_1.ResourceLoader();
        this._eventQueue = new event_queue_1.EventQueue();
        var body = document.getElementsByTagName('body')[0];
        this.initResize(body);
    };
    Game.prototype.initResize = function (body) {
        var _this = this;
        body.onresize = function (e) { return _this.refreshCanvasSize(); };
    };
    Game.prototype.refreshCanvasSize = function () {
        if (this.canvas) {
            _a = this.canvasSize = [this.canvas.scrollWidth, this.canvas.scrollHeight], this.canvas.width = _a[0], this.canvas.height = _a[1];
        }
        var _a;
    };
    Object.defineProperty(Game.prototype, "resourceLoader", {
        get: function () {
            return this._resourceLoader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "eventQueue", {
        get: function () {
            return this._eventQueue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "isRunning", {
        get: function () {
            return this._isRunning;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.start = function () {
        var _this = this;
        if (this.isRunning)
            throw new Error("This game is already running. You can't run it again.");
        this._isRunning = true;
        if (!this.canvas)
            this.canvas = document.getElementById('gameCanvas');
        this.refreshCanvasSize();
        this.context = this.canvas.getContext("2d");
        this._intervalHandle = setInterval(function () { return _this.onTick(); }, 1000 / this.framesPerSecond);
    };
    Game.prototype.stop = function () {
        if (this.isRunning)
            clearInterval(this._intervalHandle);
        this._isRunning = false;
    };
    Object.defineProperty(Game.prototype, "canvasSize", {
        get: function () {
            return [this._size[0], this._size[1]];
        },
        set: function (_a) {
            var newWidth = _a[0], newHeight = _a[1];
            if (newWidth == this._size[0] && newHeight == this._size[1])
                return;
            var prevSize = this._size;
            this._size = [newWidth, newHeight];
            this.eventQueue.enqueue({
                type: 'canvasResize',
                previousSize: prevSize,
                size: [newWidth, newHeight]
            });
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.onTick = function () {
        if (!this.isRunning)
            throw new Error("An error occurred. Game.onTick was invoked although the game is not running.");
        if (this.resourceLoader.isDone) {
            var currentTime = new Date();
            var delta = (this.previousTick == null) ? 0 : (currentTime.valueOf() - this.previousTick.valueOf()) / 1000;
            this.previousTick = currentTime;
            this.sendEvents();
            for (var q = 0; q < this.LOGIC_TICKS_PER_RENDER_TICK; q++) {
                this.tick(delta / this.LOGIC_TICKS_PER_RENDER_TICK);
            }
            this.render(this.context);
        }
        else {
            this.resourceLoader.render(this.context);
        }
    };
    Game.prototype.sendEvents = function () {
        var events = this._eventQueue.clearQueue();
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var evt = events_1[_i];
            if (this._scene) {
                this._scene.handleEvent(evt);
            }
        }
    };
    Game.prototype.tick = function (delta) {
        if (this._scene) {
            this._scene.tick(delta);
            this.handleSceneChange();
        }
    };
    Game.prototype.render = function (context) {
        if (!context)
            throw new Error("What the heck just happened? There is no rendering context!");
        if (this._scene) {
            this._scene.render(context);
        }
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(21));
__export(__webpack_require__(23));
__export(__webpack_require__(12));
__export(__webpack_require__(47));
__export(__webpack_require__(49));
__export(__webpack_require__(22));
__export(__webpack_require__(46));
__export(__webpack_require__(48));
__export(__webpack_require__(54));
//# sourceMappingURL=index.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function delay(millis) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(); }, millis);
    });
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = (function () {
    function EventEmitter() {
        this._listeners = [];
        this._isEmitting = false;
    }
    EventEmitter.prototype.addListener = function (listener) {
        if (!listener || typeof listener !== 'function')
            throw new Error("Listener is not a function: " + listener);
        this._listeners.push(listener);
    };
    EventEmitter.prototype.emit = function (val) {
        if (this._isEmitting)
            throw new Error("EventEmitter.emit was recursively invoked. New value: " + val);
        this._isEmitting = true;
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(val);
        }
        this._isEmitting = false;
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=event-emitter.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
    MouseButton[MouseButton["BrowserBack"] = 3] = "BrowserBack";
    MouseButton[MouseButton["BrowserForward"] = 5] = "BrowserForward";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
//# sourceMappingURL=events.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(51));
__export(__webpack_require__(52));
__export(__webpack_require__(53));
__export(__webpack_require__(6));
__export(__webpack_require__(24));
__export(__webpack_require__(13));
__export(__webpack_require__(25));
//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=main.map