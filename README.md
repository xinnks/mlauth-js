# mlauth-js

The javascript client for [mlAuth](https://github.com/xinnks/mlAuth).

[__built for the [Planetscape](https://planetscape.com) x [Hashnode](https://hashnode.com) Hackathon__]

## Quick Start

### install

```sh
# npm
npm i mlauth-js

# pnpm
pnpm add mlauth-js

# yarn
yarn add mlauth-js
```


### import

```js
// ESM
import mlAuth from 'mlauth-js'

// CommonJS
const mlAuth = require('mlauth-js')
```

## Start Authenticating Users

### Initiate a new mlAuth instance

```js
const client = new mlAuth({
	client: APP_CLIENT_KEY,
	secret: APP_SECRET_KEY
})
```

### Make Login Requests (send magic login links to users)

```sh
const response = await client.login(EMAIL)
```

### Authenticate magic links
Obtain the **token** passed as a query on the __*callbackUrl*__ you added while creating your app, and pass it as the only argument of the verify method.

```sh
const response = await client.verify(TOKEN)
```

Both instance return Promises that resolve as follows:
- Successful requests, return an Object with a __data__ and __message__ properties.
  ```js
    // Example:
    {
      data: {
        // magic link details
      },
      message: "Magic link created"
    }
  ```
- Failures, resolve with [ohmyfetch]()'s `FetchError` type. The error body is available on `error.data`.
  ```js
    // Example:
    FetchError: 401 Not Authorized
  ```


## Examples

Here are examples demonstrating how to use this package when authenticating users with [mlAuth](https://github.com/xinnks/mlAuth).
- [mlauth-fe-demo](https://github.com/xinnks/mlauth-fe-demo) - Vite + Vue.js
- [mlauth-be-demo](https://github.com/xinnks/mlauth-be-demo) - NodeJs + Express