const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PONPMRT || 3000

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(bodyParser.json())

app.get('/', (req, res) => {

  res.send(`

    <form action="/contact" method="POST">

      <input type="text" name="name" placeholder="Name" />

      <input type="email" name="email" placeholder="Email" />

      <input type="submit" value="Submit" />

    </form>

  `);

});



app.post('/contact', (req, res) => {

  const name = req.body.name;

  const email = req.body.email;



  console.log(name, email);

  res.send(`Thanks for contacting us, ${name}! We'll get back to you at ${email} soon.`);

});

const startServer = () => {
    console.log(`The server is running on http://localhost:${port}`)
    console.log(`Press CTRL + C to exit`)
}
// 4. Start the server on the specified port
// 5. What should happen when the server runs
app.listen(port, startServer)