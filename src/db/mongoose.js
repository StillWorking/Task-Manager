const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOD_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify:false
});