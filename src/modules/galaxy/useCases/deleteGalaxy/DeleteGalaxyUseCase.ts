import { GalaxyRepository } from "@modules/galaxy/infra/repository/prisma/GalaxyRepository";

interface IDeleteGalaxyDTO {
  id: string;
}

class DeleteGalaxyUseCase {
  constructor(private galaxyRepository: GalaxyRepository) {}

  async execute({ id }: IDeleteGalaxyDTO): Promise<void> {
    let galaxyToBeDeleted = await this.galaxyRepository.findById(id);
    if (!galaxyToBeDeleted)
      throw new Error("Nao foi possivel localizar este Planeta!");

    await this.galaxyRepository.deleteGalaxy(galaxyToBeDeleted);
  }
}

export { DeleteGalaxyUseCase };
