
import { $fetch } from "ohmyfetch"

class mlAuth {

	constructor({key, secret}){
		if(!key || !secret) throw new Error("You need to add app keys")
		this.endpoint = "https://api.mlauth.ml"
		this.client = $fetch.create({
			baseURL: this.endpoint,
			method: 'POST',
			headers: {
		    Accept: 'application/json',
  			"Authorization": `Basic ${btoa(`${key}:${secret}`)}`
		  }
		})
	}

	/**
	 * makes a login request for app client
	 */
	async login(email){
		if(!email) throw new Error("Email is missing")
		try {
			return this.client(`/ml/login`, {
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
				body: { token }
			})
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default mlAuth