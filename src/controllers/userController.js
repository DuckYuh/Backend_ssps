import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";

const JWT_SECRET="hehehe";

const createToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1h' });
};

const studentLogin = async (req, res) => {
    const { email, password } = req.body;//email

    try {
        // Tìm người dùng theo Stu_ID
        const user = await userModel.findOne({ email:email });

        // Kiểm tra nếu người dùng không tồn tại hoặc mật khẩu không đúng
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "MSSV hoặc mật khẩu không đúng" });
        }

        // Tạo JWT
        const token = createToken(user.Stu_ID);

        // Trả về thông tin người dùng và token nếu đăng nhập thành công
        res.status(200).json({ message: "Đăng nhập thành công", token, role: user.role});//////////////
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Đăng nhập lỗi, vui lòng đăng nhập lại!" });
    }
};

const adminLogin = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({ email:email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "email hoặc mật khẩu không đúng" });
        }

        if(user.role!="admin") {
            return res.status(401).json({ message: "Không phải admin" });
        }

        const token = createToken(user._id);
        res.status(200).json({ message: "Đăng nhập thành công", token, role: user.role});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "đăng nhập sai" });
    }
}

const updateBalance = async (Stu_ID, paymentAmount, method) => {
    try {
        // Tìm người dùng theo Stu_ID
        const user = await userModel.findOne({ Stu_ID });
        if (!user) {
            throw new Error("User not found");
        }

        // Lấy số dư hiện tại của người dùng
        const currentBalance = user.balance;

        // Kiểm tra phương thức thanh toán (buy hoặc use)
        let newBalance;
        if (method === "buy") {
            newBalance = currentBalance + paymentAmount;  // Nếu là "buy", cộng số tiền vào
        } else if (method === "use") {
            newBalance = currentBalance - paymentAmount;  // Nếu là "use", trừ số tiền đi
        } else {
            throw new Error("Invalid payment method");
        }

        // Cập nhật số dư mới vào MongoDB
        const updatedUser = await userModel.findOneAndUpdate(
            { Stu_ID },
            { balance: newBalance },  // Cập nhật balance
            { new: true }
        );

        return updatedUser; // Trả về thông tin người dùng đã cập nhật
    } catch (error) {
        throw new Error(error.message); // Nếu có lỗi, ném lỗi ra ngoài
    }
};


const updateQuotas = async (req, res) => {//??
    const { quotas } = req.body;

    try {
        // Cập nhật chỉ số quotas của tất cả người dùng có vai trò là student
        const result = await userModel.updateMany(
            { role: 'student' }, // Điều kiện để tìm tất cả người dùng có vai trò là student
            { $set: { quotas } } // Cập nhật chỉ số quotas mới
        );

        // Trả về thông tin cập nhật
        res.status(200).json({ message: "Cập nhật chỉ số quotas thành công", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi cập nhật chỉ số quotas" });
    }
};

const getBalance = async (req, res) => {
    try {
        const { Stu_ID } = req.body;

        // Tìm người dùng theo Stu_ID
        const user = await userModel.findOne({ Stu_ID });

        // Kiểm tra nếu người dùng không tồn tại
        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        // Trả về balance của người dùng
        res.status(200).json({ message: "lấy chỉ số balance thành công",balance:user.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi lấy số dư" });
    }
};

const getHistory = async (req, res) => {
    try {
        const { Stu_ID } = req.body; // Lấy mã số sinh viên từ yêu cầu

        // Tìm người dùng theo Stu_ID và chỉ lấy trường 'history'
        const user = await userModel.findOne({ Stu_ID }, { history: 1, _id: 0 });

        // Kiểm tra nếu người dùng không tồn tại
        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        // Trả về lịch sử của người dùng
        res.status(200).json({ message: "Lấy lịch sử thành công", history: user.history });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi lấy lịch sử" });
    }
};

const getReport = async (req, res) => {
    try {
        const { Stu_ID } = req.body; // Lấy mã số sinh viên từ yêu cầu

        // Tìm người dùng theo Stu_ID và chỉ lấy trường 'printHistory'
        const user = await userModel.findOne({ Stu_ID }, { printHistory: 1, _id: 0 });

        // Kiểm tra nếu người dùng không tồn tại
        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        // Kiểm tra nếu không có lịch sử in
        if (!user.printHistory || user.printHistory.length === 0) {
            return res.status(200).json({ message: "Không có báo cáo in nào", report: [] });
        }

        // Trả về báo cáo in ấn
        res.status(200).json({ message: "Lấy báo cáo thành công", report: user.printHistory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi lấy báo cáo" });
    }
};

const getUserByID = async (req, res) => {
    try {
        const{Stu_ID} = req.body;
        const user = await userModel.findOne({ Stu_ID });

        // Kiểm tra nếu người dùng không tồn tại
        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        res.json({ message: "Lấy user thành công",user });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

class Payment {
    async processPayment(Stu_ID, amount, method) {
        // Kiểm tra phương thức thanh toán
        if (!["cash", "card"].includes(method)) {
            return { status: "error", message: "Invalid payment method!" };
        }

        // Chuyển amount thành số và kiểm tra tính hợp lệ
        const paymentAmount = parseInt(amount); 
        if (isNaN(paymentAmount) || paymentAmount <= 0) {
            return { status: "error", message: "Amount must be greater than 0!" };
        }

        // Kiểm tra sự tồn tại của Stu_ID trong MongoDB
        const userExists = await userModel.findOne({ Stu_ID: Stu_ID });
        if (!userExists) {
            return { status: "error", message: `User ID ${Stu_ID} does not exist in the database.` };
        }

        // Cập nhật số dư người dùng
        try {
            const updatedUser = await updateBalance(Stu_ID, paymentAmount, "buy");

            // Trả về thông tin thanh toán thành công và số dư mới
            return {
                status: "success",
                message: `User ${Stu_ID} successfully made a payment of ${amount} using ${method}. New balance: ${updatedUser.balance}`,
            };
        } catch (error) {
            console.error(error);
            return { status: "error", message: "Error while updating balance." };
        }
    }
}

export {studentLogin,adminLogin,updateBalance,updateQuotas, getBalance, getHistory, getReport, getUserByID, Payment};