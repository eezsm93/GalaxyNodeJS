import { Galaxy } from "@modules/galaxy/entities/Galaxy";
import { IGalaxyRepository } from "@modules/galaxy/repository/IGalaxyRepository";
import { prisma } from "@prisma/client";

class ListGalaxyUseCase {
  constructor(private galaxyRepository: IGalaxyRepository) {}

  async excute(): Promise<Galaxy[]> {
    const galaxyPersisted = await this.galaxyRepository.listAll();

    return galaxyPersisted;
  }
}

export { ListGalaxyUseCase };
