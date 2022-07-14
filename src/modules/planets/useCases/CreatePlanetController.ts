import { Request, Response } from "express";
import { PlanetRepository } from "../infra/prisma/PlanetRepository";
import { CreatePlanetUseCase } from "./CreatePlanetUseCase";

class CreatePlanetController {
  async handle(request: Request, response: Response) {
    const { name, description, size } = request.body;

    const planetRepository = new PlanetRepository();
    const createPlanetUseCase = new CreatePlanetUseCase(planetRepository);

    const planet = await createPlanetUseCase.execute({
      name,
      description,
      size,
    });

    return response.status(201).json(planet);
  }
}

export { CreatePlanetController };
