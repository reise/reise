"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
const user_db_model_1 = require("../models/db/user-db.model");
var UserProvider;
(function (UserProvider) {
    function login(user) {
        return new Promise((resolve, reject) => {
            user_db_model_1.UsersCollection
                .findOne({
                $or: [{ email: user.username }, { username: user.username }],
                password: user.password
            })
                .then((response) => {
                let translatedUser = user_model_1.User.translate(response);
                if (!translatedUser) {
                    return reject("user not found");
                }
                return resolve(translatedUser);
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    UserProvider.login = login;
    function checkUsernameAvailability(user) {
        return new Promise((resolve, reject) => {
            user_db_model_1.UsersCollection.findOne({
                $or: [{ email: user.email }, { username: user.username }],
            }).then((user) => {
                resolve(!!user);
            }).catch((error) => {
                reject(false);
            });
        });
    }
    UserProvider.checkUsernameAvailability = checkUsernameAvailability;
    function register(user) {
        return new Promise((resolve, reject) => {
            user_db_model_1.UsersCollection.create(user)
                .then((response) => {
                let translatedUser = user_model_1.User.translate(response);
                if (!translatedUser) {
                    return reject("user details could not be saved!");
                }
                return resolve(translatedUser);
            })
                .catch((error) => {
                return reject("failed to serve the request, something went wrong!");
            });
        });
    }
    UserProvider.register = register;
})(UserProvider = exports.UserProvider || (exports.UserProvider = {}));
//# sourceMappingURL=user.provider.js.map