import { APIGatewayProxyEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';
import { connectToDb } from '../../database/connectToDb';
import { User } from '../../database/entities/User';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context) => {
    try {
      await connectToDb();

      console.log(event);
      console.log(context);
  
      return {
        statusCode: 200,
        body: JSON.stringify(event)
      }  
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({error: 'Something went wrong'})
      }
    }
};
