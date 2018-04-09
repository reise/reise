"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_constants_1 = require("./db-constants");
const mongoose_1 = require("mongoose");
exports.UsersCollection = mongoose_1.model(db_constants_1.DbSchema.Collections.Users, new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    username: {
        type: String,
        required: [true, 'user name is required']
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(v);
            },
            message: '{VALUE} is not a valid email id!'
        },
        required: [true, 'email id is required']
    },
    city: {
        type: String,
        required: [true, "city is required"]
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    isAdmin: {
        type: Boolean
    },
    additinlaInfo: {
        type: Array,
    }
}, { timestamps: true, versionKey: false, id: true }));
//# sourceMappingURL=user-db.model.js.map