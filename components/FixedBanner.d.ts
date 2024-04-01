import { ReactNode } from '../../node_modules/react';

type Props = JSX.IntrinsicElements["div"] & {
    resolvePosition?: boolean;
    children?: ReactNode;
};
export declare function FixedBanner({ resolvePosition, className, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
