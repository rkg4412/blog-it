const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Auth = require("../models/auth")
const jwt = require("jsonwebtoken")


function handleerr(err) {
  error = {
    email: "",
    password: ""
  }


  if (err.message === "notres Email") {
    error["email"] = "Email is not registered"

  }
  if (err.message === "incorrect Password") {
    error["password"] = "Password is incorrect"

  }

  if (err.code === 11000) {
    error["email"] = "Email is user before"

  }

  if (err.message.includes("Auth validation failed")) {
    const er = Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    })
  }
  return error
}

const maxAges = 24 * 60 * 60 * 2;

function token(id) {
  return jwt.sign({ id }, "chal be gaand mat mara", {
    expiresIn: maxAges,

  })




}



//SIGNUP

router.get("/signup", (req, res) => {
  try {
    res.status(200).send("dasd")
  } catch (err) {
    res.status(401).send("err")
  }
})

router.post("/signup", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const userauth = await Auth.create({ email, password })
    const user = await User.create({ name, username, email, password })
    t = token(userauth._id);
    res.cookie("jwt", t, { httpOnly: true, maxAge: maxAges * 1000 })
    res.status(200).json({ user: userauth._id })
  }
  catch (err) {
    const error = handleerr(err)
    console.log(error)
    res.json({ err: error })
  }



  // try {
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPass = await bcrypt.hash(req.body.password, salt);
  //   const newUser = new User({
  //     name: req.body.name,
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: hashedPass
  //   });

  //   const user = await newUser.save()
  //   res.status(200).json(user);
  // }
  // catch {
  //   res.status(500).json(Error);
  // }
});


//LOGIN
router.get("/login", (req, res) => {

  try {
    res.status(200).json({})
  } catch (err) {
    res.status(400).json({})
  }


})

router.post("/login", async (req, res) => {

  const { email, password } = req.body
  try {
    const user = await Auth.login(email, password);
    const t = token(user._id)
    console.log(user)
    res.cookie("jwt", t, { httpOnly: true, maxAge: 1000 * maxAges })
    res.status(200).json({ user: user._id })
  } catch (err) {
    const error = handleerr(err)
    res.json({ err: { ...error } })

  }



  // try {
  //   const user = await User.findOne({ username: req.body.username });
  //   !user && res.status(400).json("Wrong credentials!");

  //   const validated = await bcrypt.compare(req.body.password, user.password);
  //   !validated && res.status(400).json("Wrong credentials!");

  //   const { password, ...others } = user._doc;   //{password} will not be shown to user and other info will be shown //   
  //   res.status(200).json(others);                // user._doc contains the data of the user
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});



router.get("/loggedin", (req, res) => {
  const cook = req.cookies.jwt;
  if (cook) {
    jwt.verify(cook, "chal be gaand mat mara", async (error, decodedToken) => {
      if (error) {
        res.json({ value: "null" })
      }
      else {
        let user = await Auth.findById(decodedToken.id)
        res.json({ value: user })
        console.log("sdasads", user)
      }
    })


  }
  else {
    res.json({ value: "null" })

  }

})

router.get("/logout", (req, res) => {

  res.cookie("jwt", "", { httpOnly: true, maxAge: 0.01 })
  res.send()
})

module.exports = router;