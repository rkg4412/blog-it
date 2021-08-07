const mongoose = require("mongoose");
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")

const AuthSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        validate: [isEmail, "Email is not Validcorrect"]

    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [6, "Password minimum length is 6"],
        trim: true,
    }

})


AuthSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

//static function
AuthSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const apass = await bcrypt.compare(password, user.password)
        if (apass) {
            return user
        }
        throw Error("incorrect Password")
    }
    throw Error("notres Email")
}



module.exports = mongoose.model("Auth", AuthSchema);