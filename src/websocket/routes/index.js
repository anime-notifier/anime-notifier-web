import anime from './anime';

module.exports = (socket) => {
  socket.on('anime', (data) => {
    console.log("test");
    switch(data.type){
      case "getList":
        anime.getList(data);
        break;
      default:
        break;
    }
  })
}
