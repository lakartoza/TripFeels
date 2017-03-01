"use strict";
var services = require("./services");
var app_1 = require("./app");
exports.App = app_1.App;
var routes_1 = require("./routes");
exports.routes = routes_1.routes;
var mapValuesToArray = function (obj) { return Object.keys(obj)
    .map(function (key) { return obj[key]; }); };
exports.providers = mapValuesToArray(services).slice();
//# sourceMappingURL=index.js.map