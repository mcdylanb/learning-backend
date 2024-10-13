const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());


app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});
app.listen(port, () => {
    console.log(`Running app listening on port ${port}`);
});