const mongoose = require("mongoose");
try {
    mongoose.connect(
        "mongodb+srv://weconnect:weconnect@cluster0.5qjaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    );
    console.log(
        "==============Mongodb Database Connected Successfully=============="
    );
} catch (err) {
    console.log("==========Database Not Connected==========");
}
