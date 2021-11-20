"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersController = void 0;
var ListAllUsersController = /** @class */ (function () {
    function ListAllUsersController(listAllUsersUseCase) {
        this.listAllUsersUseCase = listAllUsersUseCase;
    }
    ListAllUsersController.prototype.handle = function (request, response) {
        var user_id = request.headers.user_id;
        var list = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
        if (!list) {
            return response
                .status(400)
                .json({ error: "user not found or not admin" });
        }
        return response.json(list);
    };
    return ListAllUsersController;
}());
exports.ListAllUsersController = ListAllUsersController;
