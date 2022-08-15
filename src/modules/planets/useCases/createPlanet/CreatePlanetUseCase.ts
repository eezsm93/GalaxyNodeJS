import { Planet } from "../../entities/Planet";
import { IPlanetRepository } from "../../repository/IPlanetRepository";
import { IGalaxyRepository } from "@modules/galaxy/repository/IGalaxyRepository";

interface ICreatePlanetDTO {
  name: string;
  description: string;
  surfaceArea: number;
  sunDistance: number;
  durationDay: number;
  gravity: number;
  isActive: boolean;
  galaxy_id: string;
}

class CreatePlanetUseCase {
  constructor(
    private planetRepository: IPlanetRepository,
    private galaxyRepository: IGalaxyRepository
  ) {}

  async execute({
    name,
    description,
    surfaceArea,
    sunDistance,
    durationDay,
    gravity,
    isActive,
    galaxy_id,
  }: ICreatePlanetDTO): Promise<Planet> {
    const Galaxy = await this.galaxyRepository.findById(galaxy_id);
    if (!Galaxy.id) throw new Error("Galaxia inexistente");

    const planet = new Planet({
      name,
      description,
      surfaceArea,
      sunDistance,
      durationDay,
      gravity,
      isActive,
      Galaxy,
    });

    const planetPersisted = await this.planetRepository.create(planet);

    return planetPersisted;
  }
}

export { CreatePlanetUseCase };
