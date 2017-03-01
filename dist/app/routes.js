"use strict";
var router_1 = require("@angular/router");
var containers_1 = require("./containers");
exports.routes = router_1.RouterModule.forRoot([
    {
        path: '',
        component: containers_1.Main,
        children: [
            { path: 'notes', component: containers_1.Notes },
            { path: 'addtrip', component: containers_1.AddTrip },
            { path: '', component: containers_1.Login },
            { path: 'trips', component: containers_1.Trips }
        ]
    },
    { path: '**', redirectTo: '' }
]);
//# sourceMappingURL=routes.js.map