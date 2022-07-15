import { Galaxy } from "@modules/galaxy/entities/Galaxy";
import { validateEntity } from "@shared/validation/validator";
import { v4 as uuidV4 } from "uuid";
import { PlanetRules } from "./PlanetRules";

interface IPlanet {
  planetId?: string;
  name: string;
  description: string;
  size: number;
  galaxy_id: string;
}

class Planet {
  planetId: string;
  name: string;
  description: string;
  size: number;
  galaxy_id: Galaxy;

  constructor(props: IPlanet) {
    if (!props.planetId) {
      props.planetId = uuidV4();
    }


    validateEntity(props, PlanetRules);
    Object.assign(this, props);
  }
}

export { Planet };
