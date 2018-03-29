"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validations = {
    user: {
        required: "user details are required",
        userNotFound: "logged in user not found",
        username: {
            required: "username or email can not be left blank",
            minLength: "username should be atleast 5 letters long"
        },
        name: {
            required: "name can not be left blank"
        },
        email: {
            required: "email can not be left blank",
            invalid: "email is invalid",
        },
        password: {
            required: "password can not be left blank",
            minLength: "password should be atleast 6 letters long"
        }
    },
    log: {
        required: "log details are required",
        sessionId: {
            required: "session id can not be left blank"
        },
        url: {
            required: "url can not be left blank"
        },
        request: {
            required: "request can not be left blank"
        },
        response: {
            required: "response can not be left blank"
        }
    },
    temple: {
        required: "temple details are required",
        templeId: {
            required: "temple id can not be left blank"
        },
        userId: {
            required: "user id can not be left blank"
        },
        templeName: {
            required: "temple name can not be left blank"
        },
        userName: {
            required: "user name can not be left blank"
        }
    }
};
//# sourceMappingURL=validation.messages.js.map