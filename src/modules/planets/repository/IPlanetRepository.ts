import { Planet } from "../entities/Planet";

interface IPlanetRepository {
  create(planet: Planet): Promise<Planet>;
}

export { IPlanetRepository };
