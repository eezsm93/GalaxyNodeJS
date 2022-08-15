import { Planet } from "@modules/planets/entities/Planet";
import { IPlanetRepository } from "@modules/planets/repository/IPlanetRepository";

class ListAllPlanetsUseCase {
  constructor(private planetRepository: IPlanetRepository) {}

  async execute(): Promise<{ Planets: Planet[] }> {
    const allPlanets = await this.planetRepository.listAll();
    return allPlanets;
  }
}

export { ListAllPlanetsUseCase };
