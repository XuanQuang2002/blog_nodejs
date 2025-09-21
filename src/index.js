import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000

// Static files
app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', engine({
    extname: '.hbs',
}))
app.set('view engine', 'hbs')

// Set views files location
var pathToViews = path.join(__dirname, 'resources', 'views')
app.set('views', pathToViews)

var pathToPartials = path.join(__dirname, 'resources', 'views', 'partials')
app.set('partials', pathToPartials)

// HTTP loggers
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
