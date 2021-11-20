// import { User } from "../../model/User";
// import { IUsersRepository } from "../../repositories/IUsersRepository";
//
// interface IRequest {
//   name: string;
//   email: string;
// }
//
// class CreateUserUseCase {
//   constructor(private usersRepository: IUsersRepository) {}
//
//   execute({ email, name }: IRequest): User {
//     const userExistis = this.usersRepository.findByEmail(email);
//     if (userExistis) {
//       throw new Error("usuario exists");
//     }
//     const user = this.usersRepository.create({ name, email });
//     return user;
//   }
// }
//
// export { CreateUserUseCase };

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already e3xists.");
    }

    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
