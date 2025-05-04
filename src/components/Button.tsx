interface buttonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    type?: "button" | "submit" | "reset";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "tertiary";
    color?: "default" | "primary" | "secondary" | "danger" | "success" | "warning";
    fullWidth?: boolean;
    children?: React.ReactNode;
}

const Button: React.FC<buttonProps> = ({
    text, 
    onClick, 
    className, 
    disabled = false, 
    loading = false, 
    type = "button", 
    icon, 
    iconPosition = "left", 
    size = "medium", 
    variant = "primary", 
    color = "default", 
    fullWidth = false, 
    children
})  => {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`
            ${className}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${loading ? "cursor-wait" : ""}
            ${fullWidth ? "w-full" : ""}
            ${size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"}
            ${variant === "primary" ? "bg-gray-900 dark:bg-gray-600" : variant === "secondary" ? "bg-gray-500 text-gray-900" : "bg-white text-black"}
            ${color === "primary" ? "bg-gray-900 dark:bg-gray-600 text-white"  : color === "secondary" ? "bg-zinc-300 text-gray-900" : color === "danger" ? "bg-red-500" : color === "success" ? "bg-green-500" : color === "warning" ? "bg-yellow-500" : ""}
            ${iconPosition === "left" ? "flex flex-row items-center" : "flex flex-row-reverse items-center"}
            ${icon ? "space-x-2" : ""}
            ${fullWidth ? "w-full" : ""}
            py-2 px-4 rounded-lg
            transition duration-200 ease-in-out
            hover:bg-opacity-80
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            active:bg-opacity-90
            font-semibold
            `}>
            {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
            {children || text}
            {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
        </button>
    );
}

export default Button;
