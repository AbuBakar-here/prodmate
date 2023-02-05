import express, { application } from 'express'
import { ChatGPTAPIBrowser } from 'chatgpt'
import { preprocessResponse, fetchImages } from './utils/utility.js'
import path from 'path'
import hbs from 'hbs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'


// Constants
const app = express()
const port = process.env.PORT || 3000
const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
let conv_id = false
let msg_id = false

// Define Paths for Express config
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicPath = path.join(__dirname, '../public/')
const viewsPath = path.join(__dirname, '../templates/views/')
const partialsPath = path.join(__dirname, '../templates/partials/')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)   // defualt it will search for views folder
app.set('env', 'development')
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicPath))



app.get('/', async (req, res) => {  // future suggestion, can use different route for initializing sesssion and set this as homepage

    try {
        await api.initSession()
        console.log("session initialized....")
        res.status(301).redirect('/product-description-generator')
    } catch (e) { res.status(400).send(e) }
    
})

app.get("/product-description-generator", (req, res) => {
    res.render('index')
})

app.post('/asks', async (req, res) => {
    console.log(req.body.question)
    let question = `give me the description, price and category of ${req.body.question} Make sure your description is in list format with period at the end of every sentence and make sure price is in dollars if not accurate then give an estimate price and don't give extra information when answering about price and there should be "\n" between answers of description, price and category.`
    console.log(msg_id)
    try {
        // if (conv_id && msg_id) {
        //     var result = await api.sendMessage(question, {
        //         conversationId: conv_id,
        //         messageId: msg_id
        //     })
        // } else {
        //     var result = await api.sendMessage(question)
        //     conv_id = result.conversationId
        //     msg_id = result.messageId
        // }
        var result = await api.sendMessage(question)
        var imgSrc = await fetchImages(req.body.question)
        console.log(`question should be answered by now: \n${result.response}`)

    } catch (e) { console.log(e);res.status(400).send(e) }    

    let response = preprocessResponse(result.response)
    
    res.status(200).send({imgSrc, ...response})
})

// app.post("/get-image", async (req, res) => {
//     console.log(req.body.productName)
//     const imgSrc = await fetchImages("Samsung Galaxy S20")
//     console.log(imgSrc)
//     res.status(200).send({ imgSrc })
// })



app.listen(port, () => {
    console.log('Server is up on port ' + port +'!')
})