import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

// Resolve the uploads directory path
const storage = multer.diskStorage({
          destination: (req, file, cb) => {
                    //cb(null, path.resolve("uploads/")); // Resolves to the absolute path
                    cb(null, "uploads/");

          },

          filename: (req, file, cb) => {
                    const extname = path.extname(file.originalname);
                    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
          },
});

// File filter for image files only
const fileFilter = (req, file, cb) => {
          const filetypes = /jpe?g|png|webp|gif/; // Allowed extensions
          const mimetypes = /image\/jpe?g|image\/png|image\/webp/; // Allowed mime types

          const extname = path.extname(file.originalname).toLowerCase();
          const mimetype = file.mimetype;

          if (filetypes.test(extname) && mimetypes.test(mimetype)) {
                    cb(null, true); // Accept file
          } else {
                    cb(new Error("Images only"), false); // Reject file
          }
};

const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single('image');

router.post("/", (req, res) => {
          uploadSingleImage(req, res, (err) => {
                    if (err) {
                              res.status(400).send({ message: err.message });
                    } else if (req.file) {
                              // Normalize the path in the response
                              const imagePath = `/${req.file.path.replace(/\\/g, "/")}`;
                              res.status(200).send({
                                        message: "Image uploaded successfully",
                                        image: imagePath,
                              });
                    } else {
                              res.status(400).send({ message: "No image file provided" });
                    }
          });
});

export default router;
