import { Response as ApiResponse } from "../models/response.model";
import { User } from "../models/user.model";
import { UsersCollection } from "../models/db/user-db.model";
import { Document } from "mongoose";

export namespace UserProvider {

    export function login(user: User): Promise<User> {
        return new Promise<User>((resolve: Function, reject: Function) => {
            UsersCollection
                .findOne({
                    $or: [{ email: user.username }, { username: user.username }],
                    password: user.password
                })
                .then((response: Document) => {
                    let translatedUser: User = User.translate(response);
                    if (!translatedUser) {
                        return reject("user not found");
                    }
                    return resolve(translatedUser);
                })
                .catch((error: any) => {
                    return reject("failed to get user from database");
                });
        });
    }

    export function register(user: User): Promise<User> {
        return new Promise<User>((resolve: Function, reject: Function) => {
            UsersCollection.create(user)
                .then((response: Document) => {
                    let translatedUser: User = User.translate(response);
                    if (!translatedUser) {
                        return reject("user details could not be saved!");
                    }
                    return resolve(translatedUser);
                })
                .catch((error: any) => {
                    return reject("failed to save user details");
                });
        });
    }
}