
const jwt = require('jwt-simple');

const moment= require('moment');


const checktoken= (req,res,next) =>{
    if(!req.headers['user-token']){
        return res.json( {error: 'necesitas incluir el user-token'})
    }

    const userToken= req.headers['user-token']
    let payload= {}

    try{
        payload= jwt.decode(userToken, 'frase');
    }catch {
        return res.json({error: 'el token es incorrecto'});
    };

    if(payload.expiredAt < moment().unix()) {
        return res.json({error: 'el token ha expirado'})
    };
    req.usuarioId= payload.usuarioId
   
    next();
}
module.exports = {
    checktoken: checktoken
}