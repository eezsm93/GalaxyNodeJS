import { CreateGalaxyController } from "@modules/galaxy/useCases/createGalaxy/CreateGalaxyController";
import { Router } from "express";


const galaxyRoutes = Router();

let createGalaxyController = new CreateGalaxyController();

galaxyRoutes.post("/", createGalaxyController.handle)


export { galaxyRoutes }