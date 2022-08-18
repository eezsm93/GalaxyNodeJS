import { User } from "../entities/User";

interface IUserRepository {
  create(values: User): Promise<User>;
  findByAttribute?(attr: string, value: any): Promise<User>;
}

export { IUserRepository };
