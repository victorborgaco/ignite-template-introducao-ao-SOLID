"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
var UsersRepository = /** @class */ (function () {
    function UsersRepository() {
        this.users = [];
    }
    UsersRepository.getInstance = function () {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    };
    UsersRepository.prototype.create = function (_a) {
        var name = _a.name, email = _a.email;
        var user = {
            name: name,
            email: email,
            updated_at: new Date(),
            created_at: new Date(),
        };
        this.users.push(user);
        return user;
    };
    UsersRepository.prototype.findById = function (id) {
        var findUser = this.users.find(function (user) { return user.id === id; });
        // if (!findUser) {
        //   throw new Error("User Not found");
        // }
        return findUser;
    };
    UsersRepository.prototype.findByEmail = function (email) {
        var findEmail = this.users.find(function (user) { return user.email === email; });
        // if (!findEmail) {
        //   throw new Error("Email Not found");
        // }
        return findEmail;
    };
    UsersRepository.prototype.turnAdmin = function (receivedUser) {
        var user = receivedUser;
        user.admin = true;
        user.updated_at = new Date();
        return user;
        // Complete aqui
    };
    UsersRepository.prototype.list = function () {
        return this.users;
        // Complete aqui
    };
    return UsersRepository;
}());
exports.UsersRepository = UsersRepository;
