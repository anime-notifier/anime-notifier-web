import * as status from './status';
import * as user from './user';
import * as anime from './anime';

// Set up routes here instead of messing with code
const routes =
[
  {
    on: 'status',
    routes: [
      {type: 'status', func: status.handleStatus}
    ]
  },
  {
    on: 'user',
    routes: [
      {type: 'checkSession', func: user.checkSession},
      {type: 'setMyUserData', func: user.setMyUserData}
    ]
  },
  {
    on: 'anime',
    routes: [
      {type: 'setAnimeStatus', func: anime.setAnimeStatus},
      {type: 'setAnimeStatusBulk', func: anime.setAnimeStatusBulk},
      {type: 'animeList', func: anime.animeList}
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

export default function(socket){
  mapRoute();
  routes.forEach((val) => {
    socket.on(val.on, (data) => {
      // console.log(data);
      const index = val.types.indexOf(data.type);
      if(index !== -1){
        val.functions[index](data);
      }
    })
  })
}
