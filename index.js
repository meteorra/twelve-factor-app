require('dotenv').config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;

(async function() {
    try {

        const client = await MongoClient.connect(uri,{ useNewUrlParser: true });
        console.log('Connected to MongoDB')

        // client.close();
    } catch(e) {
        console.error(e);
    }

})();