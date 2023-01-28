import { APIGatewayProxyHandler, Context } from 'aws-lambda';
import { connectToDb } from '../../database/connectToDb';
import { User } from '../../database/entities/User';

export const handler: APIGatewayProxyHandler = async (event: any, context: Context) => {
    try {
      await connectToDb();
      
      const {name, email, cardNumber, balance} = event;

      const emailExists = await User.findOneBy({email});
      if (emailExists) {
        return {
          statusCode: 400,
          body: JSON.stringify({message: `Email ${email} already exists`})
        }  
      }

      const user = User.create({name, email, cardNumber, balance});
      await user.save();
  
      return {
        statusCode: 200,
        body: JSON.stringify(user)
      }  
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({error: 'Something went wrong'})
      }
    }
};
