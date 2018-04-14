"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_validator_1 = require("../validators/user-validator");
const user_facade_1 = require("../facade/user.facade");
const logs_facade_1 = require("../facade/logs.facade");
let router = express_1.Router();
router.get('/logged-in-user', [
    user_facade_1.UserFacade.getLoggedInUser,
    logs_facade_1.LogsFacade.dumpLog
]);
router.post('/login', [
    user_validator_1.UserValidator.validateLogin,
    user_facade_1.UserFacade.login,
    logs_facade_1.LogsFacade.dumpLog
]);
router.post('/register', [
    user_validator_1.UserValidator.validateRegister,
    user_facade_1.UserFacade.checkUsernameAvailability,
    user_facade_1.UserFacade.register,
    logs_facade_1.LogsFacade.dumpLog
]);
router.post('/logout', [
    user_validator_1.UserValidator.validateUser,
    user_facade_1.UserFacade.logout
]);
exports.userRoutes = router;
//# sourceMappingURL=user.route.js.map