import * as cdk from "aws-cdk-lib";
import * as ddb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from "path";

import { Construct } from "constructs";
import { IAwsBackendStackProps } from "../bin/types";

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: IAwsBackendStackProps) {
    super(scope, id, props);

    const visitorTable = new ddb.Table(this, "Visitors", {
      tableName: props.dynamodb.visitorTable.name,
      partitionKey: {
        name: props.dynamodb.visitorTable.partitionKey,
        type: ddb.AttributeType.STRING,
      },
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // change for production
    });

    const getVisitorFunction = new nodejs.NodejsFunction(
      this,
      "GetVisitorFunction",
      {
        functionName: props.functionName,
        entry: path.join(__dirname, `/../functions/get-visitor.ts`),
        handler: "handler",
        bundling: { minify: true },
        runtime: lambda.Runtime.NODEJS_16_X,
        timeout: cdk.Duration.minutes(2),
        environment: {
          TABLE_NAME: visitorTable.tableName,
        },
        logRetention: cdk.aws_logs.RetentionDays.TWO_MONTHS,
      }
    );

    visitorTable.grantReadWriteData(getVisitorFunction);

    const getVisitorFunctionUrl = getVisitorFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedOrigins: ["*"],
      },
    });

    new cdk.CfnOutput(this, "GetVisitorFunctionUrl", {
      value: getVisitorFunctionUrl.url,
    });
  }
}
