import { APIGatewayEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';
import { connectToDb } from '../../database/connectToDb';
import { User } from '../../database/entities/User';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent, context: Context) => {
    try {
      // console.log(event);
      console.log(JSON.stringify(event));
      
      // console.log(JSON.parse(event.body!));
      // console.log(context);
      
      // await connectToDb();
      // const user2 = User.create({
      //   name: 'dfs',
      //   email: 'kldfsjdlsf',
      //   cardNumber: '1234567891',
      //   balance: 2332
      // });

      // await user2.save();

      // const {name, email, cardNumber, balance} = JSON.parse(event.body!).body;
      // const emailExists = await User.findOneBy({email}); 
      // if (emailExists) {
      //   return {
      //     statusCode: 400,
      //     body: JSON.stringify({message: `Email ${email} already exists`})
      //   }  
      // }

      // const user = User.create({name, email, cardNumber, balance});
      // await user.save();
  
      return {
        statusCode: 200,
        body: JSON.stringify('user2')
      }  
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({error: 'Something went wrong'})
      }
    }
};
