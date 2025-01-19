#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { ApiGatewayStack } from '../lib/backend-stack'
import environmentConfig from './stack-config'

const app = new cdk.App()
new ApiGatewayStack(app, 'ApiGatewayStack', environmentConfig)
