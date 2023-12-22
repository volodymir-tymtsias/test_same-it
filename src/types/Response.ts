import { Department } from "./Department";

export interface Response {
  success: boolean;
  data: Department[];
  errors: string[];
  warnings: string[];
  info: {
    totalCount: number;
  },
  messageCodes: [];
  errorCodes: [];
  warningCodes: [];
  infoCodes: [];
}
