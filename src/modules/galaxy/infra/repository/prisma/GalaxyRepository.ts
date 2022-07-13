import { Galaxy } from "@modules/galaxy/entities/Galaxy";
import { IGalaxyRepository } from "@modules/galaxy/repository/IGalaxyRepository";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../../../database/prismaClient";

class GalaxyRepository implements IGalaxyRepository{

async create(values: Galaxy): Promise<Galaxy> {
  const galaxy = await prisma.galaxy.create({
    data: values,
  });
	  return galaxy;
}

}

export { GalaxyRepository }