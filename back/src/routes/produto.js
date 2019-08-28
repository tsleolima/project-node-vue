const db = require('../config/dbConection')

module.exports = (app) => {

    app.get('/produto', (req,res) => {

        db.query('select * from produto', 
        (error,result) => {
            if(error){
                res.status(500).send("nok");
            } else {
                res.status(200).send(result);
            }
        })

    })

    app.post('/produto', (req,res) => {

        db.query('insert into produto (NAME,FORNECEDOR,CATEGORIA,PRICE,CODIGOBAR) values (?,?,?,?,?)',
        [req.body.NAME,req.body.FORNECEDOR,req.body.CATEGORIA,req.body.PRICE,req.body.CODIGOBAR],
        (error,result) => {            
            if(error){
                res.status(500).send("nok");
            } else {
                res.status(200).send(result)
            }
        })
    })

    app.delete('/produto/:name', (req,res) => {

        db.query('delete from produto where name=?',[req.params.name],
        (error,result) => {
            if(error){
                res.status(500).send("nok");
            } else {
                res.status(200).send(result)
            }
        })

    })

    app.put('/produto/:id', (req,res) => {
        db.query('update produto set NAME=?, FORNECEDOR=?, CATEGORIA=?, PRICE=? where PRODUTOID=?',
        [req.body.NAME,req.body.FORNECEDOR,req.body.CATEGORIA,req.body.PRICE,req.params.id],
        (error,result) => {                        
            if(error){
                console.log(error);
                res.status(500).send("nok");
            } else {
                res.status(200).send(result)
            }
        })

    })

}