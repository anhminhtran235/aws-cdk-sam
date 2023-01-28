import { LambdaIntegration, LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import {Runtime} from "aws-cdk-lib/aws-lambda";
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import { Stack } from 'aws-cdk-lib'
import * as path from 'path';

export const addUserGateways = (rootGateway: LambdaRestApi, stack: Stack) => {
  const userGateway = rootGateway.root.addResource('user');
  userGateway.addMethod('POST', constructCreateUserHandler(stack));
}

const constructCreateUserHandler = (stack: Stack): LambdaIntegration => {
  const createUserHandler = new NodejsFunction(stack, "userHandler", {
    runtime: Runtime.NODEJS_18_X,
    entry: path.join(__dirname, `../lambda-functions/user/createUser.ts`),
    handler: "handler",
  });

  return new LambdaIntegration(createUserHandler);
}