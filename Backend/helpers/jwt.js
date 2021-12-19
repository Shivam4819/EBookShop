const expressJwt= require('express-jwt');

function authJwt(){
    const secret= process.env.SECRET
    const api= process.env.API_URL

    return expressJwt({
        secret,
        algorithms:['HS256'],
        isRevoked: isRevoked
    })
    .unless({
        path:[
            // below url is used so that anything after product/ will be inculded and we 
            // do not need to write all url , it will work only for get method and not for put/del/post
            {url:/\/api\/v1\/book(.*)/, method:['GET','OPTIONS']},
            {url:/\/api\/v1\/category(.*)/, method:['GET','OPTIONS']},
            `${api}/user/login`,
            `${api}/user/register`
            
        ]
    })
}

async function isRevoked(req, payload, done){
    if(!payload.isAdmin){
        if(!payload.isUser){
        done(null, true)
        }
    }
    done();

}

module.exports= authJwt