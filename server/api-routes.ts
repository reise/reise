import { Application } from 'express';
import { bookingRoutes } from "./routes/booking.routes";
import { busRoutes } from "./routes/bus.routes";
import { indexRoute } from "./routes/index.route";
import { logsRoutes } from "./routes/log.route";
import { templesRoutes } from "./routes/temple.routes";
import { userRoutes } from "./routes/user.route";

export function registerApiRoutes(app: Application): void {
    app.use('/api/bookings', bookingRoutes);
    app.use('/api/buses', busRoutes);
    app.use('/api/logs', logsRoutes);
    app.use('/api/temples', templesRoutes);
    app.use('/api/user', userRoutes);
    app.use('/', indexRoute); //UI route, always register this route in the end
}