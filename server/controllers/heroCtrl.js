// Require DB
const db = require('./../massive');
// Show functions added to the db
// console.log(Object.keys(db));
// console.log(Object.keys(db.init));
// console.log(Object.keys(db.hero));


// Init Table if doesn't exist
db.init.createHeroTable([], (err, results) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Initialized Hero Table');
    }
});
// export Controller
module.exports = {
    create(req, res) {
        db.hero.create_hero([
            req.body.name,
            req.body.origin,
            req.body.hometown,
            req.body.imageUrl
        ], (err, results) => {
            if (err) {
                console.error(err);
                return res.send(err);
            } else {
                // console.log(results);
                return res.status(200).send(results);
            }
        });
    },
    getHeroes(req, res) {
        db.hero.read_heroes([], (err, results) => {
            if (err) {
                console.error(err);
                return res.send(err);
            } else {
                // console.log(results);
                return res.status(200).send(results);
            }
        });
    },
    getHero(req, res) {
        db.hero.read_hero([req.params.id], (err, results) => {
            if (err) {
                console.error(err);
                return res.send(err);
            } else {
                if (results.length === 0) {
                    return res.status(404).send('No Hero Found')
                }
                return res.status(200).send(results[0]);
            }
        });
    }
}
