webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<div style=\"text-align:center\">\n\n  <app-heroes-list></app-heroes-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_list_heroes_list_component__ = __webpack_require__("../../../../../src/app/heroes-list/heroes-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__heroes_list_heroes_list_component__["a" /* HeroesListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-hero {\r\n  width: 80px;\r\n  position: relative;\r\n  opacity: 0.7;\r\n  transition: 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.img-hero-selected {\r\n  width: 80px;\r\n  position: relative;\r\n  opacity: 0.2;\r\n  transition: 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.img-hero:hover {\r\n  z-index: 100;\r\n  -webkit-transform: scale(1.3, 1.3);\r\n          transform: scale(1.3, 1.3);\r\n  /** default is 1, scale it to 1.5 */\r\n  opacity: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\n  <h2 class=\"col-md-10\">Captain Mode</h2>\n  <div class=\"col-md-6 img-thumbnail\">\n    <div>\n      <div>\n        <img src=\"assets/img/str.png \"> Strength\n      </div>\n      <img *ngFor=\"let hero of getStrHeroes()\" src=\"assets/img/{{hero.name}}_sb.png \" title=\"{{hero.localized_name}} \" class=\"img-thumbnail {{hero.banned?'img-hero-selected':'img-hero'}}\"\n        (click)=\"heroClick(hero.id)\">\n    </div>\n    <div>\n      <div>\n        <img src=\"assets/img/agi.png \"> Agility\n      </div>\n      <img *ngFor=\"let hero of getAgiHeroes()\" src=\"assets/img/{{hero.name}}_sb.png \" title=\"{{hero.localized_name}} \" class=\"img-thumbnail {{hero.banned?'img-hero-selected':'img-hero'}}\"\n        (click)=\"heroClick(hero.id)\">\n    </div>\n    <div>\n      <div>\n        <img src=\"assets/img/int.png \"> Intelligence\n      </div>\n      <img *ngFor=\"let hero of getIntHeroes()\" src=\"assets/img/{{hero.name}}_sb.png \" title=\"{{hero.localized_name}} \" class=\"img-thumbnail {{hero.banned?'img-hero-selected':'img-hero'}}\"\n        (click)=\"heroClick(hero.id)\">\n    </div>\n  </div>\n  <div class=\"col-md-4 img-thumbnail\">\n    <div class=\"row\">\n      <h3 class=\"col-md-10\">Player {{curPlayer==1?'1':'2'}} choose:</h3>\n      <h3 class=\"col-md-10\">Time {{time}}</h3>\n      <h3 class=\"col-md-5\">Bonus time {{bonusTimeP1}}</h3>\n      <h3 class=\"col-md-5\">Bonus time {{bonusTimeP2}}</h3>\n\n      <h2 class=\"col-md-10\">Bans</h2>\n      <div class=\"col-md-5\">\n        <img *ngFor=\"let ban of bansP1\" src=\"assets/img/{{ban.name}}_sb.png \" title=\"{{ban.localized_name}} \" class=\"img-thumbnail img-hero\">\n      </div>\n      <div class=\"col-md-5\">\n        <img *ngFor=\"let ban of bansP2\" src=\"assets/img/{{ban.name}}_sb.png \" title=\"{{ban.localized_name}} \" class=\"img-thumbnail img-hero\">\n      </div>\n      <h2 class=\"col-md-10\">Picks</h2>\n      <div class=\"col-md-5\">\n        <img *ngFor=\"let pick of picksP1\" src=\"assets/img/{{pick.name}}_sb.png \" title=\"{{pick.localized_name}} \" class=\"img-thumbnail img-hero\">\n      </div>\n      <div class=\"col-md-5\">\n        <img *ngFor=\"let pick of picksP2\" src=\"assets/img/{{pick.name}}_sb.png \" title=\"{{pick.localized_name}} \" class=\"img-thumbnail img-hero\">\n      </div>\n      <div class=\"col-md-10\" *ngIf=\"isComplete\">\n        <button class=\"btn btn-primary btn-lg\" (click)=\"getResult()\">Get Result</button>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heroes__ = __webpack_require__("../../../../../src/app/heroes-list/heroes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesListComponent = (function () {
    function HeroesListComponent() {
        var _this = this;
        this.heroes = [];
        this.bansP1 = [];
        this.bansP2 = [];
        this.picksP1 = [];
        this.picksP2 = [];
        this.time = 30;
        this.bonusTimeP1 = 130;
        this.bonusTimeP2 = 130;
        this.curPlayer = 1;
        //�-�-�-�-�-��-�-�-�-�-�-�-�-�-�-�-�-�-�
        this.order = ["b1", "b2", "b1", "b2", "p1", "p2", "p2", "p1", "b1", "b2", "b1", "b2", "p2", "p1", "p2", "p1", "b2", "b1", "p2", "p1"];
        this.currOrder = 0;
        this.isComplete = false;
        this.heroes = __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */];
        this.currOrder = 0;
        this.turnTime = setInterval(function () { return _this.tick(); }, 1000);
    }
    HeroesListComponent.prototype.ngOnInit = function () {
    };
    ;
    HeroesListComponent.prototype.getStrHeroes = function () {
        return this.heroes.filter(function (hero) { return hero.group == 0; });
    };
    HeroesListComponent.prototype.getAgiHeroes = function () {
        return this.heroes.filter(function (hero) { return hero.group == 1; });
    };
    HeroesListComponent.prototype.getIntHeroes = function () {
        return this.heroes.filter(function (hero) { return hero.group == 2; });
    };
    HeroesListComponent.prototype.heroClick = function (id) {
        var _this = this;
        if (this.currOrder >= this.order.length) {
            this.finish();
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; }).banned == true)
            return;
        __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; }).banned = true;
        if (this.order[this.currOrder] == "b1")
            this.bansP1.push(__WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; }));
        if (this.order[this.currOrder] == "b2")
            this.bansP2.push(__WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; }));
        if (this.order[this.currOrder] == "p1")
            this.picksP1.push(__WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; }));
        if (this.order[this.currOrder] == "p2")
            this.picksP2.push(__WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; }));
        this.currOrder++;
        if (this.curPlayer == 1)
            this.curPlayer = 2;
        else
            this.curPlayer = 1;
        this.time = 30;
        clearInterval(this.turnTime);
        this.turnTime = setInterval(function () { return _this.tick(); }, 1000);
    };
    HeroesListComponent.prototype.tick = function () {
        if (this.time > 0)
            this.time -= 1;
        else if (this.curPlayer == 1)
            this.bonusTimeP1 -= 1;
        else
            this.bonusTimeP2 -= 1;
    };
    HeroesListComponent.prototype.finish = function () {
        this.isComplete = true;
        clearInterval(this.turnTime);
    };
    HeroesListComponent.prototype.getResult = function () {
        alert('Work in progress');
    };
    return HeroesListComponent;
}());
HeroesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-heroes-list',
        template: __webpack_require__("../../../../../src/app/heroes-list/heroes-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/heroes-list/heroes-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeroesListComponent);

//# sourceMappingURL=heroes-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return heroes; });
var heroes = [{
        "name": "antimage",
        "id": 1,
        "localized_name": "Anti-Mage",
        "group": 1,
        "banned": false
    },
    {
        "name": "axe",
        "id": 2,
        "localized_name": "Axe",
        "group": 0,
        "banned": false
    },
    {
        "name": "bane",
        "id": 3,
        "localized_name": "Bane",
        "group": 2,
        "banned": false
    },
    {
        "name": "bloodseeker",
        "id": 4,
        "localized_name": "Bloodseeker",
        "group": 1,
        "banned": false
    },
    {
        "name": "crystal_maiden",
        "id": 5,
        "localized_name": "Crystal Maiden",
        "group": 2,
        "banned": false
    },
    {
        "name": "drow_ranger",
        "id": 6,
        "localized_name": "Drow Ranger",
        "group": 1,
        "banned": false
    },
    {
        "name": "earthshaker",
        "id": 7,
        "localized_name": "Earthshaker",
        "group": 0,
        "banned": false
    },
    {
        "name": "juggernaut",
        "id": 8,
        "localized_name": "Juggernaut",
        "group": 1,
        "banned": false
    },
    {
        "name": "mirana",
        "id": 9,
        "localized_name": "Mirana",
        "group": 1,
        "banned": false
    },
    {
        "name": "nevermore",
        "id": 11,
        "localized_name": "Shadow Fiend",
        "group": 1,
        "banned": false
    },
    {
        "name": "morphling",
        "id": 10,
        "localized_name": "Morphling",
        "group": 1,
        "banned": false
    },
    {
        "name": "phantom_lancer",
        "id": 12,
        "localized_name": "Phantom Lancer",
        "group": 1,
        "banned": false
    },
    {
        "name": "puck",
        "id": 13,
        "localized_name": "Puck",
        "group": 2,
        "banned": false
    },
    {
        "name": "pudge",
        "id": 14,
        "localized_name": "Pudge",
        "group": 0,
        "banned": false
    },
    {
        "name": "razor",
        "id": 15,
        "localized_name": "Razor",
        "group": 1,
        "banned": false
    },
    {
        "name": "sand_king",
        "id": 16,
        "localized_name": "Sand King",
        "group": 0,
        "banned": false
    },
    {
        "name": "storm_spirit",
        "id": 17,
        "localized_name": "Storm Spirit",
        "group": 2,
        "banned": false
    },
    {
        "name": "sven",
        "id": 18,
        "localized_name": "Sven",
        "group": 0,
        "banned": false
    },
    {
        "name": "tiny",
        "id": 19,
        "localized_name": "Tiny",
        "group": 0,
        "banned": false
    },
    {
        "name": "vengefulspirit",
        "id": 20,
        "localized_name": "Vengeful Spirit",
        "group": 1,
        "banned": false
    },
    {
        "name": "windrunner",
        "id": 21,
        "localized_name": "Windranger",
        "group": 2,
        "banned": false
    },
    {
        "name": "zuus",
        "id": 22,
        "localized_name": "Zeus",
        "group": 2,
        "banned": false
    },
    {
        "name": "kunkka",
        "id": 23,
        "localized_name": "Kunkka",
        "group": 0,
        "banned": false
    },
    {
        "name": "lina",
        "id": 25,
        "localized_name": "Lina",
        "group": 2,
        "banned": false
    },
    {
        "name": "lich",
        "id": 31,
        "localized_name": "Lich",
        "group": 2,
        "banned": false
    },
    {
        "name": "lion",
        "id": 26,
        "localized_name": "Lion",
        "group": 2,
        "banned": false
    },
    {
        "name": "shadow_shaman",
        "id": 27,
        "localized_name": "Shadow Shaman",
        "group": 2,
        "banned": false
    },
    {
        "name": "slardar",
        "id": 28,
        "localized_name": "Slardar",
        "group": 0,
        "banned": false
    },
    {
        "name": "tidehunter",
        "id": 29,
        "localized_name": "Tidehunter",
        "group": 0,
        "banned": false
    },
    {
        "name": "witch_doctor",
        "id": 30,
        "localized_name": "Witch Doctor",
        "group": 2,
        "banned": false
    },
    {
        "name": "riki",
        "id": 32,
        "localized_name": "Riki",
        "group": 1,
        "banned": false
    },
    {
        "name": "enigma",
        "id": 33,
        "localized_name": "Enigma",
        "group": 2,
        "banned": false
    },
    {
        "name": "tinker",
        "id": 34,
        "localized_name": "Tinker",
        "group": 2,
        "banned": false
    },
    {
        "name": "sniper",
        "id": 35,
        "localized_name": "Sniper",
        "group": 1,
        "banned": false
    },
    {
        "name": "necrolyte",
        "id": 36,
        "localized_name": "Necrophos",
        "group": 2,
        "banned": false
    },
    {
        "name": "warlock",
        "id": 37,
        "localized_name": "Warlock",
        "group": 2,
        "banned": false
    },
    {
        "name": "beastmaster",
        "id": 38,
        "localized_name": "Beastmaster",
        "group": 0,
        "banned": false
    },
    {
        "name": "queenofpain",
        "id": 39,
        "localized_name": "Queen of Pain",
        "group": 2,
        "banned": false
    },
    {
        "name": "venomancer",
        "id": 40,
        "localized_name": "Venomancer",
        "group": 1,
        "banned": false
    },
    {
        "name": "faceless_void",
        "id": 41,
        "localized_name": "Faceless Void",
        "group": 1,
        "banned": false
    },
    {
        "name": "skeleton_king",
        "id": 42,
        "localized_name": "Skeleton King",
        "group": 0,
        "banned": false
    },
    {
        "name": "death_prophet",
        "id": 43,
        "localized_name": "Death Prophet",
        "group": 2,
        "banned": false
    },
    {
        "name": "phantom_assassin",
        "id": 44,
        "localized_name": "Phantom Assassin",
        "group": 1,
        "banned": false
    },
    {
        "name": "pugna",
        "id": 45,
        "localized_name": "Pugna",
        "group": 2,
        "banned": false
    },
    {
        "name": "templar_assassin",
        "id": 46,
        "localized_name": "Templar Assassin",
        "group": 1,
        "banned": false
    },
    {
        "name": "viper",
        "id": 47,
        "localized_name": "Viper",
        "group": 10,
        "banned": false
    },
    {
        "name": "luna",
        "id": 48,
        "localized_name": "Luna",
        "group": 1,
        "banned": false
    },
    {
        "name": "dragon_knight",
        "id": 49,
        "localized_name": "Dragon Knight",
        "group": 0,
        "banned": false
    },
    {
        "name": "dazzle",
        "id": 50,
        "localized_name": "Dazzle",
        "group": 2,
        "banned": false
    },
    {
        "name": "rattletrap",
        "id": 51,
        "localized_name": "Clockwerk",
        "group": 0,
        "banned": false
    },
    {
        "name": "leshrac",
        "id": 52,
        "localized_name": "Leshrac",
        "group": 2,
        "banned": false
    },
    {
        "name": "furion",
        "id": 53,
        "localized_name": "Nature's Prophet",
        "group": 2,
        "banned": false
    },
    {
        "name": "life_stealer",
        "id": 54,
        "localized_name": "Lifestealer",
        "group": 0,
        "banned": false
    },
    {
        "name": "dark_seer",
        "id": 55,
        "localized_name": "Dark Seer",
        "group": 2,
        "banned": false
    },
    {
        "name": "clinkz",
        "id": 56,
        "localized_name": "Clinkz",
        "group": 1,
        "banned": false
    },
    {
        "name": "omniknight",
        "id": 57,
        "localized_name": "Omniknight",
        "group": 0,
        "banned": false
    },
    {
        "name": "enchantress",
        "id": 58,
        "localized_name": "Enchantress",
        "group": 2,
        "banned": false
    },
    {
        "name": "huskar",
        "id": 59,
        "localized_name": "Huskar",
        "group": 0,
        "banned": false
    },
    {
        "name": "night_stalker",
        "id": 60,
        "localized_name": "Night Stalker",
        "group": 0,
        "banned": false
    },
    {
        "name": "broodmother",
        "id": 61,
        "localized_name": "Broodmother",
        "group": 1,
        "banned": false
    },
    {
        "name": "bounty_hunter",
        "id": 62,
        "localized_name": "Bounty Hunter",
        "group": 1,
        "banned": false
    },
    {
        "name": "weaver",
        "id": 63,
        "localized_name": "Weaver",
        "group": 1,
        "banned": false
    },
    {
        "name": "jakiro",
        "id": 64,
        "localized_name": "Jakiro",
        "group": 2,
        "banned": false
    },
    {
        "name": "batrider",
        "id": 65,
        "localized_name": "Batrider",
        "group": 2,
        "banned": false
    },
    {
        "name": "chen",
        "id": 66,
        "localized_name": "Chen",
        "group": 2,
        "banned": false
    },
    {
        "name": "spectre",
        "id": 67,
        "localized_name": "Spectre",
        "group": 1,
        "banned": false
    },
    {
        "name": "doom_bringer",
        "id": 69,
        "localized_name": "Doom",
        "group": 0,
        "banned": false
    },
    {
        "name": "ancient_apparition",
        "id": 68,
        "localized_name": "Ancient Apparition",
        "group": 2,
        "banned": false
    },
    {
        "name": "ursa",
        "id": 70,
        "localized_name": "Ursa",
        "group": 1,
        "banned": false
    },
    {
        "name": "spirit_breaker",
        "id": 71,
        "localized_name": "Spirit Breaker",
        "group": 0,
        "banned": false
    },
    {
        "name": "gyrocopter",
        "id": 72,
        "localized_name": "Gyrocopter",
        "group": 1,
        "banned": false
    },
    {
        "name": "alchemist",
        "id": 73,
        "localized_name": "Alchemist",
        "group": 0,
        "banned": false
    },
    {
        "name": "invoker",
        "id": 74,
        "localized_name": "Invoker",
        "group": 2,
        "banned": false
    },
    {
        "name": "silencer",
        "id": 75,
        "localized_name": "Silencer",
        "group": 2,
        "banned": false
    },
    {
        "name": "obsidian_destroyer",
        "id": 76,
        "localized_name": "Outworld Devourer",
        "group": 2,
        "banned": false
    },
    {
        "name": "lycan",
        "id": 77,
        "localized_name": "Lycanthrope",
        "group": 0,
        "banned": false
    },
    {
        "name": "brewmaster",
        "id": 78,
        "localized_name": "Brewmaster",
        "group": 0,
        "banned": false
    },
    {
        "name": "shadow_demon",
        "id": 79,
        "localized_name": "Shadow Demon",
        "group": 2,
        "banned": false
    },
    {
        "name": "lone_druid",
        "id": 80,
        "localized_name": "Lone Druid",
        "group": 1,
        "banned": false
    },
    {
        "name": "chaos_knight",
        "id": 81,
        "localized_name": "Chaos Knight",
        "group": 0,
        "banned": false
    },
    {
        "name": "meepo",
        "id": 82,
        "localized_name": "Meepo",
        "group": 0,
        "banned": false
    },
    {
        "name": "treant",
        "id": 83,
        "localized_name": "Treant Protector",
        "group": 0,
        "banned": false
    },
    {
        "name": "ogre_magi",
        "id": 84,
        "localized_name": "Ogre Magi",
        "group": 2,
        "banned": false
    },
    {
        "name": "undying",
        "id": 85,
        "localized_name": "Undying",
        "group": 0,
        "banned": false
    },
    {
        "name": "rubick",
        "id": 86,
        "localized_name": "Rubick",
        "group": 2,
        "banned": false
    },
    {
        "name": "disruptor",
        "id": 87,
        "localized_name": "Disruptor",
        "group": 2,
        "banned": false
    },
    {
        "name": "nyx_assassin",
        "id": 88,
        "localized_name": "Nyx Assassin",
        "group": 1,
        "banned": false
    },
    {
        "name": "naga_siren",
        "id": 89,
        "localized_name": "Naga Siren",
        "group": 1,
        "banned": false
    },
    {
        "name": "keeper_of_the_light",
        "id": 90,
        "localized_name": "Keeper of the Light",
        "group": 2,
        "banned": false
    },
    {
        "name": "wisp",
        "id": 91,
        "localized_name": "Wisp",
        "group": 2,
        "banned": false
    },
    {
        "name": "visage",
        "id": 92,
        "localized_name": "Visage",
        "group": 2,
        "banned": false
    },
    {
        "name": "slark",
        "id": 93,
        "localized_name": "Slark",
        "group": 1,
        "banned": false
    },
    {
        "name": "medusa",
        "id": 94,
        "localized_name": "Medusa",
        "group": 1,
        "banned": false
    },
    {
        "name": "troll_warlord",
        "id": 95,
        "localized_name": "Troll Warlord",
        "group": 1,
        "banned": false
    },
    {
        "name": "centaur",
        "id": 96,
        "localized_name": "Centaur Warrunner",
        "group": 0,
        "banned": false
    },
    {
        "name": "magnataur",
        "id": 97,
        "localized_name": "Magnus",
        "group": 0,
        "banned": false
    },
    {
        "name": "shredder",
        "id": 98,
        "localized_name": "Timbersaw",
        "group": 0,
        "banned": false
    },
    {
        "name": "bristleback",
        "id": 99,
        "localized_name": "Bristleback",
        "group": 0,
        "banned": false
    },
    {
        "name": "tusk",
        "id": 100,
        "localized_name": "Tusk",
        "group": 0,
        "banned": false
    },
    {
        "name": "skywrath_mage",
        "id": 101,
        "localized_name": "Skywrath Mage",
        "group": 2,
        "banned": false
    },
    {
        "name": "abaddon",
        "id": 102,
        "localized_name": "Abaddon",
        "group": 0,
        "banned": false
    },
    {
        "name": "elder_titan",
        "id": 103,
        "localized_name": "Elder Titan",
        "group": 0,
        "banned": false
    },
    {
        "name": "legion_commander",
        "id": 104,
        "localized_name": "Legion Commander",
        "group": 0,
        "banned": false
    },
    {
        "name": "ember_spirit",
        "id": 106,
        "localized_name": "Ember Spirit",
        "group": 0,
        "banned": false
    },
    {
        "name": "earth_spirit",
        "id": 107,
        "localized_name": "Earth Spirit",
        "group": 0,
        "banned": false
    },
    {
        "name": "abyssal_underlord",
        "id": 108,
        "localized_name": "Abyssal Underlord",
        "group": 0,
        "banned": false
    },
    {
        "name": "terrorblade",
        "id": 109,
        "localized_name": "Terrorblade",
        "group": 1,
        "banned": false
    },
    {
        "name": "phoenix",
        "id": 110,
        "localized_name": "Phoenix",
        "group": 2,
        "banned": false
    },
    {
        "name": "techies",
        "id": 105,
        "localized_name": "Techies",
        "group": 2,
        "banned": false
    },
    {
        "name": "oracle",
        "id": 111,
        "localized_name": "Oracle",
        "group": 2,
        "banned": false
    },
    {
        "name": "winter_wyvern",
        "id": 112,
        "localized_name": "Winter Wyvern",
        "group": 2,
        "banned": false
    },
    {
        "name": "arc_warden",
        "id": 113,
        "localized_name": "Arc Warden",
        "group": 2,
        "banned": false
    }
];
//# sourceMappingURL=heroes.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map