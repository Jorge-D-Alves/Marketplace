const express = require('express');
const app = express();                                                                           // invocando o contrutor
const cors = require('cors');                                                                    // controle de acesso, servidor consegue emitir requisições
const morgan = require('morgan');                                                                  // controle de requisições vindas so servidor, duração, payload recebido (log)

// database
require('./database');

app.set('port', process.env.PORT || 8000);
app.use(cors());
app.use(morgan('dev')); // ambiente de desenvolvimento
app.use(express.json());

app.use('/', require('./routes/main.routes'));

app.listen(app.get('port'), () => {
  console.log('Server is Up.');
});
