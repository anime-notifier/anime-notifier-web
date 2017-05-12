import anime from './anime';

// Set up routes here instead of messing with code
const routes =
[
  {
    on: 'anime',
    routes: [
      {type: 'setAnimeList', func: anime.setAnimeList},
      {type: 'setAnimeListBulk', func: anime.setAnimeListBulk},
      {type: 'malAnimeList', func: anime.malAnimeList}
    ]
  }
]

// Map routes to better format to be accessed
const mapRoute = () => {
  routes.forEach((val) => {
    // For every socket
    const map = val.routes.reduce((a, b) => {
      // Map to 2 different vars
      a.types.push(b.type);
      a.functions.push(b.func);
      return a;
    }, {types: [], functions: []});
    // Put back in routes
    val.types = map.types;
    val.functions = map.functions;
  })
}

module.exports = (socket) => {
  mapRoute();
  routes.forEach((val) => {
    socket.on(val.on, (data) => {
      console.log(data);
      const index = val.types.indexOf(data.type);
      if(index !== -1){
        val.functions[index](data);
      }
    })
  })
}
