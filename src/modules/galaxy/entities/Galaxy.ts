import { v4 as uuidV4 } from "uuid";
import { validateEntity } from "../../../shared/validation/validator";
import { GalaxyRules } from "./GalaxyRules"

interface IGalaxy{
galaxyId?: string;
name: string;
description: string;
color: string;
size:number;
planets?: Array<any>;
}

class Galaxy {
galaxyId: string;
name: string;
description: string;
color: string;
size: number;
planets: Array<any>;

constructor(props: IGalaxy){
if(!props.galaxyId){
 props.galaxyId = uuidV4();
    }

validateEntity(props, GalaxyRules);
		Object.assign(this, props);
  }

}

export { Galaxy }