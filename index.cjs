const { $fetch } = require("ohmyfetch")

class mlAuth {
  /**
   * @param {Object} keys - App keys
   * @param {Object} keys.client
   * @param {Object} keys.secret
   * @param {Boolean} throwErrors
   */
  constructor({ client, secret }, throwErrors = false) {
    this.throwErrors = throwErrors
    const missingKeys = ["client", "secret"].filter(
      (key) => !Object.keys(arguments[0]).includes(key)
    )
    if (!client || !secret)
      throw new Error(`You need to add app keys. Missing [${missingKeys}]`)

    const keys = Buffer.from(`${client}:${secret}`, "utf8")
    this.config = {
      baseURL: "https://api.mlauth.ml",
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${keys.toString("base64")}`,
      },
    }
    this.client = $fetch
  }

  /**
   * @description Makes a login request for app client
   * @param {String} email
   */
  async login(email) {
    if (!email) throw new Error("Email is missing")
    if (!/^\b[\w.-]+@[\w.-]+\.\w{2,4}\b$/gi.test(email))
      throw new Error("Use a valid email")
    try {
      return this.client(`/ml/login`, {
        ...this.config,
        body: { email },
      })
    } catch (error) {
      if (this.throwErrors) throw new Error(error)
      return error
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
        ...this.config,
        body: { token },
      })
    } catch (error) {
      if (this.throwErrors) throw new Error(error)
      return error
    }
  }
}

module.exports = mlAuth
