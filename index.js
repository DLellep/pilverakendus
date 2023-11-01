const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');

require('dotenv').config()
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const msgsFile = './data/messages.json';
var messages = require(msgsFile);

app.post('/send-message', (req, res) => {
    console.log(`Message received - ${JSON.stringify(req.body)}`)
    messages.push(req.body);
    
    fs.writeFile(msgsFile, JSON.stringify(messages, null, 4), (err) => {
        if (err) throw err;
        console.log('Messages saved to file.');
    });
    
    res.send('Message received.')
})

app.get('/api', (req, res) => {
    res.json(messages);
})

app.listen(process.env.PORT, () => {
    console.log(`App running at http://localhost:${process.env.PORT}.`)
})