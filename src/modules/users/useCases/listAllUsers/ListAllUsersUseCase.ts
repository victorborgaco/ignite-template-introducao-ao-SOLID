// import { User } from "../../model/User";
// import { IUsersRepository } from "../../repositories/IUsersRepository";
//
// interface IRequest {
//   user_id: string;
// }
//
// class ListAllUsersUseCase {
//   constructor(private usersRepository: IUsersRepository) {}
//
//   execute({ user_id }: IRequest): User[] {
//     const user = this.usersRepository.findById(user_id);
//     if (!user.admin) {
//       throw new Error("User not found Or Not admin");
//     }
//     const users = this.usersRepository.list();
//     return users;
//   }
// }
//
// export { ListAllUsersUseCase };

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Only admins can access the list.");
    }

    if (!user.admin) {
      throw new Error("Only admins can access the list.");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
