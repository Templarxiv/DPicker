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
exports.push([module.i, "body {\r\n  background: #171c22;\r\n  font-family: Arial;\r\n  color: #ccc;\r\n}\r\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_server__ = __webpack_require__("../../../../../src/app/server/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__draft_result_draft_result_component__ = __webpack_require__("../../../../../src/app/draft-result/draft-result.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { HttpModule } from '@angular/http';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__heroes_list_heroes_list_component__["a" /* HeroesListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__draft_result_draft_result_component__["a" /* DraftResultComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            // HttpModule
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__server_server__["a" /* Server */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/draft-result/draft-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .img-hero {\r\n   width: 80px;\r\n   position: relative;\r\n   opacity: 0.7;\r\n   transition: 0.3s ease;\r\n   cursor: pointer;\r\n }\r\n \r\n .img-hero-selected {\r\n   width: 80px;\r\n   position: relative;\r\n   opacity: 0.2;\r\n   transition: 0.3s ease;\r\n   cursor: pointer;\r\n }\r\n \r\n .img-hero:hover {\r\n   z-index: 100;\r\n   -webkit-transform: scale(1.3, 1.3);\r\n           transform: scale(1.3, 1.3);\r\n   /** default is 1, scale it to 1.5 */\r\n   opacity: 1;\r\n }\r\n \r\n .active-player {\r\n   border: 2px solid green;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/draft-result/draft-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding: 100px;\">\n  <h2 class=\"col-md-10\">Picks</h2>\n  <div class=\"col-md-5\">\n    <div>\n      <h2>Team 1</h2>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"let hero of picksP1\" class=\"col-md-2 {{hero.isPickTime?'active-player':''}}\">\n        <img title=\"{{hero.localized_name}}\" src=\"assets/img/portraits/{{hero.id}}.jpg\">\n      </div>\n    </div>\n    <div>\n      <h2>Win Percent: {{p1WP}}%</h2>\n    </div>\n    <!--<img *ngFor=\"let pick of picksP1\" src=\"assets/img/{{pick.name}}_sb.png\" title=\"{{pick.localized_name}}\" class=\"img-thumbnail img-hero\">-->\n  </div>\n  <div class=\"col-md-5\">\n    <div>\n      <h2>Team 2</h2>\n    </div>\n    <div class=\"row\">\n      <div *ngFor=\"let hero of picksP2\" class=\"col-md-2 {{hero.isPickTime?'active-player':''}}\">\n        <img title=\"{{hero.localized_name}}\" src=\"assets/img/portraits/{{hero.id}}.jpg\">\n      </div>\n    </div>\n    <!--<img *ngFor=\"let pick of picksP2\" src=\"assets/img/{{pick.name}}_sb.png\" title=\"{{pick.localized_name}}\" class=\"img-thumbnail img-hero\">-->\n    <div>\n      <h2>Win Percent: {{p2WP}}%</h2>\n    </div>\n  </div>\n  <h2 class=\"col-md-10\">{{winText}}</h2>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/draft-result/draft-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraftResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DraftResultComponent = (function () {
    function DraftResultComponent() {
        this.p1WP = 53;
        this.p2WP = 47;
        this.winText = "Team 1 Win";
    }
    DraftResultComponent.prototype.ngOnInit = function () {
    };
    ;
    return DraftResultComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], DraftResultComponent.prototype, "picksP1", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], DraftResultComponent.prototype, "picksP2", void 0);
DraftResultComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-draft-result',
        template: __webpack_require__("../../../../../src/app/draft-result/draft-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/draft-result/draft-result.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DraftResultComponent);

//# sourceMappingURL=draft-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-hero {\r\n  width: 80px;\r\n  position: relative;\r\n  opacity: 0.7;\r\n  transition: 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-d2 {\r\n  background: #466958;\r\n  background-image: linear-gradient(to bottom, #466958, #599477);\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 5px #294d39;\r\n  color: #ffffff;\r\n  font-size: 25px;\r\n  padding: 10px 20px 10px 20px;\r\n  border: solid #294d39 1px;\r\n  text-decoration: none;\r\n}\r\n\r\n.btn-d2:hover {\r\n  background: #6b9e83;\r\n  background-image: linear-gradient(to bottom, #6b9e83, #5c8770);\r\n  text-decoration: none;\r\n}\r\n\r\n.img-hero-selected {\r\n  width: 80px;\r\n  position: relative;\r\n  opacity: 0.2;\r\n  transition: 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.img-hero:hover {\r\n  z-index: 100;\r\n  /** default is 1, scale it to 1.5 */\r\n  opacity: 1;\r\n  box-shadow: rgb(51, 204, 51) 0px 0px 0.2vw 0.2vw;\r\n  -webkit-transform: scale(1.3);\r\n          transform: scale(1.3);\r\n  z-index: 900;\r\n}\r\n\r\n.active-player {\r\n  border: 2px solid rgb(51, 204, 51);\r\n}\r\n\r\n.img-pick {\r\n  width: 120px;\r\n  height: 80px;\r\n  overflow: hidden;\r\n  background: radial-gradient(farthest-corner at 50% 75%, hsla(0, 0%, 39%, .1), hsla(0, 0%, 39%, .1), hsla(0, 0%, 39%, .1), rgba(0, 0, 0, .25));\r\n  outline: 2px solid rgba(0, 0, 0, .15);\r\n  position: relative;\r\n}\r\n\r\n.img-ban {\r\n  width: 80px;\r\n  height: 60px;\r\n}\r\n\r\n.pick-slots {\r\n  position: relative;\r\n  margin-left: 50px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.vertical-text {\r\n  -webkit-transform: rotate(-90deg);\r\n          transform: rotate(-90deg);\r\n  color: #4c535d;\r\n  font-size: .9vw;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.pick-slot-container {\r\n  float: left;\r\n  margin: 0 .75%;\r\n  overflow: hidden;\r\n  background: radial-gradient(farthest-corner at 50% 75%, hsla(0, 0%, 39%, .1), hsla(0, 0%, 39%, .1), hsla(0, 0%, 39%, .1), rgba(0, 0, 0, .25));\r\n  outline: 2px solid rgba(0, 0, 0, .15)\r\n}\r\n\r\n.pick-team-one {\r\n  -webkit-transform: skew(10deg);\r\n  transform: skew(10deg);\r\n}\r\n\r\n.pick-team-two {\r\n  -webkit-transform: skew(-10deg);\r\n  transform: skew(-10deg);\r\n}\r\n\r\n.heroes-grid {\r\n  position: relative\r\n}\r\n\r\n.heroes-grid .hero-search-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  word-wrap: break-word;\r\n  text-align: center;\r\n  font-size: 4vw;\r\n  color: #fff;\r\n  pointer-events: none;\r\n  opacity: 1;\r\n  z-index: 1001\r\n}\r\n\r\n.heroes-grid .hero-search-text.visible {\r\n  -webkit-animation: searchTextFade .5s linear 0s 1 normal;\r\n  animation: searchTextFade .5s linear 0s 1 normal;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards\r\n}\r\n\r\n.heroes-grid .attribute-group {\r\n  margin-top: 20px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  clear: both;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex\r\n}\r\n\r\n.heroes-grid .attribute-group:first-child {\r\n  margin-top: 0\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-label-prepend {\r\n  position: relative;\r\n  width: 2%;\r\n  margin: .375%;\r\n  border-right: 2px solid #4c535d\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-label-prepend span {\r\n  -webkit-transform: translate(-50%, -50%) rotate(-90deg);\r\n  transform: translate(-50%, -50%) rotate(-90deg);\r\n  position: absolute;\r\n  color: #4c535d;\r\n  font-size: .75vw;\r\n  text-transform: uppercase;\r\n  top: 50%;\r\n  left: 0\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix {\r\n  width: 98%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container {\r\n  -ms-flex-preferred-size: 4.011%;\r\n  flex-basis: 4.011%;\r\n  margin: .375%;\r\n  position: relative;\r\n  cursor: pointer\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container .zoom {\r\n  display: none;\r\n  position: absolute;\r\n  width: 200%;\r\n  height: 200%;\r\n  bottom: -50%;\r\n  left: -50%;\r\n  z-index: 1000;\r\n  opacity: 1;\r\n  border: 1px solid #000;\r\n  pointer-events: none;\r\n  -webkit-filter: none;\r\n  filter: none;\r\n  background-size: cover;\r\n  box-shadow: rgb(51, 204, 51) 0px 0px 0.2vw 0.2vw;\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container .zoom img {\r\n  width: \"100%\"\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container img {\r\n  width: 100%;\r\n  height: auto;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: box-shadow 1s, z-index 1s, -webkit-transform 1s;\r\n  transition: transform 1s, box-shadow 1s, z-index 1s;\r\n  transition: transform 1s, box-shadow 1s, z-index 1s, -webkit-transform 1s\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container.best-counter img {\r\n  -webkit-animation: bestCounter .5s ease 1s infinite alternate;\r\n  animation: bestCounter .5s ease 1s infinite alternate\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container.not-searched img,\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container span {\r\n  -webkit-filter: brightness(80%) grayscale(100%);\r\n  filter: brightness(80%) grayscale(100%)\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container.selected img {\r\n  -webkit-filter: grayscale(100%);\r\n  filter: grayscale(100%);\r\n  opacity: .25\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container.searched img {\r\n  box-shadow: 0 0 .2vw .1vw #40a8ab;\r\n  -webkit-animation: selectedHeroPop .08s linear 0s 2 alternate, selectedHeroesPulse .5s linear .5s infinite alternate;\r\n  animation: selectedHeroPop .08s linear 0s 2 alternate, selectedHeroesPulse .5s linear .5s infinite alternate;\r\n  -webkit-filter: brightness(100%) grayscale(0);\r\n  filter: brightness(100%) grayscale(0)\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container.searched img.selected {\r\n  opacity: .4\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container.search-selected img {\r\n  -webkit-animation: selectedHeroPulse .5s linear 0s infinite alternate;\r\n  animation: selectedHeroPulse .5s linear 0s infinite alternate;\r\n  box-shadow: 0 0 .5vw .2vw #50d1d3\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container:not(.selected):hover .zoom {\r\n  display: block\r\n}\r\n\r\n.heroes-grid .attribute-group .attribute-group-padding-fix .hero-icon-container .hero-card-name {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  color: #fff;\r\n  font-size: .55vw;\r\n  text-align: center;\r\n  background: rgba(0, 0, 0, .7);\r\n  border-top: 1px solid rgba(0, 0, 0, .8);\r\n  text-transform: uppercase\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content btn-d2\" *ngIf=\"isLoading\">\n  <h1>Getting match result...</h1>\n</div>\n<div class=\"row\" *ngIf=\"page=='pick'\">\n  <div class=\"col-md-12 row\" style=\"margin-bottom: 40px\">\n    <div class=\"col-md-12\" style=\"margin-top: 20px\">\n      <button *ngIf=\"isComplete\" class=\"btn-d2\" (click)=\"getResult()\">Get Result</button>\n      <h3 *ngIf=\"!isComplete\" class=\"splash-text\">Player {{curPlayer==1?'1':'2'}} {{splashText}}:</h3>\n      <h3 *ngIf=\"!isComplete\" class=\"\">Time {{secToTime(time)}}</h3>\n    </div>\n    <div class=\"col-md-6\" style=\"margin: 0 auto;\">\n      <h2>Team 1</h2>\n      <h3>Reserved {{secToTime(bonusTimeP1)}}</h3>\n      <div class=\"row\" style=\"margin-bottom: 10px\">\n        <h3 class=\"col-md-1 vertical-text\">Picks</h3>\n        <div *ngFor=\"let hero of picksP1\" class=\"img-pick {{hero.isPickTime?'active-player':''}}\" style=\"float: left\">\n          <img *ngIf=\"hero.id>0\" title=\"{{hero.localized_name}}\" src=\"assets/img/portraits/{{hero.id}}.jpg\" style=\"transform: scale(1) translate(-0%, -20%)\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <h3 class=\"col-md-1 vertical-text\">Bans</h3>\n        <div class=\"img-pick img-ban {{hero.isPickTime?'active-player':''}}\" *ngFor=\"let hero of bansP1\" style=\"float: left\">\n          <img *ngIf=\"hero.id>0\" title=\"{{hero.localized_name}}\" src=\"assets/img/portraits/{{hero.id}}.jpg\" style=\"transform: scale(0.7) translate(-20%, -30%)\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\" style=\"margin: 0 auto;\">\n      <h2>Team 1</h2>\n      <h3>Reserved {{secToTime(bonusTimeP1)}}</h3>\n      <div class=\"row\" style=\"margin-bottom: 10px\">\n        <h3 class=\"col-md-1 vertical-text\">Picks</h3>\n        <div *ngFor=\"let hero of picksP2\" class=\"img-pick {{hero.isPickTime?'active-player':''}}\" style=\"float: left\">\n          <img *ngIf=\"hero.id>0\" title=\"{{hero.localized_name}}\" src=\"assets/img/portraits/{{hero.id}}.jpg\" style=\"transform: scale(1) translate(-0%, -20%)\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <h3 class=\"col-md-1 vertical-text\">Bans</h3>\n        <div class=\"img-pick img-ban {{hero.isPickTime?'active-player':''}}\" *ngFor=\"let hero of bansP2\" style=\"float: left\">\n          <img *ngIf=\"hero.id>0\" title=\"{{hero.localized_name}}\" src=\"assets/img/portraits/{{hero.id}}.jpg\" style=\"transform: scale(0.7) translate(-20%, -30%)\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"heroes-grid col-md-10\" style=\"left: 20px;\">\n    <div class=\"attribute-group\">\n      <div class=\"attribute-group-label-prepend\"><span>Strength</span></div>\n      <div class=\"attribute-group-padding-fix\">\n        <div class=\"hero-icon-container {{hero.banned?'img-hero-selected':'img-hero'}}\" *ngFor=\"let hero of getStrHeroes()\"><img src=\"assets/img/portraits/{{hero.id}}.jpg\" (click)=\"heroClick(hero.id)\">\n          <div class=\"zoom\" [ngStyle]=\"{'background-image': 'url(assets/img/portraits/' + hero.id + '.jpg)'}\"><span class=\"hero-card-name\">{{hero.localized_name}}</span></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"attribute-group\">\n      <div class=\"attribute-group-label-prepend\"><span>Agility</span></div>\n      <div class=\"attribute-group-padding-fix\">\n        <div class=\"hero-icon-container {{hero.banned?'img-hero-selected':'img-hero'}}\" *ngFor=\"let hero of getAgiHeroes()\"><img src=\"assets/img/portraits/{{hero.id}}.jpg\" (click)=\"heroClick(hero.id)\">\n          <div class=\"zoom\" [ngStyle]=\"{'background-image': 'url(assets/img/portraits/' + hero.id + '.jpg)'}\"><span class=\"hero-card-name\">{{hero.localized_name}}</span></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"attribute-group\">\n      <div class=\"attribute-group-label-prepend\"><span>Intelligence</span></div>\n      <div class=\"attribute-group-padding-fix\">\n        <div class=\"hero-icon-container {{hero.banned?'img-hero-selected':'img-hero'}}\" *ngFor=\"let hero of getIntHeroes()\"><img src=\"assets/img/portraits/{{hero.id}}.jpg\" (click)=\"heroClick(hero.id)\">\n          <div class=\"zoom\" [ngStyle]=\"{'background-image': 'url(assets/img/portraits/' + hero.id + '.jpg)'}\"><span class=\"hero-card-name\">{{hero.localized_name}}</span></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 img-thumbnail\" *ngIf=\"false\">\n    <div>\n      <div>\n        <img src=\"assets/img/str.png\"> Strength\n      </div>\n      <img *ngFor=\"let hero of getStrHeroes()\" src=\"assets/img/{{hero.name}}_sb.png \" title=\"{{hero.localized_name}}\" class=\"img-thumbnail {{hero.banned?'img-hero-selected':'img-hero'}}\"\n        (click)=\"heroClick(hero.id)\">\n    </div>\n    <div>\n      <div>\n        <img src=\"assets/img/agi.png\"> Agility\n      </div>\n      <img *ngFor=\"let hero of getAgiHeroes()\" src=\"assets/img/{{hero.name}}_sb.png \" title=\"{{hero.localized_name}}\" class=\"img-thumbnail {{hero.banned?'img-hero-selected':'img-hero'}}\"\n        (click)=\"heroClick(hero.id)\">\n    </div>\n    <div>\n      <div>\n        <img src=\"assets/img/int.png \"> Intelligence\n      </div>\n      <img *ngFor=\"let hero of getIntHeroes()\" src=\"assets/img/{{hero.name}}_sb.png \" title=\"{{hero.localized_name}}\" class=\"img-thumbnail {{hero.banned?'img-hero-selected':'img-hero'}}\"\n        (click)=\"heroClick(hero.id)\">\n    </div>\n  </div>\n  <div class=\"col-md-6 img-thumbnail\" *ngIf=\"false\">\n    <div class=\"row\">\n      <h3 class=\"col-md-10  splash-text\">Player {{curPlayer==1?'1':'2'}} {{splashText}}:</h3>\n      <h3 class=\"col-md-10\">Time {{time}}</h3>\n      <h3 class=\"col-md-5\">Bonus time {{bonusTimeP1}}</h3>\n      <h3 class=\"col-md-5\">Bonus time {{bonusTimeP2}}</h3>\n\n      <h2 class=\"col-md-10\">Bans</h2>\n      <div class=\"col-md-5\">\n        <img *ngFor=\"let ban of bansP1\" src=\"assets/img/{{ban.name}}_sb.png\" title=\"{{ban.localized_name}}\" class=\"img-thumbnail img-hero {{ban.isPickTime?'active-player':''}}\">\n      </div>\n      <div class=\"col-md-5\">\n        <img *ngFor=\"let ban of bansP2\" src=\"assets/img/{{ban.name}}_sb.png\" title=\"{{ban.localized_name}}\" class=\"img-thumbnail img-hero {{ban.isPickTime?'active-player':''}}\">\n      </div>\n      <h2 class=\"col-md-10\">Picks</h2>\n      <div class=\"col-md-5\">\n        <img *ngFor=\"let pick of picksP1\" src=\"assets/img/{{pick.name}}_sb.png\" title=\"{{pick.localized_name}}\" class=\"img-thumbnail img-hero {{pick.isPickTime?'active-player':''}}\">\n      </div>\n      <div class=\"col-md-5\">\n        <img *ngFor=\"let pick of picksP2\" src=\"assets/img/{{pick.name}}_sb.png\" title=\"{{pick.localized_name}}\" class=\"img-thumbnail img-hero {{pick.isPickTime?'active-player':''}}\">\n      </div>\n      <div class=\"col-md-10\" *ngIf=\"isComplete\">\n        <button class=\"btn btn-primary btn-lg\" (click)=\"getResult()\">Get Result</button>\n      </div>\n    </div>\n  </div>\n</div>\n<app-draft-result *ngIf=\"page=='result'\" [picksP1]=\"picksP1\" [picksP2]=\"picksP2\">\n\n</app-draft-result>\n"

/***/ }),

/***/ "../../../../../src/app/heroes-list/heroes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heroes__ = __webpack_require__("../../../../../src/app/heroes-list/heroes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_server__ = __webpack_require__("../../../../../src/app/server/server.ts");
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



var EmptyHero = (function () {
    function EmptyHero() {
        this.name = "empty";
        this.isPickTime = false;
    }
    return EmptyHero;
}());
var fillHeroes = function () {
    var arr = [];
    for (var index = 0; index < 5; index++) {
        arr.push(new EmptyHero());
    }
    return arr;
};
var HeroesListComponent = (function () {
    function HeroesListComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.heroes = [];
        this.bansP1 = fillHeroes();
        this.bansP2 = fillHeroes();
        this.picksP1 = fillHeroes();
        this.picksP2 = fillHeroes();
        this.time = 30;
        this.bonusTimeP1 = 130;
        this.bonusTimeP2 = 130;
        this.curPlayer = 1;
        this.splashText = "";
        this.isLoading = false;
        //�-�-�-�-�-��-�-�-�-�-�-�-�-�-�-�-�-�-�
        this.order = ["b1", "b2", "b1", "b2", "p1", "p2", "p2", "p1", "b1", "b2", "b1", "b2", "p2", "p1", "p2", "p1", "b2", "b1", "p2", "p1"];
        this.currOrder = 0;
        this.isComplete = false;
        this.page = 'pick';
        this.heroes = __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */];
        this.currOrder = 0;
        this.turnTime = setInterval(function () { return _this.tick(); }, 1000);
        this.splashText = "BAN";
        ;
        this.bansP1[0].isPickTime = true;
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
        if (__WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; }).banned == true)
            return;
        __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; }).banned = true;
        if (this.order[this.currOrder] == "b1")
            this.bansP1[this.bansP1.findIndex(function (el) { return el.name == "empty"; })] = __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; });
        if (this.order[this.currOrder] == "b2")
            this.bansP2[this.bansP2.findIndex(function (el) { return el.name == "empty"; })] = __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; });
        if (this.order[this.currOrder] == "p1")
            this.picksP1[this.picksP1.findIndex(function (el) { return el.name == "empty"; })] = __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; });
        if (this.order[this.currOrder] == "p2")
            this.picksP2[this.picksP2.findIndex(function (el) { return el.name == "empty"; })] = __WEBPACK_IMPORTED_MODULE_1__heroes__["a" /* heroes */].find(function (hero) { return hero.id == id; });
        this.currOrder++;
        if (this.currOrder >= this.order.length) {
            this.finish();
            return;
        }
        if (this.order[this.currOrder] == "b1")
            this.bansP1[this.bansP1.findIndex(function (el) { return el.name == "empty"; })].isPickTime = true;
        if (this.order[this.currOrder] == "b2")
            this.bansP2[this.bansP2.findIndex(function (el) { return el.name == "empty"; })].isPickTime = true;
        if (this.order[this.currOrder] == "p1") {
            this.picksP1[this.picksP1.findIndex(function (el) { return el.name == "empty"; })].isPickTime = true;
        }
        if (this.order[this.currOrder] == "p2")
            this.picksP2[this.picksP2.findIndex(function (el) { return el.name == "empty"; })].isPickTime = true;
        if (this.curPlayer == 1)
            this.curPlayer = 2;
        else
            this.curPlayer = 1;
        if (this.order[this.currOrder].includes("b"))
            this.splashText = "BAN";
        if (this.order[this.currOrder].includes("p"))
            this.splashText = "PICK";
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
        this.splashText = "";
        this.isComplete = true;
        clearInterval(this.turnTime);
    };
    HeroesListComponent.prototype.getResult = function () {
        if (this.isLoading)
            return;
        this.isLoading = true;
        // this.picksP1.forEach(el => {
        //   el = this.appService.getHeroMathsUp(el);
        // });
        var hl = this;
        var checkMatchups = setInterval(function () {
            // if (hl.picksP1.every(el => el.matchups != null)) {
            clearInterval(checkMatchups);
            hl.isLoading = false;
            hl.page = 'result';
            // }
        }, 500);
    };
    HeroesListComponent.prototype.secToTime = function (sec) {
        return ~~(sec / 60) + ":" + (sec % 60 < 10 ? "0" : "") + sec % 60;
    };
    return HeroesListComponent;
}());
HeroesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-heroes-list',
        template: __webpack_require__("../../../../../src/app/heroes-list/heroes-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/heroes-list/heroes-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__server_server__["a" /* Server */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__server_server__["a" /* Server */]) === "function" && _a || Object])
], HeroesListComponent);

var _a;
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
        "group": 1,
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
        "group": 1,
        "banned": false
    }
];
//# sourceMappingURL=heroes.js.map

/***/ }),

/***/ "../../../../../src/app/server/server.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Server; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { Http, Response } from '@angular/http';
// import { Parser } from './parser';
var Server = (function () {
    // parser = new Parser();
    function Server() {
    }
    Server.prototype.getHeroMathsUp = function (hero) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return Server;
}());
Server = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Server);

//# sourceMappingURL=server.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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