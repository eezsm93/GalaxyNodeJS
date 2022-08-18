import { User } from "../entities/User";

interface IUserRepository {
  create(values: User): Promise<User>;
}

export { IUserRepository };
