import express from "express";
import sum from "./sum.js";
// create the server
const app = express();
// now listn or start the server
app.get("/", async (req, res) => {
    res.status(200)
        .json({
            message: "Hello World"
        })
})
app.get("/sum/:a/:b", async (req, res) => {
    res.status(200)
        .json({
            message: sum(parseInt(req.params.a), parseInt(req.params.b))
        })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
