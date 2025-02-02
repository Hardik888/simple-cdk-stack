import { ApiGatewayStackProps } from './stack-config-types'

const environmentConfig: ApiGatewayStackProps = {
  tags: {
    Developer: 'Hardik Upadhyay',
    Application: 'NewGateway',
  },
  lambda: {
    name: 'demo-resolver',
    desc: 'Lambda resolver used for Api Gateway  ',
    memory: 256,
    timeout: 30,
  },
  api: {
    name: 'demo-rest-api',
    desc: 'Rest Api Gateway used for Api Gateway  ',
    modelName: 'DemoModel',
    rootResource: 'v1',
  },
  usageplan: {
    name: 'demo-usage-plan',
    desc: 'Usage plan used for Api Gateway ',
    limit: 100, // per day
    rateLimit: 20,
    burstLimit: 10,
  },
  apiKey: {
    name: 'demo-api-key',
    desc: 'Api Key used for Api Gateway  ',
  },
  validators: {
    bodyValidator: {
      requestValidatorName: 'demo-body-validator',
      validateRequestBody: true,
      validateRequestParameters: false,
    },
    paramValidator: {
      requestValidatorName: 'demo-param-validator',
      validateRequestBody: false,
      validateRequestParameters: true,
    },
    bodyAndParamValidator: {
      requestValidatorName: 'demo-body-and-param-validator',
      validateRequestBody: true,
      validateRequestParameters: true,
    },
  },
}

export default environmentConfig
