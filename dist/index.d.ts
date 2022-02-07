import * as theme_ui_jsx_runtime from 'theme-ui/jsx-runtime';
import { MouseEventHandler, ChangeEventHandler } from 'react';

interface ButtonProps$1 {
    label?: string;
    color?: string;
    fontFamily?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: (props: ButtonProps$1) => theme_ui_jsx_runtime.JSX.Element;

interface ButtonProps {
    label?: string;
    disabled?: boolean;
    fontFamily?: string;
    placeholder?: string;
    paddding?: string;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: (props: ButtonProps) => theme_ui_jsx_runtime.JSX.Element;

export { Button, Input };
