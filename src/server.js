const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./config/swagger.json');

const port = process.env.PORT || 5000;


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/customers/:email", (req, res) => {
  res.status(200).send("...");
});

app.post("/customers", (req, res) => {
    res.status(200).send("...");
});
  

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});