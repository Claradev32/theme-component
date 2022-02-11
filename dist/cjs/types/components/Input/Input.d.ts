import { ChangeEventHandler } from "react";
export interface InputProps {
    label?: string;
    disabled?: boolean;
    fontFamily?: string;
    placeholder?: string;
    paddding?: string;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: (props: InputProps) => import("theme-ui/jsx-runtime").JSX.Element;
export default Input;
