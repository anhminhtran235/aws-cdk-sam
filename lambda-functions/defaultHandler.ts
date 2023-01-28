import { APIGatewayEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
    console.log("Received event: ", event);

    return {
      statusCode: 200,
      body: JSON.stringify({message: 'Default Handler'})
  }
};