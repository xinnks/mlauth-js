import { $fetch } from "ohmyfetch"

class mlAuth {
  constructor({ client, secret }) {
    const missingKeys = ["client", "secret"].filter(
      (key) => !Object.keys(arguments[0]).includes(key)
    )
    if (!client || !secret)
      throw new Error(`You need to add app keys. Missing [${missingKeys}]`)

    this.endpoint = "https://api.mlauth.ml"
    this.client = $fetch.create({
      baseURL: this.endpoint,
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${btoa(`${client}:${secret}`)}`,
      },
    })
  }

  /**
   * @description Makes a login request for app client
   * @param {String} email
   */
  async login(email) {
    if (!email) throw new Error("Email is missing")
    if(!/^\b[\w.-]+@[\w.-]+\.\w{2,4}\b$/gi.test(email)) throw new Error("Use a valid email")
    try {
      return this.client(`/ml/login`, {
        body: { email },
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  /**
   * @description Verifies a login request token from the magic link
   * @param {String} token
   */
  async verify(token) {
    if (!token) throw new Error("Token is missing")
    try {
      return this.client(`/ml/verify`, {
        body: { token },
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default mlAuth
