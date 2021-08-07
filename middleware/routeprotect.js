const jwt = require("jsonwebtoken")
const Auth = require("../models/auth")

function authRouth(req, res, next) {

    const cook = req.cookies.jwt;
    if (cook) {
        jwt.verify(cook, "chal be gaand mat mara", (error, decodedToken) => {
            if (error) {
                res.json({ auht: "login" })
            }
            else {
                next()

            }
        })


    }
    else {
        res.json({ auht: "login" })
    }


}



// function usercheck(req, res, next) {
//     const cook = req.cookies.jwt;
//     if (cook) {
//         jwt.verify(cook, "chal be gaand mat mara", async (error, decodedToken) => {
//             if (error) {
//                 res.locals.user = null

//                 next()
//             }
//             else {
//                 let user = await Auth.findById(decodedToken.id)
//                 res.locals.user = user
//                 next();

//             }
//         })


//     }
//     else {
//         res.locals.user = null
//         next()
//     }

// }


module.exports = { authRouth }