import * as mongoose from "mongoose";
import { APP_CONSTANTS } from "../../shared/app-constants"
import { Schema, model } from "mongoose";
import { PersonalInfoSchema } from "./personal-info.model";

export let DbUser = model(APP_CONSTANTS.DB.COLLECTIONS.USERS, new Schema({

    name: {
        type: String,
        required: [true, 'name is required']
    },

    username: {
        type: String,
        required: [true, 'user name is required']
    },

    userType: {
        type: String,
        required: [true, 'user type is required'],
        validate: {
            validator: function (value: string) {
                let type = value.trim();
                return type === "SHOPKEEPER" || type === "CUSTOMER";
            }
        }
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

    personalInfo: {
        type: PersonalInfoSchema,
    }
}, { timestamps: true, versionKey: false }));