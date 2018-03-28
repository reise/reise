export class User {
    public id?: string;
    public username: string;
    public name: string;
    public email: string
    public password: string;
    public additionalInfo?: Array<any>;

    public static translate(user: any): User {
        if (!user) {
            return null;
        }

        return {
            id: user._id.toString(),
            username: user.username,
            name: user.name,
            email: user.email,
            password: user.password,
            additionalInfo: user.additionalInfo
        };
    }
}