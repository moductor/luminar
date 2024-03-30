import { ReactNode } from '../../node_modules/react';

type Props = JSX.IntrinsicElements["a"] & {
    children?: ReactNode;
};
export default function LinkButton({ className, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
