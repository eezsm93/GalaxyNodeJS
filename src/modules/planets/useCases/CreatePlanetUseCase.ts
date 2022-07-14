import { inject } from "tsyringe";
import { Planet } from "../entities/Planet";
import { IPlanetRepository } from "../repository/IPlanetRepository";

interface ICreatePlanetDTO {
  name: string;
  description: string;
  size: number;
}

class CreatePlanetUseCase {
  constructor(
    @inject("PlanetRepository") private planetRepository: IPlanetRepository
  ) {}

  async execute({
    name,
    description,
    size,
  }: ICreatePlanetDTO): Promise<Planet> {
    const planet = new Planet({
      name,
      description,
      size,
    });

    const planetPersisted = await this.planetRepository.create(planet);

    return planetPersisted;
  }
}

export { CreatePlanetUseCase };
