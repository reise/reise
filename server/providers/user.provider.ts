import { Response as ApiResponse } from "../models/response.model";
import { User } from "../models/user.model";

export namespace UserProvider {

    export function login(request: User): Promise<User> {
        return Promise.resolve({
            id: "1",
            username: request.username || "john_doe",
            email: request.email || "john_doe@gmail.com",
            name: "John Doe",
            password: null
        });
    }

    export function register(request: User): Promise<User> {
        return Promise.resolve({
            id: "1",
            username: request.username,
            email: request.email,
            name: request.name,
            password: null
        });
    }
}