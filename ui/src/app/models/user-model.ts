export class User {
    name: string;
    username: string;
    email: string;
    password: string;
    repeatPassword: string;

    public constructor() {
        this.name = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
    }

    public static checkPasswordmatch(user: User): boolean {
        return user.password === user.repeatPassword;
    }
}