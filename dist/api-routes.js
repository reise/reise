"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_route_1 = require("./routes/index-route");
const user_route_1 = require("./routes/user-route");
const log_route_1 = require("./routes/log-route");
const temple_routes_1 = require("./routes/temple.routes");
function registerApiRoutes(app) {
    app.use('/api/user', user_route_1.userRoutes);
    app.use('/api/logs', log_route_1.logsRoutes);
    app.use('/api/temples', temple_routes_1.templesRoutes);
    //UI route, always register this route in the end
    app.use('/', index_route_1.indexRoute);
    //page not found route
    // app.use('*', );
}
exports.registerApiRoutes = registerApiRoutes;
//# sourceMappingURL=api-routes.js.map