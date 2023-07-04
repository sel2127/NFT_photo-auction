import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nft",
});

db.connect((error) => {
  if (error) {
    console.log("error connecting to database", error);
    return;
  } else {
    console.log("connected to database!");
  }
});

const ImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/imageFiles");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

const uploadImageFile = multer({ storage: ImageStorage }).single(
  "imageFilePath"
);
app.post("/uploadImage", async (req, res) => {
  uploadImageFile(req, res, (err) => {
    if (err) {
      console.log(err);
      return res
        .status(404)
        .json({ success: false, message: "Image Not Uploaded" });
    }
    return res.status(200).json({ success: true, filePath: res.req.file.path });
  });
});
app.post("/upload", (req, res) => {
  console.log(req.body);
  const {
    photoname,
    description,
    photographer,
    floorprice,
    auctiondate,
    imagePath,
  } = req.body;
  const image = imagePath;
  db.query(
    "INSERT INTO upload (photoname, description, photographer, floorprice, auctiondate, image) VALUES (?, ?, ?, ?, ?, ?)",
    [photoname, description, photographer, floorprice, auctiondate, image],
    (err, result) => {
      if (err) {
        console.log("error inserting info", err);
        res.json({ err: err });
        return;
      }
      res.json({ success: "Successfull" });
      console.log("Info added to database");
    }
  );
});

app.get("/fetchImageFiles", (req, res) => {
  console.log("entered");
  const sql = "select * from upload";
  db.query(sql, (err, result) => {
    if (err) return res.json("Error");
    console.log(result);
    return res.json({ result: result });
  });
});
app.post("/getOneFile", async (req, res) => {
  const { id } = req.body;

  const sql = `select * from upload where id=${id}`;
  db.query(sql, (err, result) => {
    if (err) return res.json("Error");
    console.log(result);
    return res.json({ result: result });
  });
});
const port = 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

app.use("/uploads", express.static("uploads"));
