import { ReactNode } from '../../node_modules/react';

type Props = {
    label?: string;
    children?: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
};
export declare function FormLabelRow({ label, children, prefix, suffix }: Props): import("react/jsx-runtime").JSX.Element;
export {};
