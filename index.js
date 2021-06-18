const { Sequelize } = require('sequelize');

const { Movie } = require('./model');


// const connectToDatabase = async () => {
//     // Option 2: Passing parameters separately (other dialects)
//     // const sequelize = new Sequelize('database', 'username', 'password', {

//     const sequelize = new Sequelize('postgres', 'postgres', 'Optech#2020', {
//         host: 'localhost',
//         dialect: 'postgres'
//     });

//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

const createNewMovie = async () => {
    const movieRecord = {
        movieId: 'MV-789789',
        title: 'Tenet',
        year: 2020,
        length: '120min',
        actors: 'Robert'
    }

    const result = await Movie.create(movieRecord);

    console.log(result.toJSON());
}

createNewMovie();

// npm i -S sequelize pg pg-hstore
