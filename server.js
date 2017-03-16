const express = require('express')
const path = require('path')
const mongodb_uri = "mongodb://heroku_k9s39t5d:bojk81j26f6esq82no9vua0lsv@ds131890.mlab.com:31890/heroku_k9s39t5d"


//mongodb
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, '/public/index.html');
    const indexPathB = path.join(__dirname, '/public/loginb.html');
    const publicPath = express.static(path.join(__dirname, '/public'));
    

    app.use('/public', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('/login_A', function (_, res) { res.sendFile(indexPath) });    
    app.get('/login_B', function (_, res) { res.sendFile(indexPathB) });
    
    //Mongodb
    app.use(bodyParser.json());
    var db;

    mongodb.MongoClient.connect(mongodb_uri, function (err, database) {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      // Save database object from the callback for reuse.
      db = database;
      console.log("Database connection ready");

    });

    // CONTACTS API ROUTES BELOW

    // Generic error handler used by all endpoints.
    function handleError(res, reason, message, code) {
      console.log("ERROR: " + reason);
      res.status(code || 500).json({"error": message});
    }

    /*  "/api/contacts"
    *    GET: finds all contacts
    *    POST: creates a new contact
    */

    app.get("/api/contacts", function(req, res) {
    });

    app.post("/api/contacts", function(req, res) {
    });

    /*  "/api/contacts/:id"
    *    GET: find contact by id
    *    PUT: update contact by id
    *    DELETE: deletes contact by id
    */

    app.get("/api/contacts/:id", function(req, res) {
    });

    app.put("/api/contacts/:id", function(req, res) {
    });

    app.delete("/api/contacts/:id", function(req, res) {
    });

    return app;
  }
}
