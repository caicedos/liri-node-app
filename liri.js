require("dotenv").config();

var request = require('request');
var keys = require('./Keys');
var Spotify = require('node-spotify-api');
var moment = require('moment');

var spotify = new Spotify(keys.spotify);


// if (process.argv[2] === "concert-this") {

//     var artist = process.argv[3];

//     request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {

//         if (!error && response.statusCode === 200) {

//             JSON.parse(body).forEach(function (object) {

//                 console.log("Name of the Venue:" + "" + object.venue.name);
//                 console.log("------------------------------------");
//                 console.log("Venue location:" + "" + object.venue.city);
//                 console.log("------------------------------------");
//                 console.log("Date of the event:" + "" + moment(object.datetime).format("MM/DD/YYYY"));
//             });
//         }
//     });

// } 
// if (process.argv[2] === "spotify-this-song") {

//   var query = process.argv[3];

//   spotify.search({
//     type: "track",
//     query: query,
//     limit: 5
//   }, function (err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }

//     data.tracks.items.forEach(function (object) {

//       console.log("Artist:" + "" + object.artists[0].name);
//       console.log("------------------------------------");
//       console.log("Song:" + "" + object.song);
//       console.log("------------------------------------");
//       console.log("Preview:" + "" + object.preview_url);
//       console.log("------------------------------------");
//       console.log("Album:" + "" + object.album.name);
//       console.log("------------------------------------");

//     });
//   });

  //    * If no song is provided then your program will default to "The Sign" by Ace of Base.

// }

// if (process.argv[2] === "movie-this") {

//   var movieName = process.argv[3];

//   request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {


//     if (!error && response.statusCode === 200) {
//       var pbody = JSON.parse(body)
  
//       console.log("Title: " + pbody.Title);
//       console.log("Year: " + pbody.Year);
//       console.log("IMBD Rating: " + pbody.imdbRating);
//       console.log("Rotten Tomatoes Rating: " + pbody.Ratings[1].Value);
//       console.log("Country: " + pbody.Country);
//       console.log("Language: " + pbody.Language);
//       console.log("Plot: " + pbody.Plot);
//       console.log("Actors: " + pbody.Actors);
//     }
//   });


// } 
if (process.argv[2] === "do-what-it-says") {

  





}