export const Validations = {
    User: {
        required: "user details are required",
        userNotFound: {
            required: "logged in user not found"
        },
        isAdmin: {
            required: "You do not have admin privileges!"
        },
        alreadyLoggedIn: {
            required: "user already logged in!"
        },
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
        city: {
            required: "city can not be left blank"
        },
        password: {
            required: "password can not be left blank",
            minLength: "password should be atleast 6 letters long"
        }
    },
    Log: {
        required: "log details are required",
        id: {
            required: "id can not be left blank"
        },
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
    Temple: {
        required: "temple details are required",
        id: "temple id is required",
        name: "temple name is required"
    },
    Booking: {
        required: "booking details are required",
        id: {
            required: "booking id can not be left blank"
        },
        templeId: {
            required: "temple id can not be left blank"
        },
        busId: {
            required: "bus id can not be left blank"
        },
        userId: {
            required: "user id can not be left blank"
        },
        templeName: {
            required: "temple name can not be left blank"
        },
        userName: {
            required: "user name can not be left blank"
        },
        price: {
            required: "price can not be left blank"
        },
        journeyDate: {
            required: "journey date can not be left blank",
            invalid: "journey date is invalid"
        },
        passengerCount: {
            required: "passenger count can not be left blank"
        }
    },
    Bus: {
        required: "bus details are required",
        id: {
            required: "bus id can not be left blank"
        },
        name: {
            required: "bus name can not be left blank"
        },
        number: {
            required: "temple number can not be left blank"
        },
        arrivalTime: {
            required: "bus arrival time can not be left blank"
        },
        departureTime: {
            required: "bus departure time can not be left blank"
        },
        sourceStation: {
            required: "source place can not be left blank"
        },
        destinationStation: {
            required: "destination place can not be left blank"
        },
        fare: {
            required: "fare can not be left blank"
        },
        totalSeats: {
            required: "price can not be left blank"
        }
    }
}