const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// Register

router.post("/register", async (req,res)=>{
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt)
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
            // department: req.body.department,
            // batch: req.body.batch,
            roll: req.body.roll,
            profilePic: req.body.profilePic,
            
        })

        const user = await newUser.save();
        res.status(200).json(user);

    } catch(err){
        res.status(500).json(err)
    }
})


// Login
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wornd credentials!")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong credentials!")

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch(err){
        res.status(500).json(err);
    }
})


module.exports = router