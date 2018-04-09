"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temple_validators_1 = require("../validators/temple.validators");
const user_validator_1 = require("../validators/user-validator");
const temple_facade_1 = require("../facade/temple.facade");
const logs_facade_1 = require("../facade/logs.facade");
function redirect(req, res, next) {
    res.redirect('/api/temples/all');
}
let router = express_1.Router();
router.get('/', redirect);
router.get('/all', [
    user_validator_1.UserValidator.validateUser,
    temple_facade_1.TempleFacade.getTemples,
    logs_facade_1.LogsFacade.dumpLog
]);
router.get('/:id', [
    user_validator_1.UserValidator.validateUser,
    temple_validators_1.TempleValidator.validateGetTemple,
    temple_facade_1.TempleFacade.getTemple,
    logs_facade_1.LogsFacade.dumpLog
]);
router.put('/create', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    temple_validators_1.TempleValidator.validateCreateTemple,
    temple_facade_1.TempleFacade.createTemple,
    logs_facade_1.LogsFacade.dumpLog
]);
router.post('/update', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    temple_validators_1.TempleValidator.validateUpdateTemple,
    temple_facade_1.TempleFacade.updateTemple,
    logs_facade_1.LogsFacade.dumpLog
]);
router.delete('/:id', [
    user_validator_1.UserValidator.validateUser,
    user_validator_1.UserValidator.validateAdmin,
    temple_validators_1.TempleValidator.validateGetTemple,
    temple_facade_1.TempleFacade.deleteTemple,
    logs_facade_1.LogsFacade.dumpLog
]);
exports.templesRoutes = router;
//# sourceMappingURL=temple.routes.js.map