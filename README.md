# EDirectInsure - WebAPI

This service is responsible for managing Web API routes.

### Package Dependency

- [hapi](https://github.com/hapijs/hapi)
- [hapi/inert](https://github.com/hapijs/inert)
- [hapi/joi](https://github.com/hapijs/joi)
- [hapi/vision](https://github.com/hapijs/vision)
- [hapi-auth-jwt2](https://github.com/dwyl/hapi-auth-jwt2)
- [hapi-cors-headers](https://github.com/Btime/hapi-cors-headers)
- [hapi-rate-limit](https://github.com/Btime/hapi-rate-limit)
- [hapi-swagger](https://github.com/Btime/hapi-swagger)
- [glob](https://github.com/isaacs/node-glob)
- [lodash](https://github.com/lodash/lodash)
- [seneca](https://github.com/senecajs/seneca)

### Environment Variables

```
APP_PORT

SECRET

AUTH_HOST
AUTH_PORT

USER_HOST
USER_PORT

PROJECT_HOST
PROJECT_PORT

TASK_HOST
TASK_PORT
```

### Usage

- [**Swagger Documentation**](http://localhost:3000/documentation)

### Tests

```bash
$ npm test
```

Run tests with Node debugger:

```bash
$ npm run test-debugger
```
