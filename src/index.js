import express from 'express';
import connectDataBase from './database/db.js';
import routes from './routes.js';

const app = express()

app.use(express.json());
app.use(routes)

    connectDataBase()
        .then(() => {
            app.listen(3000, () => 
                console.log('Banco de dados conectado com sucesso!!!'))
        })
        .catch((error) => console.log(error))
