"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booking_routes_1 = require("./routes/booking.routes");
const bus_routes_1 = require("./routes/bus.routes");
const index_route_1 = require("./routes/index.route");
const log_route_1 = require("./routes/log.route");
const temple_routes_1 = require("./routes/temple.routes");
const user_route_1 = require("./routes/user.route");
function registerApiRoutes(app) {
    app.use('/api/bookings', booking_routes_1.bookingRoutes);
    app.use('/api/buses', bus_routes_1.busRoutes);
    app.use('/api/logs', log_route_1.logsRoutes);
    app.use('/api/temples', temple_routes_1.templesRoutes);
    app.use('/api/user', user_route_1.userRoutes);
    app.use('/', index_route_1.indexRoute); //UI route, always register this route in the end
}
exports.registerApiRoutes = registerApiRoutes;
//# sourceMappingURL=api-routes.js.map