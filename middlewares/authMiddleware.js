import User from '../models/User.js'

const ifNotLogedin = async (req, res , next) => {
    const user = await User.findById(req.session.userID)
    if(!user){
        return res.redirect('/login')

    }
    next()
    // User.findById(req.session.userID), (err, user) => {
    //     if(err || !user){
    //         return res.redirect('/login')
    //         next()
    //     }
    //
    // }
 }

 export {ifNotLogedin}
