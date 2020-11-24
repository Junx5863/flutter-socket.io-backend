
const { io } = require('../index');
//Mensajes Sockets
io.on("connection", (client) => {

    console.log("Cliente Conectado");

  client.on("disconnect", () => {
    console.log("Cliente Desconectado");
  });

  client.on('mensaje', ( paylod) =>{
      console.log('Mensaje!!', paylod);

      io.emit( 'mensaje', {admin: 'Nuevo mensaje'} );
  });

});