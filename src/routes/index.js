import newsRouter from './news.js';
import siteRouter from './site.js';

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    })

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}
export { route };