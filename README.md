# mlauth-js

The javascript client for [mlAuth](https://github.com/xinnks/mlAuth).

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
// ESM / Typescript
import mlAuth from 'mlauth-js'

// CommonJS
const mlAuth = require('mlauth-js')
```

## Start Authenticating Users

### Innitiate a new instance of mlAuth

```js
const client = new mlAuth({
	client: APP_KEY,
	secret: APP_SECRET
})
```

### Make Login Requests (send magic login links to users)

```sh
const response = await mlAuth().login(EMAIL)
```

## Authenticate tokens from magic links
Obtain the **token** query from your app's __*callbackUrl*__, and pass it in the verify method.

```sh
const response = await mlAuth().verify(token)
```

Both endpoints above resolve with standard HTTP responses.
Additional information is provided inside a `message` property inside the data Object for all responses that resolve with 200 status codes.