"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnUserAdminController = void 0;
var TurnUserAdminController = /** @class */ (function () {
    function TurnUserAdminController(turnUserAdminUseCase) {
        this.turnUserAdminUseCase = turnUserAdminUseCase;
    }
    TurnUserAdminController.prototype.handle = function (request, response) {
        var user_id = request.params.user_id;
        var user = this.turnUserAdminUseCase.execute({ user_id: user_id });
        if (!user) {
            return response.status(404).json({ error: "User not found" });
        }
        return response.status(200).json(user);
    };
    return TurnUserAdminController;
}());
exports.TurnUserAdminController = TurnUserAdminController;
