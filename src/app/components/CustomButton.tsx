import React from 'react';
import { cn } from "@/lib/utils";


interface Props {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "small" | "medium" | "large";
    className?: string;
    asChild?: boolean;
    disabled?: boolean;
    onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    type?: "button" | "submit" | "reset";
    loading?:boolean

}

const CustomButton: React.FC<Props> = ({
    children,
    variant = "primary",
    size = "medium",
    className = "",
    disabled = false,
    onClick,
    type = "button",
    loading = false,
  }) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center rounded-md shadow-sm justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none";
  
    // Variant styles
    const variantStyles = {
      primary: "bg-primary text-white hover:bg-purple-800 focus:ring-blue-500",
      secondary: "bg-gray-600 text-white hover:bg-purple-500 focus:ring-gray-500",
      outline: "border border-primary text-gray-700 hover:bg-purple-500 hover:text-white focus:ring-gray-500",
    };
  
    // Size styles
    const sizeStyles = {
      small: "h-8 px-3 text-sm",
      medium: "h-10 px-4 text-base",
      large: "h-12 px-6 text-lg",
    };
  
    return (
      <button
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  };
  
  export default CustomButton;