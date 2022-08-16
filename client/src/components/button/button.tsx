import React from "react";
import "./button.scss";
import { ButtonProps } from "../../models/componenets.models";

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
