"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    static translate(user) {
        if (!user) {
            return null;
        }
        return {
            id: user._id.toString(),
            username: user.username,
            name: user.name,
            email: user.email,
            city: user.city,
            password: user.password,
            isAdmin: !!user.isAdmin,
            additionalInfo: user.additionalInfo
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map