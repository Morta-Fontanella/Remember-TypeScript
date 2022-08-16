export interface InputProps {
	errorMessage: string;
	children: React.ReactNode;
	title: string;
	linkPath: string;
	linkText: string;
	type?: "password" | "text";
	name?: string;
	onChange?: () => void;
	value?: string;
	className?: boolean;
	error?: () => void;
}

export interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: "outlined" | "filled";
	disabled?: boolean;
}
