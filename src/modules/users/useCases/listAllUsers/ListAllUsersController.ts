// import { Request, Response } from "express";
//
// import { ListAllUsersUseCase } from "./ListAllUsersUseCase";
//
// class ListAllUsersController {
//   constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}
//
//   handle(request: Request, response: Response): Response {
//     const { user_id } = request.headers;
//
//     const list = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
//
//     if (!list) {
//       return response
//         .status(400)
//         .json({ error: "user not found or not admin" });
//     }
//     return response.json(list);
//   }
// }
//
// export { ListAllUsersController };

import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const all = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(all);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { ListAllUsersController };
