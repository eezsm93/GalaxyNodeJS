import { prisma } from "@modules/database/prismaClient";
import { Planet } from "@modules/planets/entities/Planet";
import { IPlanetRepository } from "@modules/planets/repository/IPlanetRepository";

class PlanetRepository implements IPlanetRepository {
  async create(values: Planet): Promise<Planet> {
    const { name, description, size, galaxy_id } = values;

    const galaxy = await prisma.galaxy.findUnique({
      where: {
        id: galaxy_id,
      },
    });

    const planet = await prisma.planet.create({
      data: {
        name,
        description,
        size,
        Galaxy: {
          connect: {
            id: galaxy.id,
          },
        },
      },
    });

    return planet;
  }
}

export { PlanetRepository };
