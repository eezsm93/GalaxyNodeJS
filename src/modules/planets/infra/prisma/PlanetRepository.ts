import { Planet } from "@modules/planets/entities/Planet";
import { IPlanetRepository } from "@modules/planets/repository/IPlanetRepository";
import { prisma } from "@database/prismaClient";

class PlanetRepository implements IPlanetRepository {
  async create({
    name,
    description,
    size,
    galaxy_id,
  }: Planet): Promise<Planet> {
    const planet = await prisma.planets.create({
      data: {
        name,
        description,
        size,
        Galaxys: {
          connect: {
            id: galaxy_id,
          },
        },
      },
    });
    return planet;
  }
}

export { PlanetRepository };
