import React, { memo, ButtonHTMLAttributes } from 'react';
import { ButtonCss } from './index.css';

interface ButtonExtraProps {
	background?: string;
	active?: boolean;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonExtraProps;

export const Button: React.FC<ButtonProps> = memo(function Button({
	background,
	active = false,
	children,
	type = 'button',
	...props
}) {
	return (
		<ButtonCss background={background} active={active} type={type} {...props}>
			{children}
		</ButtonCss>
	);
});
