(()=>{"use strict";var __webpack_modules__={86:function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(236);var express_1=__importDefault(__webpack_require__(860)),router_1=__importDefault(__webpack_require__(991)),endpoints_1=__importDefault(__webpack_require__(381)),cors_1=__importDefault(__webpack_require__(582)),dotenv_1;__importDefault(__webpack_require__(142)).default.config();var app=(0,express_1.default)(),hostname="http://localhost",port=process.env.PORT||8e3,isServerless=process.env.isServerless;function handleListen(){console.log("Listening on ".concat(hostname,":").concat(port))}app.use((0,cors_1.default)({origin:"*"})),app.use(express_1.default.static("public")),app.use(express_1.default.json()),app.use(endpoints_1.default.root,router_1.default),"true"!==isServerless&&(console.log("Starting server..."),app.listen(port,handleListen)),exports.default=app},381:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0});var endpoints={base:"",root:"/",api:"/api",test:"/test"};exports.default=endpoints},270:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0});var root={get};function get(_request,response){response.sendFile("index.html",{root:"public"})}exports.default=root},991:function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var express_1=__importDefault(__webpack_require__(860)),root_1=__importDefault(__webpack_require__(270)),endpoints_1=__importDefault(__webpack_require__(381)),router=express_1.default.Router();router.get(endpoints_1.default.root,root_1.default.get),exports.default=router},582:module=>{module.exports=require("cors")},142:module=>{module.exports=require("dotenv")},860:module=>{module.exports=require("express")},236:module=>{module.exports=require("reflect-metadata")}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.exports}var __webpack_exports__=__webpack_require__(86)})();