const express = require("express");
const app = express();

const port = 8005;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

app.get("/", (req, res) => {
    let date = new Date();
    res.status(200);
    return res.send(`OK ${date.toISOString()}`);
})