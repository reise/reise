import { Router } from "express";
import { UserValidator } from "../validators/user-validator";
import { UserFacade } from "../facade/user.facade";
import { LogsFacade } from "../facade/logs.facade";

let router = Router();

router.get('/logged-in-user', [
    UserFacade.getLoggedInUser,
    LogsFacade.dumpLog
]);

router.post('/login', [
    UserValidator.validateLogin,
    UserFacade.login,
    LogsFacade.dumpLog
]);

router.post('/register', [
    UserValidator.validateRegister,
    UserFacade.register,
    LogsFacade.dumpLog
]);

router.post('/logout', [
    UserValidator.validateUser,
    UserFacade.logout
]);

export let userRoutes: Router = router;