import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"
export const Input = ({ type, value, onChange, label, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div>
            <label className="text-[13px] text-slate-800">{label}</label>
            <div className="input-box relative flex items-center">
                <input
                    type={
                        type === "password"
                            ? (showPassword ? "text" : "password")
                            : type
                    }
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none pr-10"
                    value={value}
                    onChange={(e) => onChange(e)}
                />

                {type === "password" && (
                    <>
                        {showPassword ? (
                            <FaRegEye
                                size={22}
                                className="absolute right-3 text-primary cursor-pointer"
                                onClick={() => toggleShowPassword()}
                            />
                        ) : (
                            <FaRegEyeSlash
                                size={22}
                                className="absolute right-3 text-slate-400 cursor-pointer"
                                onClick={() => toggleShowPassword()}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}