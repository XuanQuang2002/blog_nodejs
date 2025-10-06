import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url';
import { route } from './routes/index.js';
import { connectDB } from './config/monogoConfigDB.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000

connectDB().catch(console.dir);
// Static files
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded())
app.use(express.json())

var pathToPartials = path.join(__dirname, 'resources', 'views', 'partials')
var pathToViews = path.join(__dirname, 'resources', 'views')

app.engine('hbs', engine({
    extname: '.hbs',
    partialsDir: pathToPartials,
}))
app.set('view engine', 'hbs')

// Set views files location
app.set('views', pathToViews)

// HTTP loggers
app.use(morgan('dev'))

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
