import { StackProps } from "aws-cdk-lib";

interface ITable {
  name: string;
  partitionKey: string;
}

export interface IAwsBackendStackProps extends StackProps {
  functionName: string;
  dynamodb: {
    visitorTable: ITable;
  };
}
