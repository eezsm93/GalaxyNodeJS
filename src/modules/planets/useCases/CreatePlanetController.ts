import { GalaxyRepository } from "@modules/galaxy/infra/repository/prisma/GalaxyRepository";
import { Request, Response } from "express";
import { PlanetRepository } from "../infra/prisma/PlanetRepository";
import { CreatePlanetUseCase } from "./CreatePlanetUseCase";

class CreatePlanetController {
  async handle(request: Request, response: Response) {
    const { name, description, size, galaxy_id } = request.body;

    const planetRepository = new PlanetRepository();
    const galaxyRepository = new GalaxyRepository()
    const createPlanetUseCase = new CreatePlanetUseCase(planetRepository, galaxyRepository);

    const planet = await createPlanetUseCase.execute({
      name,
      description,
      size,
      galaxy_id,
    });

    return response.status(201).json(planet);
  }
}

export { CreatePlanetController };
