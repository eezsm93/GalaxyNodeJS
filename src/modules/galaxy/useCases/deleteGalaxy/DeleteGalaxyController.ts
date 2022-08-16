import { GalaxyRepository } from "@modules/galaxy/infra/repository/prisma/GalaxyRepository";
import { Request, Response } from "express";
import { DeleteGalaxyUseCase } from "./DeleteGalaxyUseCase";

class DeleteGalaxyController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const galaxyRepository = new GalaxyRepository();
    const deletePlanetUseCase = new DeleteGalaxyUseCase(galaxyRepository);

    await deletePlanetUseCase.execute({ id });

    return response.status(201).json({});
  }
}

export { DeleteGalaxyController };
