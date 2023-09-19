import { IAwsBackendStackProps } from "./types";

export const stackConfig: IAwsBackendStackProps = {
  functionName: "getVisitor",
  dynamodb: {
    visitorTable: {
      name: "visitors",
      partitionKey: "id",
    },
  },
};
