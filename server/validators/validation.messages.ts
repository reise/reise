export const Validations = {
    user : {
        required: "user details are required",
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
    log : {
        required: "log details are required",
        url: {
            required: "url can not be left blank"
        },
        request: {
            required: "request can not be left blank"
        },
        response: {
            required: "response can not be left blank"
        }
    }
}