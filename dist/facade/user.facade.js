"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const user_provider_1 = require("../providers/user.provider");
var UserFacade;
(function (UserFacade) {
    function login(req, res, next) {
        let apiResponse = new response_model_1.Response();
        user_provider_1.UserProvider.login(req.body)
            .then((response) => {
            apiResponse.data = response;
            //set user in session
            // req.session.user = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = error;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    UserFacade.login = login;
    function register(req, res, next) {
        let apiResponse = new response_model_1.Response();
        user_provider_1.UserProvider.register(req.body)
            .then((response) => {
            apiResponse.data = response;
            //set user in session
            // req.session.user = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = error;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    UserFacade.register = register;
    function logout(req, res, next) {
        let apiResponse = new response_model_1.Response();
        //copy session id before destroying session
        let sessionId = req.sessionID;
        req.session.destroy((error) => {
            if (error) {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = ["error occurred while logging out the user"];
                res.json(apiResponse);
            }
            else {
                apiResponse.data = true;
                res.locals = {
                    apiResponse: apiResponse,
                    sessionId: sessionId
                };
                res.json(apiResponse);
            }
        });
    }
    UserFacade.logout = logout;
})(UserFacade = exports.UserFacade || (exports.UserFacade = {}));
//# sourceMappingURL=user.facade.js.map