import { MouseEventHandler } from "react";
export interface ButtonProps {
    label?: string;
    color?: string;
    fontFamily?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: (props: ButtonProps) => import("theme-ui/jsx-runtime").JSX.Element;
export default Button;
