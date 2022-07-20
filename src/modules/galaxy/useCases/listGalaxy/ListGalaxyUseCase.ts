import { Galaxy } from "@modules/galaxy/entities/Galaxy";
import { IGalaxyRepository } from "@modules/galaxy/repository/IGalaxyRepository";
import { prisma } from "@prisma/client";

class ListGalaxyUseCase {
  constructor(private galaxyRepository: IGalaxyRepository) {}

  async excute(): Promise<{ Galaxys: Galaxy[] }> {
    const allGalaxys = await this.galaxyRepository.listAll();

    return allGalaxys;
  }
}

export { ListGalaxyUseCase };
