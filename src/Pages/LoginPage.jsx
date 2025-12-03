import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

export default function LoginPage() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [error, setError] = useState("");

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleGetOtp = () => {
    setError("");
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    const otp = generateOtp();
    setGeneratedOtp(otp);
    setOtpSent(true);
    console.log("Generated OTP:", otp); // For testing
    alert(`Your OTP is: ${otp} .
    Remember it .`); 
  };

  const handleVerifyOtp = () => {
    setError("");
    if (!userOtp) {
      setError("Please enter OTP");
      return;
    }

    if (userOtp !== generatedOtp) {
      setError("Invalid OTP");
      return;
    }

    alert("Login successful!");
    navigate("/dashboard");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("User:", result.user);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Google login failed");
    }
  };

  return (
    <div className="h-screen bg-[#F6F7F9] flex justify-center px-2 mb-5 pt-10 md:pt-5 font-ibm">
      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm py-12 px-6 md:px-10">
        <div className="flex flex-col items-center gap-3 mb-10">
          <img src="/logo.svg" alt="Gemlay" className="h-12 md:h-14" />
        </div>

        {/* Title */}
        <h2 className="text-[11px] tracking-wide1 text-center text-emerald-800 font-semibold mb-8">
          <span className="text-emerald-900 font-bold">LOGIN</span> /{" "}
          <span className="opacity-60">SIGN UP</span>
        </h2>

        {!otpSent ? (
          <>
            {/* Phone input */}
            <div className="mb-3">
              <div className="flex items-center transition-transform duration-200 hover:scale-[1.01] focus-within:scale-[1.02] bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm">
                {/* Flag + code */}
                <div className="flex items-center gap-2 pr-3 border-r border-gray-200">
                  <img
                    src="/flag.png"
                    alt="India"
                    className="w-6 h-4 rounded-sm"
                  />
                  <span className="text-sm text-gray-700">+91</span>
                </div>

                {/* Input */}
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(
                      e.target.value.replace(/\D/g, "").slice(0, 10)
                    );
                    setError("");
                  }}
                  maxLength="10"
                  className="flex-1 bg-transparent outline-none text-sm px-3 text-gray-800 placeholder:text-gray-400"
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-2 text-center">{error}</p>
              )}
            </div>

            {/* Terms */}
            <p className="text-[11px] leading-[18px] tracking-wide1 text-center text-gray-500 mb-6">
              By continuing, I agree to the{" "}
              <button className="text-emerald-700 font-medium">Terms of Use</button>{" "}
              &amp;{" "}
              <button className="text-emerald-700 font-medium">
                Privacy Policy
              </button>
              .
            </p>

            {/* OTP Button */}
            <button
              onClick={handleGetOtp}
              type="button"
              className="w-full rounded-full bg-emerald-800 text-white text-sm font-semibold py-3 
        tracking-[0.18em] shadow-sm mb-6
        transform transition-transform duration-200 ease-out
        hover:scale-[1.02] active:scale-[0.97] hover:shadow-md"
            >
              GET OTP
            </button>
          </>
        ) : (
          <>
            {/* OTP input */}
            <div className="mb-3">
              <p className="text-xs text-gray-600 mb-2 text-center">
                OTP sent to +91 {phoneNumber}
              </p>
              <div className="flex items-center transition-transform duration-200 hover:scale-[1.01] focus-within:scale-[1.02] bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={userOtp}
                  onChange={(e) => {
                    setUserOtp(
                      e.target.value.replace(/\D/g, "").slice(0, 6)
                    );
                    setError("");
                  }}
                  maxLength="6"
                  className="flex-1 bg-transparent outline-none text-sm px-3 text-gray-800 placeholder:text-gray-400 text-center tracking-widest"
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs mt-2 text-center">{error}</p>
              )}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerifyOtp}
              type="button"
              className="w-full rounded-full bg-emerald-800 text-white text-sm font-semibold py-3 
        tracking-[0.18em] shadow-sm mb-6
        transform transition-transform duration-200 ease-out
        hover:scale-[1.02] active:scale-[0.97] hover:shadow-md"
            >
              VERIFY OTP
            </button>

            {/* Change Phone */}
            <button
              onClick={() => {
                setOtpSent(false);
                setUserOtp("");
                setError("");
              }}
              type="button"
              className="w-full text-emerald-700 text-sm font-medium py-2 mb-6 hover:opacity-70"
            >
              Change Phone Number
            </button>
          </>
        )}

        <p className="text-[11px] tracking-wide1 text-center text-gray-600 mb-6">
          Do not have an account?{" "}
          <span className="text-emerald-700 font-semibold cursor-pointer">
            Sign Up
          </span>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-[11px] text-gray-500">Or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social text */}
        <p className="text-[11px] tracking-wide1 text-center text-gray-500 mb-3">
          Continue with social media
        </p>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="mx-auto flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm mb-6
          transition-transform duration-200 hover:scale-110 hover:shadow-md active:scale-95"
        >
          <img src="/google.png" alt="Google" className="w-5 h-5" />
        </button>

        {/* Help */}
        <p className="text-[11px] tracking-wide1 text-center text-gray-500">
          Having trouble logging in?{" "}
          <button className="text-emerald-700 font-medium">Get Help</button>
        </p>
      </div>
    </div>
  );
}
