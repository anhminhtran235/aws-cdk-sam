import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { getDefaultHandler } from '../api-gateways/utils/defaultHandler';
import { addUserGateways } from '../api-gateways/userGateway';

export class AwsCdkSamStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const rootApiGateway = new LambdaRestApi(this, 'root-api-gateway', {
      handler: getDefaultHandler(this),
      proxy: false,
    });

    addUserGateways(rootApiGateway, this);
  }
}
