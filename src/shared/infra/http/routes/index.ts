import { Router } from "express";
import { galaxyRoutes } from "./galaxy.routes";


const router = Router();

router.use("/galaxy", galaxyRoutes);

export { router };
