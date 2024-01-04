import { Department } from "./Department";
import { StatusDocument } from "./StatusDocument";

export interface Response {
  success: boolean;
  errors: string[];
  warnings: string[];
}

export interface ResponseDepartments extends Response{
  data: Department[];
  info: {
    totalCount: number;
  },
}

export interface ResponseStatusDocument extends Response{
  data: StatusDocument[];
}


