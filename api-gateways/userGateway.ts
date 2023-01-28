import { LambdaIntegration, LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import {Runtime} from "aws-cdk-lib/aws-lambda";
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import { Stack } from 'aws-cdk-lib'
import * as path from 'path';

export const addUserGateways = (rootGateway: LambdaRestApi, stack: Stack) => {
  const userGateway = rootGateway.root.addResource('user');
  const user = userGateway.addResource('{userId}');
  
  // POST /user
  userGateway.addMethod('POST', constructCreateUserHandler(stack));

  // PUT /user/{userId}
  user.addMethod('PUT', constructUpdateUserHandler(stack));
}

const constructCreateUserHandler = (stack: Stack): LambdaIntegration => {
  const createUserHandler = new NodejsFunction(stack, "createUserHandler", {
    runtime: Runtime.NODEJS_18_X,
    entry: path.join(__dirname, `../lambda-functions/user/createUser.ts`),
    handler: "handler",
  });

  return new LambdaIntegration(createUserHandler);
}

const constructUpdateUserHandler = (stack: Stack): LambdaIntegration => {
  const updateUserHandler = new NodejsFunction(stack, "updateUserHandler", {
    runtime: Runtime.NODEJS_18_X,
    entry: path.join(__dirname, `../lambda-functions/user/updateUser.ts`),
    handler: "handler",
  });

  return new LambdaIntegration(updateUserHandler);
}