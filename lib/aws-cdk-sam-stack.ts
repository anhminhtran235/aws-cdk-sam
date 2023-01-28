import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";

import * as path from 'path';
import { connectToDb } from '../database/connectToDb';

import { User } from '../database/entities/User';
import { Post } from '../database/entities/Post';
import { getDefaultHandler } from '../api-gateways/utils/defaultHandler';
import { addUserGateways } from '../api-gateways/userGateway';

export class AwsCdkSamStack extends cdk.Stack {
  async test() {
    try {
      await connectToDb();

      const user = await User.findOneBy({email: 'minh@gmail.com'});

      if (!user) {
        throw new Error('User not exists');
      }

      const post = Post.create({
        content: 'This is my first post',
        user
      });

      await post.save();
    } catch (error) {
      console.log(error);
    }
  }

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // this.test();

    const rootApiGateway = new LambdaRestApi(this, 'root-api-gateway', {
      handler: getDefaultHandler(this),
      proxy: false
    });

    addUserGateways(rootApiGateway, this);
  }
}
