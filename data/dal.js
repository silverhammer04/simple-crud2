const {ObjectID, MongoClient} = require('mongodb');
const assert = require('assert');

const url = process.env.DB_URL;
const db_name = process.env.DB_NAME;
const col_name = process.env.COL_NAME;
const options = {
    useUnifiedTopology: true
}

const readMovies = () => {
    const iou = new Promise((resolve, reject) => {
    MongoClient.connect(url, options, (err, client) => {
        assert.equal(err, null);
        const db = client.db(db_name);
        const collection = db.collection(col_name);
        collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                resolve(docs);
                client.close();
            })
        });
    });
    return iou;
}

const readMovieByID = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);           
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.find({_id: new ObjectID(id)}).toArray((err, docs) => {
                assert.equal(err, null);
                resolve(docs[0]);
                client.close();
                })
            });
        });
    return iou;
}
const createMovie = (movie) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(movie, (err, result) => {
                assert.equal(err, null);
                resolve(result.ops[0]);
                client.close();
            })
        });
    });
    return iou;
}
const updateMovie = (id, movie) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findAndModify({ _id: new ObjectID(id)}, 
            null,
            {$set: {...movie}},
            {upsert: true},
            (err, result) => {
                assert.equal(err, null);
                readMovieByID(id)
                    .then(movie => resolve(movie))
                    .then(() => client.close ());
            })
        });
    });
    return iou;
}
const deleteMovie = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOneAndDelete({_id: new ObjectID(id) }, (err, result)=>{
                assert.equal(err, null);
                resolve(result,);
                client.close();
            });
        });
    });
  return iou;
};
module.exports = {
    readMovies,
    createMovie,
    updateMovie,
    deleteMovie
};