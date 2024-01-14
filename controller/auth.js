const user = require('../model/user');
const User = user.User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signUp = (req, res) => {
   const user = new User(req.body);
   const token = jwt.sign( {email: req.body.email}, privateKey, {algorithm: 'RS256'} );
   user.token = token;
   const hash = bcrypt.hashSync(req.body.password, 10);
   user.password = hash;

   user.save( (err, doc) => {
      if(err){
        res.json(err)
      }else{
        res.json(doc)
      }
   })
};

exports.login = (req, res) => {
    try{
        const doc = User.findOne({email: req.body.email});
        const isAuth = bcrypt.compareSync(req.body.password, doc.password);
        if(isAuth){
            const token = jwt.sign( {email: req.body.email}, privateKey, {algorithm: 'RS256'} )
            doc.token = token;
            doc.save(()=>{
                res.json({token})
            })
        }{
            res.sendStatus(401)
        }

    }catch(err){
       res.status(401).json(err);
    }
};
