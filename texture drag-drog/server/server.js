const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
/* const cors = require('cors') */
const port = 3000

app.use(fileUpload(fileUpload));
/* app.use(cors()); */
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))
/* post */
app.post('/upload', (req, res) => {
    console.log(req.files.file);
    res.send(`Archivo ${req.files.file.name} subido correctamente al Servidor!`);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));