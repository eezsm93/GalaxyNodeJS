import { validateEntity } from "@shared/validation/validator";
import { v4 as uuidV4 } from "uuid";
import { PlanetRules } from "./PlanetRules";

interface IPlanet {
  planetId?: string;
  name: string;
  description: string;
  size: number;
}

class Planet {
  planetId: string;
  name: string;
  description: string;
  size: number;

  constructor(props: IPlanet) {
    if (!props.planetId) {
      props.planetId = uuidV4();
    }

    validateEntity(props, PlanetRules);
    Object.assign(this, props);
  }
}

export { Planet };
