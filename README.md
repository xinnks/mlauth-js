# mlauth

The javascript client for the mlAuth authentication service

### install

```sh
$ npm i mlauth
```


### Initiate an instance of mlAuth

```sh
const mlAuth = require('xns-seek-bar')

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