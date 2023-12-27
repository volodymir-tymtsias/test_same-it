import { ResponseStatusDocument } from "../types/Response";
import { client } from "./fetchClient";

export const getStatusDocument = (data: string) => {
  const newData = {
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: data
        }
      ]
    }
  };

  return client.post<ResponseStatusDocument>('', newData);
};
