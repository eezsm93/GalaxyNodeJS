import { Planet } from "@modules/planets/entities/Planet";
import { IPlanetRepository } from "@modules/planets/repository/IPlanetRepository";
import { prisma } from "@database/prismaClient";

class PlanetRepository implements IPlanetRepository {
  async create(values: Planet): Promise<Planet> {
    const planet = await prisma.planets.create({
      data: values,
    });
    return planet;
  }
}

export { PlanetRepository };
