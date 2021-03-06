define({ "api": [
  {
    "type": "get",
    "url": "/user/me",
    "title": "个人信息(info)",
    "description": "<p>个人信息</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n   \"id\": 4,\n   \"mem_name\": null,\n   \"mem_phone\": \"13350006666\",\n   \"mem_sex\": 1,\n   \"mem_IDnum\": null,\n   \"mem_edu\": null,\n   \"mem_school\": null,\n   \"mem_grade\": null,\n   \"mem_pic\": null,\n   \"mem_birth\": null,\n   \"mem_status\": 1,\n   \"mem_is_online\": 0,\n   \"mem_role\": 1,\n   \"created_at\": null,\n   \"updated_at\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/v1/AuthController.php",
    "groupTitle": "Auth",
    "name": "GetUserMe"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "登录(login)",
    "description": "<p>登录(login)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found 用户没有找到\n{\n  \"error\": \"UserNotFound\"\n}\n\n  HTTP/1.1 412 用户信息不完整\n{\n  'status_code'=>412,\n  'message'=>'User information is not complete'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/v1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostUserLogin"
  },
  {
    "type": "post",
    "url": "/user/refresh",
    "title": "刷新token(refresh token)",
    "description": "<p>刷新token(refresh token)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户旧的jwt-token, value已Bearer开头</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    token: 9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/v1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostUserRefresh"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "注册(register)",
    "description": "<p>注册(register)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repassword",
            "description": "<p>重复密码</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"phone\":\"13350002222\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 用户已注册\n{\n  'status_code'=>406,\n  'message'=>'User is registered'\n}\n\nHTTP/1.1 412 验证码错误\n{\n  'status_code'=>412,\n  'message'=>'Verification code error'\n}\n\nHTTP/1.1 412 两次输入的密码不一致\n{\n  'status_code'=>412,\n  'message'=>'Password error'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/v1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostUserRegister"
  }
] });
