import { prisma } from "@database/prismaClient";
import { Galaxy } from "@modules/galaxy/entities/Galaxy";
import { IGalaxyRepository } from "@modules/galaxy/repository/IGalaxyRepository";

class GalaxyRepository implements IGalaxyRepository {
  async findById(id: string): Promise<Galaxy> {
    return await prisma.galaxy.findUnique({ where: { id } });
  }
  async create(values: Galaxy): Promise<Galaxy> {
    const galaxy = await prisma.galaxy.create({
      data: values,
    });

    return galaxy;
  }

  async listAll(): Promise<{ Galaxys: Galaxy[] }> {
    return {
      Galaxys: await prisma.galaxy.findMany({
        include: {
          Planet: true,
        },
      }),
    };
  }

  async deleteGalaxy(galaxy: Galaxy): Promise<void> {
    await prisma.planet.delete({
      where: {
        id: galaxy.id,
      },
    });
  }
}

export { GalaxyRepository };
