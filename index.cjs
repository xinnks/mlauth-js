const { $fetch } = require("ohmyfetch")

class mlAuth {

	constructor({key, secret}){
		if(!key || !secret) throw new Error("You need to add app keys")
		const keys = Buffer.from(`${key}:${secret}`, "utf8")
		this.config = {
			baseURL: "https://api.mlauth.ml",
			method: 'POST',
			headers: {
				Accept: 'application/json',
				"Authorization": `Basic ${keys.toString("base64")}`,
			},
		}
		this.client = $fetch
	}

	/**
	 * makes a login request for app client
	 */
	async login(email){
		if(!email) throw new Error("Email is missing")
		try {
			return this.client(`/ml/login`, {
				...this.config,
				body: { email }
			})
		} catch (error) {
			throw new Error(error)
		}
	}

	/**
	 * Verifies a login request token from the magic link
	 */
	async verify(token){
		if(!token) throw new Error("Token is missing")
		try {
			return this.client(`/ml/verify`, {
				...this.config,
				body: { token }
			})
		} catch (error) {
			throw new Error(error)
		}
	}
}

module.exports = mlAuth
