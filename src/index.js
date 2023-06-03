const express = require('express');
const PORT = 3000;
const routes = require('./routes');
const cors = require('cors')

class Server{
    constructor(){
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(cors('*'));
        this.app.use((req, res, next)=>{
            // res.send('no estas admitido!!');
            console.log('en mi middleware a nivel de app');
            next();
        })
    }

    settings(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use("/static", express.static(`${__dirname}/public`));
    }

    routes(){
        routes(this.app);
    }

    listen(){
        this.app.listen(PORT,() => {console.log(`http://localhost:${PORT}`)});
    }
}


module.exports = new Server();


