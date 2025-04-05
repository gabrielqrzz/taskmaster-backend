const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmastercluster.lfuxuug.mongodb.net/?retryWrites=true&w=majority&appName=TaskMasterCluster`
    );
    console.log('Connected to MongoDB');
};

module.exports = connectToDatabase;
