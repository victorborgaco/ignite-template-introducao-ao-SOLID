// import { Request, Response } from "express";
//
// import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";
//
// class ShowUserProfileController {
//   constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}
//
//   handle(request: Request, response: Response): Response {
//     const { user_id } = request.params;
//     const profile = this.showUserProfileUseCase.execute({ user_id });
//
//     if (!profile) {
//       return response.status(404).json({ error: "User not find" });
//     }
//     return response.status(200).json(profile);
//   }
// }
//
// export { ShowUserProfileController };

import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.json(user);
    } catch (err) {
      return response.status(404).json({ error: err });
    }
  }
}

export { ShowUserProfileController };
