import { GalaxyRepository } from "@modules/galaxy/infra/repository/prisma/GalaxyRepository";
import { PlanetRepository } from "@modules/planets/infra/prisma/PlanetRepository";
import { Request, Response } from "express";

import { CreatePlanetUseCase } from "./CreatePlanetUseCase";

class CreatePlanetController {
  async handle(request: Request, response: Response) {
    const {
      name,
      description,
      surfaceArea,
      sunDistance,
      durationDay,
      gravity,
      isActive,
      photoBase64,
      galaxy_id,
    } = request.body;

    const planetRepository = new PlanetRepository();
    const galaxyRepository = new GalaxyRepository();
    const createPlanetUseCase = new CreatePlanetUseCase(
      planetRepository,
      galaxyRepository
    );

    const planet = await createPlanetUseCase.execute({
      name,
      description,
      surfaceArea,
      sunDistance,
      durationDay,
      gravity,
      isActive,
      photoBase64,
      galaxy_id,
    });

    return response.status(201).json(planet);
  }
}

export { CreatePlanetController };
