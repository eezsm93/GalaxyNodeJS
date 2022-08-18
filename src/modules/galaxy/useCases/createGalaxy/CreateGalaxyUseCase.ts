import { inject, injectable } from "tsyringe";
import { Galaxy } from "../../entities/Galaxy";
import { IGalaxyRepository } from "../../repository/IGalaxyRepository";

interface ICreateGalaxyDTO {
  name: string;
  description: string;
  color: string;
  size: number;
  type: string;
  photoBase64: string;
}

class CreateGalaxyUseCase {
  constructor(
    @inject("GalaxyRepository") private galaxyRepository: IGalaxyRepository
  ) {}

  async execute({
    name,
    description,
    color,
    size,
    type,
    photoBase64,
  }: ICreateGalaxyDTO): Promise<Galaxy> {
    const galaxy = new Galaxy({
      name,
      description,
      color,
      size,
      type,
      photoBase64,
    });

    const galaxyPersisted = await this.galaxyRepository.create(galaxy);

    return galaxyPersisted;
  }
}

export { CreateGalaxyUseCase };
