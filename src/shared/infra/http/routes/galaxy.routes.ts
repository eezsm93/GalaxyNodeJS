import { CreateGalaxyController } from "@modules/galaxy/useCases/createGalaxy/CreateGalaxyController";
import { ListGalaxyController } from "@modules/galaxy/useCases/listGalaxy/ListGalaxyController";
import { Router } from "express";

const galaxyRoutes = Router();

let createGalaxyController = new CreateGalaxyController();
let listGalaxyController = new ListGalaxyController();

galaxyRoutes.post("/", createGalaxyController.handle);
galaxyRoutes.get("/", listGalaxyController.handle);

export { galaxyRoutes };
