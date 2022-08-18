import { prisma } from "@database/prismaClient";
import { Planet } from "@modules/planets/entities/Planet";
import { IPlanetRepository } from "@modules/planets/repository/IPlanetRepository";

class PlanetRepository implements IPlanetRepository {
  async findById(id: string): Promise<Planet> {
    return await prisma.planet.findUnique({
      where: {
        id,
      },
      include: { Galaxy: true },
    });
  }

  async create({ Galaxy, ...values }: Planet): Promise<Planet> {
    const planet = await prisma.planet.create({
      data: {
        ...values,
        Galaxy: {
          connect: {
            id: Galaxy.id,
          },
        },
      },
    });

    return planet;
  }

  async listAll(): Promise<{ Planets: Planet[] }> {
    return {
      Planets: await prisma.planet.findMany(),
    };
  }

  async updatePlanet({ id, ...planet }: Planet): Promise<void> {
    await prisma.planet.update({
      where: {
        id: id,
      },
      data: {
        ...planet,
      },
    });
  }

  async findByAttribute(attr: string, value: any): Promise<Planet> {
    return (await prisma.planet.findFirst({ where: { [attr]: value } })) as any;
  }

  async deletePlanet(planet: Planet): Promise<void> {
    await prisma.planet.delete({
      where: {
        id: planet.id,
      },
    });
  }

  async activeOrDesactivePlanet(values: Planet): Promise<void> {
    await prisma.planet.update({
      where: {
        id: values.id,
      },
      data: {
        isActive: !values.isActive,
      },
    });
  }
}

export { PlanetRepository };
