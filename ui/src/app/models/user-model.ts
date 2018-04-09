export class User {
    id: string;
    name: string;
    username: string;
    email: string;
    city: string;
    isAdmin: boolean;
    password: string;
    repeatPassword: string;

    public constructor() {
        this.city = "Latur";
        this.id = "";
        this.name = "";
        this.username = "";
        this.email = "";
        this.isAdmin = false;
        this.password = "";
        this.repeatPassword = "";
    }

    public static checkPasswordmatch(user: User): boolean {
        return user.password === user.repeatPassword;
    }
}