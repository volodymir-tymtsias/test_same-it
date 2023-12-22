import { DataFetchDepartment } from "../types/DataFetchDepartment";
import { Response } from "../types/Response";
import { client } from "./fetchClient";

export const getDepartments = (data: DataFetchDepartment) => {
  const newData = {
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
        CityName: data.city,
        Page: data.page,
        Limit: data.limit
    }
  };

  return client.post<Response>('', newData);
};
