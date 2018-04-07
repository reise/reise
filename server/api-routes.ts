import * as express from 'express';
import { indexRoute } from "./routes/index-route";
import { userRoutes } from "./routes/user-route";
import { logsRoutes } from "./routes/log-route";
import { templesRoutes } from "./routes/temple.routes";
import { bookingRoutes } from "./routes/booking.routes";

export function registerApiRoutes(app: express.Application): void {
    app.use('/api/user', userRoutes);
    app.use('/api/logs', logsRoutes);
    app.use('/api/temples', templesRoutes);
    app.use('/api/bookings', bookingRoutes);
    //UI route, always register this route in the end
    app.use('/', indexRoute);

    //page not found route
    // app.use('*', );
}