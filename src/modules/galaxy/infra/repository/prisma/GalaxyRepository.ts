import { prisma } from "@modules/database/prismaClient";
import { Galaxy } from "@modules/galaxy/entities/Galaxy";
import { IGalaxyRepository } from "@modules/galaxy/repository/IGalaxyRepository";

class GalaxyRepository implements IGalaxyRepository {
  async create(values: Galaxy): Promise<Galaxy> {
    const galaxy = await prisma.galaxy.create({
      data: values,
    });

    return galaxy;
  }

  async listAll() {
    return await prisma.galaxy.findMany();
  }
}

export { GalaxyRepository };
