import * as express from "express";
import { UserValidator } from "../validators/user-validator";
import { UserFacade } from "../facade/user.facade";

let router = express.Router();

router.post('/login', UserValidator.validateLogin, UserFacade.login);

router.post('/register', UserValidator.validateRegister, UserFacade.register);

export let userRoutes: express.Router = router;