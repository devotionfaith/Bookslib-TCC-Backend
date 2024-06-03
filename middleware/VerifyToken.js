import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) {
        console.log('No token provided');
        return res.sendStatus(401);}
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, decoded)=>{
        if(err) {
            console.log('Token verification failed', err);
            return res.sendStatus(403);
        }
        req.email = decoded.email;
        next();
    })
}   