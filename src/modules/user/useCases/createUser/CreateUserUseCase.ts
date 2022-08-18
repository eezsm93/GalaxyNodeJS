import { User } from "@modules/user/entities/User";
import { IUserRepository } from "@modules/user/repository/IUserRepository";
import { AppError } from "@shared/errors/AppError";
import bcrypt from "bcrypt";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  photoBase64: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(values: ICreateUserDTO): Promise<User> {
    const dataUsersThatHasEmail = await this.userRepository.findByAttribute(
      "email",
      values.email
    );

    if (dataUsersThatHasEmail?.id) {
      throw new AppError("Usuário com este email já existe");
    }

    values.password = bcrypt.hashSync(values.password, 5);

    const user = new User({
      ...values,
    } as any);

    const userPersisted = await this.userRepository.create(user);

    return userPersisted;
  }
}

export { CreateUserUseCase };
