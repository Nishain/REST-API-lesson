function logging(req,res,next){
    console.log('user has logged')
    next()
}
module.exports = logging