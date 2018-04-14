"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_model_1 = require("../models/response.model");
const user_provider_1 = require("../providers/user.provider");
var UserFacade;
(function (UserFacade) {
    function getLoggedInUser(req, res, next) {
        let apiResponse = new response_model_1.Response();
        if (req.session.user && req.session.user.id) {
            apiResponse.data = req.session.user;
        }
        else {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = ["no logged in user found!"];
        }
        res.locals = {
            apiResponse: apiResponse
        };
        next();
    }
    UserFacade.getLoggedInUser = getLoggedInUser;
    function login(req, res, next) {
        let apiResponse = new response_model_1.Response();
        user_provider_1.UserProvider.login(req.body)
            .then((response) => {
            apiResponse.data = response;
            // set user in session
            req.session.user = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
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
            req.session.user = response;
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = [error];
            res.locals = {
                apiResponse: apiResponse
            };
            next();
        });
    }
    UserFacade.register = register;
    function checkUsernameAvailability(req, res, next) {
        let apiResponse = new response_model_1.Response();
        user_provider_1.UserProvider.checkUsernameAvailability(req.body)
            .then((userExists) => {
            if (!userExists) {
                next();
            }
            else {
                apiResponse.data = null;
                apiResponse.status = false;
                apiResponse.messages = ["Username or Emailid already exists!"];
                res.json(apiResponse);
            }
        })
            .catch((error) => {
            apiResponse.data = null;
            apiResponse.status = false;
            apiResponse.messages = ["Username or Emailid already exists!"];
            res.json(apiResponse);
        });
    }
    UserFacade.checkUsernameAvailability = checkUsernameAvailability;
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