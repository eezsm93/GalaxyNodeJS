import { CreateGalaxyController } from "@modules/galaxy/useCases/createGalaxy/CreateGalaxyController";
import { DeleteGalaxyController } from "@modules/galaxy/useCases/deleteGalaxy/DeleteGalaxyController";
import { ListGalaxyController } from "@modules/galaxy/useCases/listGalaxy/ListGalaxyController";
import { Router } from "express";

const galaxyRoutes = Router();

let createGalaxyController = new CreateGalaxyController();
let listGalaxyController = new ListGalaxyController();
let deleteGalaxyController = new DeleteGalaxyController();

galaxyRoutes.post("/", createGalaxyController.handle);
galaxyRoutes.get("/", listGalaxyController.handle);
galaxyRoutes.delete("/:id", deleteGalaxyController.handle);

export { galaxyRoutes };
