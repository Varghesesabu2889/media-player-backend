//import json server in index.js file

const jsonServer =require('json-server')

//create a server for json file

const mediaplayerserver = jsonServer.create()

//setup a path for json file

const router =jsonServer.router(`db.json`)

//return a middleware used by json server

const middlewares = jsonServer.defaults()

//setup a port for running json server

const port = 4000 || process.env.port

//use  middlewares and router in server

mediaplayerserver.use(middlewares)
mediaplayerserver.use(router)

//To Listen server server for resolving request from server

mediaplayerserver.listen(port,()=>{
    console.log(`media listening at port ${port},and waiting for the client request !!!`);
})