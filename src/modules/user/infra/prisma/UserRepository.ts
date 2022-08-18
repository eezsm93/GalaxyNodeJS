import { prisma } from "@database/prismaClient";
import { User } from "@modules/user/entities/User";
import {
  IFiltersUsers,
  IUserRepository,
} from "@modules/user/repository/IUserRepository";

class UserRepository implements IUserRepository {
  async create(values: User): Promise<User> {
    const user = await prisma.user.create({
      data: values,
    });
    return user;
  }

  async findByAttribute(attr: string, value: any): Promise<User> {
    return (await prisma.user.findFirst({ where: { [attr]: value } })) as any;
  }

  async listUsersWithFilters(
    filters: IFiltersUsers
  ): Promise<{ users: User[]; total: number }> {
    let users, total;
    let { page, size, name, email } = filters;

    let pagination = {
      skip: (page - 1) * size,
      take: Number(size),
    };

    if (!page) {
      delete pagination.skip;
    }

    if (!size) {
      delete pagination.skip;
      delete pagination.take;
    }

    if (!email && !name) {
      users = (await prisma.user.findMany({
        ...pagination,
      })) as any;

      total = (await prisma.user.count({
        ...pagination,
      })) as any;
    } else {
      users = (await prisma.user.findMany({
        where: {
          AND: {
            ...(email ? { email: { contains: email } } : {}),
            ...(name ? { name: { contains: name } } : {}),
          },
        },
        ...pagination,
      })) as any;

      total = (await prisma.user.count({
        where: {
          AND: {
            ...(email ? { email: { contains: email } } : {}),
            ...(name ? { name: { contains: name } } : {}),
          },
        },
        ...pagination,
      })) as any;
    }

    return { users, total };
  }
}

export { UserRepository };
