import * as express from 'express';
import { indexRoute } from "./routes/index-route";
import { userRoutes } from "./routes/user-route";

export function registerApiRoutes(app: express.Application): void {
    app.use('/api/user', userRoutes);
    //always register this route in the end
    app.use('/', indexRoute);
}