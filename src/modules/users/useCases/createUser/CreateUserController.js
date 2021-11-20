"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
var CreateUserController = /** @class */ (function () {
    function CreateUserController(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    CreateUserController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, email = _a.email;
        var user = this.createUserUseCase.execute({ name: name, email: email });
        if (!user) {
            return response.status(400).json({ error: "User not found" });
        }
        return response.status(201).json(user);
    };
    return CreateUserController;
}());
exports.CreateUserController = CreateUserController;
