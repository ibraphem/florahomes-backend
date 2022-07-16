import express from "express"

const app = express();

const port = process.env.PORT || 7000
app.listen(port, () => {
    console.log(`serve at http:localhost:${port}`);
})