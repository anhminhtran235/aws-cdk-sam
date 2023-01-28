import { APIGatewayEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Operation not supported'})
  }
};