const users = require('../models/user');

const userCtrl = {
    login: async (req, res) => {
        try {
            const { email } = req.body;
            if(!email) return res.status(400).json({ msg: "Vui lòng nhập email!" });
            
            const user = await users.findOne({ email }) 
            console.log(user);
            res.json({
                msg: "Bạn đã đăng nhập thành công!",
              });
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = userCtrl;