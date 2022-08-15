import React from "react";
import "./button.scss";

export interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: "outlined" | "filled";
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type,
	className,
	disabled,
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={"button " + className}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
