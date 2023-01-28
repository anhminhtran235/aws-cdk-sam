import {Runtime} from "aws-cdk-lib/aws-lambda";
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import { Stack } from 'aws-cdk-lib'
import * as path from 'path';

/**
 * This is used when an unimplemented endpoint is invoked
 */
export const getDefaultHandler = (stack: Stack): NodejsFunction => {
  return new NodejsFunction(stack, "defaultHandler", {
    runtime: Runtime.NODEJS_18_X,
    entry: path.join(__dirname, `./unsupported.ts`),
    handler: "handler",
  });
}