import * as multer from "multer";

const storage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, "upload/avatar");
  },
  filename: function(_req, file, cb) {
    var ext = file.originalname.split('.');
    var fileName = Math.random().toString(36).substr(2, 100);
    cb(null, fileName + '.' + ext[1]);
  }
});

const uploads = multer({ storage: storage });

export default uploads ;