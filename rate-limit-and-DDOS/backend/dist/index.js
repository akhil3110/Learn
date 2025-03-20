"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = require("express-rate-limit");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
// Store OTPs in a simple in-memory object
const otpStore = {};
const OTPLimiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 5 * 60 * 1000, //five minutes
    max: 3,
    message: "Too Many requests try again after 5 minutes",
    standardHeaders: true,
    legacyHeaders: true
});
const passwordResetLimiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, //five minutes
    max: 5,
    message: "Too Many pasword reset attempts  try again after 15 minutes",
    standardHeaders: true,
    legacyHeaders: true
});
// Endpoint to generate and log OTP
//@ts-ignore
app.post('/generate-otp', OTPLimiter, (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // generates a 6-digit OTP
    otpStore[email] = otp;
    console.log(`OTP for ${email}: ${otp}`); // Log the OTP to the console
    res.status(200).json({ message: "OTP generated and logged" });
});
// Endpoint to reset password
//@ts-ignore 
app.post('/reset-password', passwordResetLimiter, (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) {
            return res.status(400).json({ message: "Email, OTP, and new password are required" });
        }
        if (otpStore[email] === otp) {
            console.log(`Password for ${email} has been reset to: ${newPassword}`);
            delete otpStore[email]; // Clear the OTP after use
            res.status(200).json({ message: "Password has been reset successfully" });
        }
        else {
            res.status(401).json({ message: "Invalid OTP" });
        }
    }
    catch (error) {
        //@ts-ignore
        console.log(error.message);
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
