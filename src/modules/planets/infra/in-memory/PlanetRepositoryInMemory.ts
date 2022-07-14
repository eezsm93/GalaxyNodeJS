import { Planet } from "@modules/planets/entities/Planet";

class PlanetRepositoryInMemory {
  planet: Planet[] = [];

  async create(values: Planet): Promise<Planet> {
    this.planet.push(values);
    return values;
  }
}

export { PlanetRepositoryInMemory };
