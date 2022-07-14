import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class GalaxyRules {
  @IsNotEmpty()
  @IsString()
  galaxyId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  size: number;
}

export { GalaxyRules };
