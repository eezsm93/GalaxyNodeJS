import { GalaxyRepository } from "@modules/galaxy/infra/repository/prisma/GalaxyRepository";
import { Request, Response } from "express";
import { ListGalaxyUseCase } from "./ListGalaxyUseCase";

class ListGalaxyController {
  async handle(request: Request, response: Response) {
    const galaxyRepository = new GalaxyRepository();
    const listGalaxyUseCase = new ListGalaxyUseCase(galaxyRepository);

    const all = await listGalaxyUseCase.excute();

    return response.status(201).json(all);
  }
}

export { ListGalaxyController };
