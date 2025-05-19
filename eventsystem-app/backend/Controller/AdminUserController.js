const User = require ('../Model/AdminUserSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createAdminUser = (req,res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 10);
    let User1 = new User({
        username: req.body.username,
        email:req.body.email,
        mobile:req.body.mobile,
        password: hashedPassword
    })
    User1.save()
    .then(() => {
        res.send({
            isSuccess:true,
            msg: "User Created",
        })
    })
    .catch((err)=>{
        res.send({
            isSuccess:false,
            msg:"error",err
        })
    })
}

const getAdminUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).json({ msg: "Name and password are required." });
      }
  
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ msg: "User not found." });
      }
  
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ msg: "Invalid password." });
      }
  
      const token = jwt.sign({ username: user.username }, 'shhhhh', { expiresIn: '10m' });
      console.log("Token Expire", token)
      res.status(200).json({
        msg: "Password validated",
        data: { username: user.username, email: user.email },
        token,
      });
    } catch (err) {
      console.error("Error in login route:", err);
      res.status(500).json({ msg: "Server error. Please try again later." });
    }
  };

const updateAdminUser = (req,res) => {
    User.updateOne({_id : req.query.Userid},req.body)
    .then((data) => {
        res.send({msg:"User Data Updated",data})
    })
    .catch((err) => {
        console.log(err)
    })
}

const deleteAdminUser = (req,res) => {
    User.deleteOne({_id : req.query.Userid})
    .then((data)=>{
        res.send({msg:"Data Deleted", data})
    })
    .catch((err) => {
        console.log("Error",errr)
    })
}

module.exports = {createAdminUser,getAdminUser,updateAdminUser,deleteAdminUser}