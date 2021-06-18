const Router = require('express-promise-router');

const controller = require('./moviesController');

module.exports = () => {
    const router = Router({ mergeParams: true });
    router.route('/create').post(controller.createNewMovie);

    return router;
}