import { ListGalaxyUseCase } from "./ListGalaxyUseCase";

class ListGalaxyController {
  constructor(private listGalaxyUseCase: ListGalaxyUseCase) {}

  async handle(request: Request, response: Response) {
    const all = this.listGalaxyUseCase.excute();

    return response.json(all);
  }
}

export { ListGalaxyController };
