const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

/* ================= MULTER STORAGE ================= */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, path.join(__dirname, "uploads"));

  },

  filename: (req, file, cb) => {

    cb(null, Date.now() + "-" + file.originalname);

  }

});

const upload = multer({ storage });

/* ================= MYSQL CONNECTION ================= */

const db = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "Dellpass@123",

  database: "arshithcareers"

});

db.connect((err) => {

  if (err) {

    console.log(err);

  }

  else {

    console.log("MySQL Connected");

  }

});
//* ================= APPLY ROUTE ================= */

app.post(
  "/apply",
  upload.single("resume"),
  (req, res) => {

    console.log(req.body);

    const {

      fullname,
      email,
      phone,
      role,
      duration,
      qualification,
      status,
      about

    } = req.body;

    const resume = req.file
      ? req.file.filename
      : "";

    const sql = `
      INSERT INTO internship_applications
      (
        fullname,
        email,
        phone,
        role,
        duration,
        qualification,
        status,
        about,
        resume
      )
      VALUES (?,?,?,?,?,?,?,?,?)
    `;

    db.query(

      sql,

      [
        fullname,
        email,
        phone,
        role,
        duration,
        qualification,
        status,
        about,
        resume
      ],

      (err, result) => {

        if (err) {

          console.log("DATABASE ERROR:");
          console.log(err);

          res.status(500).send("Database Error");

        }

        else {

          res.send("Application Submitted Successfully");

        }

      }

    );

  }
);
/* ================= SERVER ================= */
app.listen(5000, () => {

  console.log("Server Running on Port 5000");

});