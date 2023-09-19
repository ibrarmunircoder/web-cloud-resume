import { Handler } from "aws-lambda";
import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

const REGION = "us-east-1";
const ddbClient = new DynamoDBClient({ region: REGION });

const tableName = process.env.TABLE_NAME;

export const handler: Handler = async (event, context) => {
  try {
    const getItemInput = {
      TableName: tableName,
      Key: marshall({
        id: "1",
      }),
    };
    const getVisitorCommand = new GetItemCommand(getItemInput);
    const visitor = await ddbClient.send(getVisitorCommand);

    if (!visitor || !visitor.Item) {
      return {
        status: "fail",
        statusCode: 404,
        message: "Visitor not found",
      };
    }
    const visitorItem = unmarshall(visitor.Item);
    const newNumberOfVisitors = parseInt(visitorItem.numberOfVisitors) + 1;
    const putItemInput = {
      TableName: tableName,
      Item: marshall({
        id: "1",
        numberOfVisitors: newNumberOfVisitors,
      }),
    };

    const updatedVisitorCommand = new PutItemCommand(putItemInput);
    await ddbClient.send(updatedVisitorCommand);

    return {
      statusCode: 200,
      body: JSON.stringify({
        ...visitorItem,
        numberOfVisitors: newNumberOfVisitors,
      }),
    };
  } catch (error: any) {
    console.log(error, "error");
    return {
      statusCode: 500,
      body: error?.message || "Something went wrong",
    };
  }
};
