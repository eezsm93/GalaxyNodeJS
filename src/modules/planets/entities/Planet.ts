import { Galaxy } from "@modules/galaxy/entities/Galaxy";
import { validateEntity } from "@shared/validation/validator";
import { v4 as uuidV4 } from "uuid";
import { PlanetRules } from "./PlanetRules";

interface IPlanet {
  id?: string;
  name: string;
  description: string;
  size: number;
  Galaxy?: Galaxy;
  galaxy_id?: string;
}

class Planet {
  id: string;
  name: string;
  description: string;
  size: number;
  Galaxy?: Galaxy;
  galaxy_id?: string;

  constructor(props: IPlanet) {
    if (!props.id) {
      props.id = uuidV4();
    }

    // validateEntity(props, PlanetRules);
    Object.assign(this, props);
  }
}

export { Planet };
