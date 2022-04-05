const pool = require("../models/index");
const carController = {};

carController.getAllPosts = function (req, res, next) {
  // get all posts from database
  
  pool.query("SELECT * FROM BlackforceprojectFunke", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("car", { carPosts: results.rows });
  });
};

carController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    `INSERT INTO BlackforceprojectFunke (MANUFACTURER, MODEL, COLOR, YEAR) VALUES ($1 , $2, $3, $4)`,
    [manufacturer, model, color, year],
    (error, results) => {
      if (error) {
        throw error;
      }
      return res.redirect("/car");
    }
  );
};

carController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  pool.query(
    "DELETE FROM BlackforceprojectFunke WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/car");
    }
  );
};

carController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM BlackforceprojectFunke WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("carEdit", { carPost: results.rows[0] });
    }
  );
};

carController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE BlackforceprojectFunke SET manufacturer = $1, model = $2, color = $3, year = $4 WHERE id = $5",
    [manufacturer, model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/car");
    }
  );
};

module.exports = carController;
