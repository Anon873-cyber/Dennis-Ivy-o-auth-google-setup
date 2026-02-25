import express, { response } from 'express'
import cookieParser from 'cookie-parser'
import createAppwriteClient from './appwrite.js'
import { OAuthProvider } from 'node-appwrite'


const app = express()
const port = 5173
app.use(cookieParser());
app.get('/', (request, response) => {

    response.send("Google o auth SSR deomo  ")
})
app.get('/auth', async (request, response) => {
    try {
        const { account } = await createAppwriteClient("admin")
        const redirectUrl = await account.createOAuth2Token(
            OAuthProvider.Google,
            "http://localhost:5173/success",
            "http://localhost:5173/fail"
        );

        const buttion = `<button> <a href=${redirectUrl}> Sign in with Google</a> </button>`
        response.set('content-type', 'text/html')

        return response.send(buttion)
    } catch (error) {
        return response.json(error)
    }

});
app.get('/', (request, response) => {

    response.send("Google o auth SSR deomo  ")
})
app.get('/success', async (request, response) => {
    try {
        const { userId, secret } = request.query
        console.log("userid:", userId)
        console.log("secret:", secret)
        const { account } = await createAppwriteClient("admin")

        const session = await account.createSession(userId, secret)
        response.cookie("session", session.secret, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            expires: new Date(session.expire),
            path: "/"
        })

        response.send("/Session successfully set")
    } catch (error) {
        console.log(error)
        return response.json({ error: error })
    }

});

app.get("/user", async (request, response) => {
    try {
        const sessionCookie = request.cookies.session;
        if (!sessionCookie) {
            return response.send("You are not authenticated , go login again ")
        }

        const {account} =  await createAppwriteClient("session", sessionCookie)
        console.log(account)
        const user = await account.get()
        return response.json({ user })
    } catch (error) {
        console.log(error)
        response.json({ error })
    }
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})