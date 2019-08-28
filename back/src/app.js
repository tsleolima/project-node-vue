const app = require('./config/server');

require('./routes/user')(app);
require('./routes/produto')(app);

app.listen(app.get('port'), () => {
    console.log('Servidor rodando na porta ' + app.get('port'))
})