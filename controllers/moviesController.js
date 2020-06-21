const db = require('../database/models');
const sequelize = db.sequelize;

let moviesController = {

    list: function (req, res, next) {
        db.Movies.findAll()
            .then((peliculas) => {
                res.render('movies', { peliculas: peliculas });
            })
    },
    detail: function (req, res, next) {
        db.Movies.findByPk(req.params.id)
            .then((pelicula) => {
                res.render('detail', { pelicula: pelicula })
            })
    },
    news: function (req, res, next) {
        db.Movies.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then((peliculas) => {
                res.render('newMovies', { peliculas: peliculas });
            })
    },
    recommended: function (req, res, next) {
        db.Movies.findAll({
            where: {
                rating: { [db.Sequelize.Op.gt]: 8 }
            }
        })
            .then((peliculas) => {
                res.render('recommended', { peliculas: peliculas });
            })
    },
    search: function (req, res, next) {
        let busqueda = req.body.busqueda;
        let order = req.body.order;
        switch (order) {
            case "date": db.Movies.findAll({
                where: {
                    title: { [db.Sequelize.Op.like]: '%' + busqueda + '%' }
                },
                order: [
                    ['release_date']
                ],
            }).then((peliculas) => {
                res.render('search', { peliculas: peliculas });
            })
                break;
            case "title": db.Movies.findAll({
                where: {
                    title: { [db.Sequelize.Op.like]: '%' + busqueda + '%' }
                },
                order: [
                    ['title']
                ],
            }).then((peliculas) => {
                res.render('search', { peliculas: peliculas });
            })
                break;
            case "awards": db.Movies.findAll({
                where: {
                    title: { [db.Sequelize.Op.like]: '%' + busqueda + '%' }
                },
                order: [
                    ['awards']
                ],
            }).then((peliculas) => {
                res.render('search', { peliculas: peliculas });
            })
                break;
            case "rating": db.Movies.findAll({
                where: {
                    title: { [db.Sequelize.Op.like]: '%' + busqueda + '%' }
                },
                order: [
                    ['rating']
                ],
            }).then((peliculas) => {
                res.render('search', { peliculas: peliculas });
            })
                break;
            case "length": db.Movies.findAll({
                where: {
                    title: { [db.Sequelize.Op.like]: '%' + busqueda + '%' }
                },
                order: [
                    ['length']
                ],
            }).then((peliculas) => {
                res.render('search', { peliculas: peliculas });
            })
                break;
            default: db.Movies.findAll({
                where: {
                    title: { [db.Sequelize.Op.like]: '%' + busqueda + '%' }
                },
                order: [
                    ['title']
                ],
            }).then((peliculas) => {
                res.render('search', { peliculas: peliculas });
            })
                break;
        }
    }
}


module.exports = moviesController;
