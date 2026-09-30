const expresss = require('express');
const app = expresss();
const port = 8888;
const path = require('path');

app.use(expresss.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
    
app.use(expresss.static(path.join(__dirname, "public")));


let posts = [
  {
    username: 'John Doe',
    Content: 'This is my first post',
  },
  {
    username: 'Jane Smith',
    Content: 'Hello everyone!',
  },
  {
    username: 'Bob Johnson',
    Content: 'Great day to be alive!',
  }
];


 

//get all posts

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
//get show form to create new post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});app.post("/posts", (req, res) => {
    console.log("POST request received:");
    console.log("Request body:", req.body);

    const { username, Content } = req.body;

    posts.push({
        username,
        Content
    });

    res.redirect("/posts");
});
//server listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

