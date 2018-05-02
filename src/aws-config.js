// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
var aws_app_analytics = 'enable';
var aws_cloud_logic = 'enable';
var aws_cloud_logic_custom = [{"id":"wqcqo30nnd","name":"test-kazan","description":"","endpoint":"https://wqcqo30nnd.execute-api.us-west-2.amazonaws.com/Development","region":"us-west-2","paths":["/items","/items/123"]}];
var aws_cognito_identity_pool_id = 'us-west-2:37b00cd5-1fd4-4f24-8f4b-accbffe51d95';
var aws_cognito_region = 'us-west-2';
var aws_content_delivery = 'enable';
var aws_content_delivery_bucket = 'testkanza-hosting-mobilehub-1152812047';
var aws_content_delivery_bucket_region = 'us-west-2';
var aws_content_delivery_cloudfront = 'enable';
var aws_content_delivery_cloudfront_domain = 'd2k9stwatyq3ux.cloudfront.net';
var aws_dynamodb = 'enable';
var aws_dynamodb_all_tables_region = 'us-west-2';
var aws_dynamodb_table_schemas = [{"tableName":"testkanza-mobilehub-1152812047-groups","attributes":[{"name":"userId","type":"S"},{"name":"creater","type":"S"},{"name":"group_alert_bot","type":"S"},{"name":"group_id","type":"S"},{"name":"group_image","type":"S"},{"name":"group_name","type":"S"},{"name":"group_notify_bot","type":"S"},{"name":"group_private","type":"N"},{"name":"mt4_account","type":"N"},{"name":"mt4_password","type":"S"},{"name":"mt4_server","type":"S"},{"name":"notify_object_type","type":"S"},{"name":"notify_re_time","type":"N"},{"name":"notify_value","type":"N"}],"indexes":[],"region":"us-west-2","hashKey":"userId"},{"tableName":"testkanza-mobilehub-1152812047-users","attributes":[{"name":"userId","type":"S"},{"name":"email","type":"S"},{"name":"first_name","type":"S"},{"name":"language","type":"S"},{"name":"last_name","type":"S"},{"name":"password","type":"S"},{"name":"phone","type":"S"},{"name":"ref_id","type":"S"},{"name":"telegram_id","type":"S"},{"name":"username","type":"S"}],"indexes":[],"region":"us-west-2","hashKey":"userId"},{"tableName":"testkanza-mobilehub-1152812047-user_group_role","attributes":[{"name":"userId","type":"S"},{"name":"expiry_date","type":"S"},{"name":"group_alias","type":"S"},{"name":"group_id","type":"S"},{"name":"ref_id","type":"S"},{"name":"role_id","type":"S"},{"name":"symbol_master","type":"S"}],"indexes":[],"region":"us-west-2","hashKey":"userId"},{"tableName":"testkanza-mobilehub-1152812047-role","attributes":[{"name":"userId","type":"S"},{"name":"role_id","type":"S"},{"name":"role_name","type":"S"}],"indexes":[],"region":"us-west-2","hashKey":"userId"}];
var aws_mobile_analytics_app_id = '7317e81595154a6995bebc44116b9e15';
var aws_mobile_analytics_app_region = 'us-east-1';
var aws_project_id = '8eb2984a-88bf-4fa9-8225-5206ca4cbee1';
var aws_project_name = 'test-kanza';
var aws_project_region = 'us-west-2';
var aws_resource_bucket_name = 'testkanza-deployments-mobilehub-1152812047';
var aws_resource_name_prefix = 'testkanza-mobilehub-1152812047';
var aws_sign_in_enabled = 'enable';
var aws_user_pools = 'enable';
var aws_user_pools_id = 'us-west-2_YSzB91BvM';
var aws_user_pools_web_client_id = '5j8b8cag3qfg6dg2u77780kn0v';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
  });
AWS.config.update({customUserAgent: 'MobileHub v0.1'});
