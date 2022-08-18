import { User } from "@modules/user/entities/User";
import { IUserRepository } from "@modules/user/repository/IUserRepository";

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

    const user = new User({
      ...values,
    } as any);

    const userPersisted = await this.userRepository.create(user);

    return userPersisted;
  }
}

export { CreateUserUseCase };
