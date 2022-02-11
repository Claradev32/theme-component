import * as theme_ui_jsx_runtime from 'theme-ui/jsx-runtime';
import { MouseEventHandler, ChangeEventHandler } from 'react';

interface ButtonProps {
    label?: string;
    color?: string;
    fontFamily?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: (props: ButtonProps) => theme_ui_jsx_runtime.JSX.Element;

interface InputProps {
    label?: string;
    disabled?: boolean;
    fontFamily?: string;
    placeholder?: string;
    paddding?: string;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: (props: InputProps) => theme_ui_jsx_runtime.JSX.Element;

export { Button, Input };
