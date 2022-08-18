import { Router } from "express";
import { galaxyRoutes } from "./galaxy.routes";
import { planetRoutes } from "./planet.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/galaxy", galaxyRoutes);
router.use("/planet", planetRoutes);
router.use("/user", userRoutes);

export { router };
