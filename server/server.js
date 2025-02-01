const express = require("express"); //node loading the express library to load in the variable express 
//Initializing express app 
const app = express();
// const {MongoClient} = require("mongodb"); //for database connection 

const PORT = process.env.PORT || 8000;
//connecting mongoose 
const mongoose = require("mongoose");

//initialie middleware 
app.use(express.json()); // Allows JSON data in POST requests


//comments functionality
const articlesInfo = {
    "learn-react": {
        Comments: [],
    },
    "learn-node": {
        Comments: [],
    },
    "my-thoughts-on-learning-react": {
        Comments: [],
    },
}

// //api
// //test route for now 
// app.get('/' , (req , res) => res.send("hello world"));
// app.post('/' , (req , res) => res.send(`hello ${req.body.name}`));
// app.get('/hello/:name', (req, res) => res.send(`hello ${req.params.name}`));
//apis 
app.post('/api/article/:name/add-comments', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;



    // Check if the article exists
    if (!articlesInfo[articleName]) {
        return res.status(404).json({ error: "Article not found" });
    }


    articlesInfo[articleName].Comments.push({ username, text });
    res.status(200).json(articlesInfo[articleName]);
})

app.listen(PORT, () => console.log(`server has started at port ${PORT}`));



// API to get article by name
app.get('/api/article/:name', async (req, res) => {
    const { name } = req.params;

    // try {
        const article = await articlesInfo.findOne({ name });

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.json(article);
    // } catch (error) {
    //     console.log("error")
    //     res.status(500).json({ message: "Server error", error });
    // }
});


//database connection
mongoose.connect("mongodb://127.0.0.1:27017/mern", {
    // Connection string breakdown:
    // mongodb:// - protocol
    // 127.0.0.1 - localhost IP address
    // 27017 - default MongoDB port
    // mern-blog - name of the database

    // Configuration options:
    useNewUrlParser: true,     // Use new URL string parser to avoid deprecation warnings
    useUnifiedTopology: true,  // Use new Server Discovery and Monitoring engine
})
    // Handle successful connection
    .then(() => console.log("✅ Connected to MongoDB"))
    // Handle connection errors
    .catch((err) => console.error("❌ MongoDB Connection Error:", err))