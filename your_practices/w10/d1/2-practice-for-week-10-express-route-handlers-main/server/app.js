// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// parse JSON body
app.use(express.json());

app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

// Your code here

app.get("/", (req, res) => {
  // console.log(req.body);
  res.send("Good");
});

// 1 - GET /artists
app.get("/artists", (req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.end(JSON.stringify(getAllArtists()));
  res.send(getAllArtists());
});

// 2 - POST /artists
app.post("/artists", (req, res) => {
  let name = req.body["name"];
  if (name) {
    const added = addArtist(req.body);
    // console.log(added);
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(added));
  }
})

// 3 - GET /artists/latest
app.get("/artists/latest", (req, res) => {
  res.send(getLatestArtist());
})

// 4 - GET /artists/latest/albums
app.get("/artists/latest/albums", (req, res) => {
  res.send(getAlbumsForLatestArtist());
})

// 5 - GET /artists/:artistId
app.get("/artists/:artistId", (req, res) => {
  //console.log(req);
  let artistId = req.params["artistId"];
  res.send(getArtistByArtistId(artistId));
})

// 6 - Put  /artists/:artistId

const editArtistByArtistIdHandler = (req, res) => {
  let artistId = req.params["artistId"];
  let data = req.body;
  let edited = editArtistByArtistId(artistId, data);
  // console.log("data", data);
  // console.log("result", edited);
  res.send(edited);
};

app.route("/artists/:artistId")
  .put(editArtistByArtistIdHandler)
  .patch(editArtistByArtistIdHandler);

// 7 - DELETE /artists/:artistId
app.delete("/artists/:artistId", (req, res) => {
  let artistId = req.params["artistId"];
  // console.log("artistId", artistId);
  let result = deleteArtistByArtistId(artistId);
  if (!result) {
    res.send({ "message": "Successfully deleted" })
  } else {
    res.send({ "message": "Failed to delete" })
  }
})

// 8 - GET  /artists/:artistId/albums
app.get("/artists/:artistId/albums", (req, res) => {
  let artistId = req.params["artistId"];
  let albums = getAlbumsByArtistId(artistId);
  res.send(albums);
})

// 9 - GET /albums/:albumId


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}