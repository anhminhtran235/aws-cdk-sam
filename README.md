# AWS CDK + SAM prototype

Feel free to copy the entire repo if it's helpful lol

## Prerequisite

- nodejs 18
- SAM CLI, CDK CLI, AWS CLI
- Docker (If you're using Windows, remember to switch to Linux distribution. Also, if you're on Windows and your Docker won't start, try installing an older version)

## Some useful commands:

- When you first clone this repo I think you need to run `cdk bootstrap`, `cdk synth`, and then `cdk deploy` so your env has all the files
- Run all endpoints: `sam local start-api -t .\cdk.out\AwsCdkSamStack.template.json`
- Run a specific endpoint with custom payload: `sam local invoke -t .\cdk.out\AwsCdkSamStack.template.json createUserHandler -e .\events\createUserPayload.json`

Run CDK locally docs: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-cdk-testing.html

## Useful resources:

- Run Lambda Locally with CDK: https://www.youtube.com/watch?v=ku80wC3QqwQ
- This guy organizes his files pretty well: https://www.youtube.com/watch?v=ezrxi0wkcHY

## Some notes:

- I haven't figured out debugging. I added `launch.json`, and was able to hit a breakpoint. However the breakpoint wasn't the one I set, but was in some weird file. Here's some resources that might be helpful: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-debugging.html and https://youtu.be/FMsNsSHhRC8?t=272
- Deploying this is pretty easy. Iirc you just need to run cdk deploy and everything will be deployed for you. You can go to your lambdas on AWS to check that new lambda is added. Note I haven't been able to invoke lambda through API Gateway yet. I'm having 403 forbidden error. Probably just need to set up the authorization right
