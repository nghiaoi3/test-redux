var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));



app.use(bodyParser()); // get information from html forms


app.get('/', (req, res) => res.render('home'));


//create a server
var port = process.env.PORT || 3000
var server = app.listen(port, function(){
    console.log('server is listening ' +port);
});




//  SET ROUTES FOR YELP SEARCH
var yelp = require("yelp-fusion");
var clientId = 'mKWOFInN79IrX4VnAdhDBQ';
var clientSecret = '9fu7loKPMRa28nRqTWxAAyMISbw9tweFdkuwKQyFtBaSyG1fq5o7qW9hy7ad2CoQ';


app.post("/api/yelp", function(req, res) {
        
    console.log('searchText '+req.body.searchText)

yelp.accessToken(clientId, clientSecret).then(response => {
    
console.log('token is ' +response.jsonBody.access_token);

var client = yelp.client(response.jsonBody.access_token);


client.search({
          term: "clubs",
          location: req.body.searchText,
          category_filter: "bars",
          sort: 1
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});


/*
  yelp
    .accessToken(
      process.env.YELPFUSION_CLIENTID,
      process.env.YELPFUSION_CLIENTSECRET
    )
    .then(response => {
      var client = yelp.client(response.jsonBody.access_token);
      
      client
        .search({
          term: "clubs",
          location: req.body.searchText,
          category_filter: "bars",
          sort: 1
        })
        .then(async response => {
          var businesses = response.jsonBody.businesses.map(b => {
            return {
              yelpId: b.id,
              name: b.name,
              address: b.location.address1,
              noReservations: null
            };
          });

                    return res.json(businesses);
        })
    }) */
    
    });
});