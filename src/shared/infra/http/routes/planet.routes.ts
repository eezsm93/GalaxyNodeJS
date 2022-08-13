import { CreatePlanetController } from "@modules/planets/useCases/createPlanet/CreatePlanetController";
import { DeletePlanetController } from "@modules/planets/useCases/deletePlanet/DeletePlanetController";
import { ActiveOrDesactivePlanetController } from "@modules/planets/useCases/isActivePlanet/ActiveOrDesactivePlanetController";
import { ListPlanetByIdController } from "@modules/planets/useCases/listPlanetById/ListPlanetByIdController";
import { ListAllPlanetsController } from "@modules/planets/useCases/listPlanets/ListAllPlanetsController";
import { UpdatePlanetController } from "@modules/planets/useCases/updatePlanet/UpdatePlanetController";
import { Router } from "express";

const planetRoutes = Router();

let createPlanetController = new CreatePlanetController();
let listAllPlanetsController = new ListAllPlanetsController();
let listPlanetById = new ListPlanetByIdController();
let updatePlanetController = new UpdatePlanetController();
let activeOrDesactivePlanetsController =
  new ActiveOrDesactivePlanetController();
let deletePlanetController = new DeletePlanetController();

planetRoutes.post("/", createPlanetController.handle);
planetRoutes.get("/", listAllPlanetsController.handle);
planetRoutes.get("/:id", listPlanetById.handle);
planetRoutes.put("/", updatePlanetController.handle);
planetRoutes.put(
  "/activeOrDesactive/:id",
  activeOrDesactivePlanetsController.handle,
);
planetRoutes.delete("/:id", deletePlanetController.handle);

export { planetRoutes };
