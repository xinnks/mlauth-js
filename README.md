# mlauth-js

The javascript client for the mlAuth authentication service

### install

```sh
$ npm i mlauth-js
```


### Initiate an instance of mlAuth

```sh
const mlAuth = require('mlauth-js')

const client = new mlAuth({
	client: APP_KEY,
	secret: APP_SECRET
})
```

## Make Login Requests
```sh
const response = await mlAuth().login(EMAIL)
```


## Authenticate tokens from magic links
```sh
const response = await mlAuth().verify(TOKEN)
```

Both endpoints above resolve with standard HTTP responses.
Additional information is provided inside a `message` property inside the data Object for all responses that resolve with 200 status codes.