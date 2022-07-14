import { GalaxyRepository } from "@modules/galaxy/infra/repository/prisma/GalaxyRepository";
import { Request, Response } from "express";
import { CreateGalaxyUseCase } from "./CreateGalaxyUseCase";

class CreateGalaxyController {
  async handle(request: Request, response: Response) {
    const { name, description, color, size, planets } = request.body;

    const galaxyRepository = new GalaxyRepository();
    const createGalaxyUseCase = new CreateGalaxyUseCase(galaxyRepository);

    const galaxy = await createGalaxyUseCase.execute({
      name,
      description,
      color,
      size,
    });
    return response.status(201).json(galaxy);
  }
}

export { CreateGalaxyController };
