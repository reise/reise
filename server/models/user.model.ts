export class User {
    public id?: string;
    public username: string;
    public name: string;
    public email: string
    public password: string;
    public isAdmin: boolean;
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
            isAdmin: !!user.isAdmin,
            additionalInfo: user.additionalInfo
        };
    }
}