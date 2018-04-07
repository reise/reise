import * as mongoose from "mongoose";
import { DbSchema } from "./db-constants";
import { Schema, model } from "mongoose";

export let UsersCollection = model(DbSchema.Collections.Users, new Schema({

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