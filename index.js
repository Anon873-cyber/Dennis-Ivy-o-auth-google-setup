import express, { response } from 'express'
import cookieParser from 'cookie-parser'
import createAppwriteClient from './appwrite.js'   
import { OAuthProvider } from 'node-appwrite'

const app = express()
const port = 5173
app.use(cookieParser());
app.get('/',(request,response) => { 

    response.send("Google o auth SSR deomo  ")
})
app.get('/auth',async (request,response) => { 
try {
    const {account } = await createAppwriteClient("admin")
    const redirectUrl = await account.createOAuth2Token(
        OAuthProvider.Google,
        "http://localhost:5173/success",
        "http://localhost:5173/fail"
    )
    response.json({redirectUrl})
} catch (error) {
    return response.json(error)
}

 });
app.get('/',(request,response) => { 

    response.send("Google o auth SSR deomo  ")
})
app.get('/auth',async (request,response) => { 
try {
    response.send("/Session successfully set")
} catch (error) {
    return response.json(error)
}

 });

app.get("/user",(request,response) => { 
    try {
        const sessionCookie = request.cookies.session;
        if (!sessionCookie) {
            return response.send("You are not authenticated , go login again ")
        }
        return response.json(sessionCookie)
    } catch (error) {
        response.json({error})
    }
 })

app.listen(port,() => { 
    console.log(`example app listening on port ${port}`)
 })