// import { User } from "../../model/User";
// import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";
//
// class UsersRepository implements IUsersRepository {
//   private users: User[];
//
//   private static INSTANCE: UsersRepository;
//
//   private constructor() {
//     this.users = [];
//   }
//
//   public static getInstance(): UsersRepository {
//     if (!UsersRepository.INSTANCE) {
//       UsersRepository.INSTANCE = new UsersRepository();
//     }
//
//     return UsersRepository.INSTANCE;
//   }
//
//   create({ name, email }: ICreateUserDTO): User {
//     const user = new User();
//     Object.assign(user, {
//       name,
//       email,
//       updated_at: new Date(),
//       created_at: new Date(),
//     });
//
//     this.users.push(user);
//     return user;
//   }
//
//   findById(id: string): User | undefined {
//     const findUser = this.users.find((user) => user.id === id);
//     // if (!findUser) {
//     //   throw new Error("User Not found");
//     // }
//     return findUser;
//   }
//
//   findByEmail(email: string): User | undefined {
//     const findEmail = this.users.find((user) => user.email === email);
//     // if (!findEmail) {
//     //   throw new Error("Email Not found");
//     // }
//     return findEmail;
//   }
//
//   turnAdmin(receivedUser: User): User {
//     const user = receivedUser;
//     user.admin = true;
//     user.updated_at = new Date();
//     return user;
//     // Complete aqui
//   }
//
//   list(): User[] {
//     return this.users;
//     // Complete aqui
//   }
// }
//
// export { UsersRepository };

import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    console.log(user);

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = receivedUser;

    user.admin = true;
    user.updated_at = new Date();

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
