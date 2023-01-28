import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { addUserGateways } from '../api-gateways/userGateway';

export class AwsCdkSamStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const rootApiGateway = new RestApi(this, 'root-api-gateway', {
      restApiName: 'my-api',
      deploy: true
    });

    addUserGateways(rootApiGateway, this);
  }
}
