const fetch = require("node-fetch");
const express=require("express")
const hbs = require('hbs');
const path=require("path")
const bodyParser=require('body-parser')
require("dotenv").config();


const app=express()

const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server listening on PORT ${PORT}`))

//Set Static Folder
app.use(express.static(path.join(__dirname, '../public')))
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Parse JSON
app.use(express.json({ limit: '10mb' }));

//Set Handlebars Middleware
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Set Handlebar Routes
app.get('/', function (req, res) {
    res.render('home', {
      title: "Oslo City Bike"
    })
})

app.get('/stations', function (req, res) {
    res.render('stations', {
      title: "Bike Stations"
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
      title: "Contact Us"
    });
});
 

const station_url="https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json"

app.get('/info', async function (request, response) {
  const url_response = await fetch(station_url)
  const data = await url_response.json()
  const stations=data.data.stations
  response.json(stations)

})

const station_status_url="https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json"

app.get('/status', async function (request, response) {
    const url_response = await fetch(station_status_url)
    const data = await url_response.json()
    const stations=data.data.stations
    response.json(stations)
})


app.get('*', function (req, res) {
    res.render('404', {
      title: "Page not found!"
    });
});

