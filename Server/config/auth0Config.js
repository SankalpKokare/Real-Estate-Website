import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-raerr15k3mtpeuii.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export {jwtCheck}