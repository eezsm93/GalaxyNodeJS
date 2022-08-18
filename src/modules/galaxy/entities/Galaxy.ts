import { Planet } from "@modules/planets/entities/Planet";
import { v4 as uuidV4 } from "uuid";
import { validateEntity } from "../../../shared/validation/validator";
import { GalaxyRules } from "./GalaxyRules";

interface IGalaxy {
  id?: string;
  name: string;
  description: string;
  color: string;
  size: number;
  type: string;
  photoBase64: string;
  Planet?: Array<Planet>;
}

class Galaxy {
  id: string;
  name: string;
  description: string;
  color: string;
  size: number;
  type: string;
  photoBase64: string;
  Planet?: Array<Planet>;

  constructor(props: IGalaxy) {
    if (!props.id) {
      props.id = uuidV4();
    }

    validateEntity(props, GalaxyRules);
    Object.assign(this, props);
  }
}

export { Galaxy };
