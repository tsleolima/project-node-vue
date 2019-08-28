const db = require('../config/dbConection');

module.exports = (app) => {
    app.get('/user', (req,res) => {

        db.query('select * from customer',
            (error, result) => {
                if(error){
                    console.log("oi" + error);    
                    res.status(500).send("nok")
                } else {
                    res.status(200).send(result)
                }
            })
    
    })
    
    app.get('/user/:firstname', (req,res) => {
    
        db.query('select * from customer where firstname =?', [req.params.firstname], 
            (error, result) => {
                if(error){
                    console.log(error);    
                    res.status(500).send("nok")
                } else {
                    res.status(200).send(result)
                }
            })
    
    })
    
    app.post('/user', (req,res) => {
    
        db.query('insert into customer (FIRSTNAME,MIDDLENAME,LASTNAME,CITYID,ZIP,COUNTRY,PHONE,EMAIL,NOTES,STATUS) values (?,?,?,?,?,?,?,?,?,?)',
            [req.body.FIRSTNAME,req.body.MIDDLENAME,req.body.LASTNAME,req.body.CITYID,req.body.ZIP,req.body.COUNTRY,req.body.PHONE,req.body.EMAIL,req.body.NOTES,req.body.STATUS],
            (error, result) => {                                
                if(error){                    
                    res.status(500).send(error);
                } else {
                    res.status(200).send(result);
                }
            })
    
    })

    app.delete('/user/:id', (req,res) => {

        db.query('delete from customer where CUSTOMERID=?',[req.params.id],
        (error,result) => {
            if(error){
                res.status(500).send("nok");
            } else {
                res.status(200).send(result)
            }
        })

    })
    
}