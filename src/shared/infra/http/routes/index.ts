import { Router } from "express";
import { galaxyRoutes } from "./galaxy.routes";
import { planetRoutes } from "./planet.routes";

const router = Router();

router.use("/galaxy", galaxyRoutes);
router.use("/planet", planetRoutes);

export { router };
