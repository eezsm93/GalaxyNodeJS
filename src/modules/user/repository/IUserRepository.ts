import { User } from "../entities/User";

interface IFiltersUsers {
  page?: number;
  size?: number;
  email?: string;
  name?: string;
  userName?: string;
  companyName?: string;
  isActive?: boolean | string;
}

interface IUserRepository {
  create(values: User): Promise<User>;
  findByAttribute?(attr: string, value: any): Promise<User>;
  listUsersWithFilters(
    filters: IFiltersUsers
  ): Promise<{ users: User[]; total: number }>;
}

export { IUserRepository, IFiltersUsers };
