const userModel = require("../models/users");
const bcrypt = require("bcryptjs");

class User {

    async changePassword(req, res) {
        let { uId, oldPassword, newPassword } = req.body;
        if (!uId || !oldPassword || !newPassword) {
            return res.json({ message: "All filled must be required" });
        } else {
            const data = await userModel.findOne({ _id: uId });
            if (!data) {
                return res.json({
                    error: "Invalid user",
                });
            } else {
                const oldPassCheck = await bcrypt.compare(oldPassword, data.password);
                if (oldPassCheck) {
                    newPassword = bcrypt.hashSync(newPassword, 10);
                    let passChange = userModel.findByIdAndUpdate(uId, {
                        password: newPassword,
                    });
                    passChange.exec((err, result) => {
                        if (err) console.log(err);
                        return res.json({ success: "Password updated successfully" });
                    });
                } else {
                    return res.json({
                        error: "Your old password is wrong!!",
                    });
                }
            }
        }
    }
}

const usersController = new User();
module.exports = usersController;
