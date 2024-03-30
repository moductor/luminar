import { ReactNode } from '../../node_modules/react';

type Props = JSX.IntrinsicElements["input"] & {
    label?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
};
export default function FormTextFieldRow({ label, prefix, suffix, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
