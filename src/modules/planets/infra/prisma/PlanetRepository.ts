import { prisma } from "@modules/database/prismaClient";
import { Planet } from "@modules/planets/entities/Planet";
import { IPlanetRepository } from "@modules/planets/repository/IPlanetRepository";

class PlanetRepository implements IPlanetRepository {
  async create(values: Planet): Promise<Planet> {
    const { name, description, size, Galaxy } = values;
    const planet = await prisma.planet.create({
      data: {
        name,
        description,
        size,
        Galaxy: {
          connect: {
            id: Galaxy.id,
          },
        },
      },
    });

    return planet;
  }
}

export { PlanetRepository };
