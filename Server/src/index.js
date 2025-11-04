import app from './app.js';

const port = 4001;

app.get("/",(req,res) =>{
    res.send("Welcome to Notes App API");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});