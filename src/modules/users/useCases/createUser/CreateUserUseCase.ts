import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userExistis = this.usersRepository.findByEmail(email);
    if (userExistis) {
      throw new Error("usuario exists");
    }

    const user = this.usersRepository.create({ name, email });
    console.log(user);
    return user;
  }
}

export { CreateUserUseCase };
