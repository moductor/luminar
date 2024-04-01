import { MouseEventHandler, ReactNode } from '../../node_modules/react';

export declare const navbarButtonClass: import('tailwind-variants').TVReturnType<{
    state: {
        none: string;
        active: string;
    };
    color: {
        normal: string;
        destructive: string;
    };
}, undefined, "rounded-lg bg-gray-950 p-3 text-start leading-none transition-colors dark:bg-gray-50", import("tailwind-variants/dist/config.js").TVConfig<{
    state: {
        none: string;
        active: string;
    };
    color: {
        normal: string;
        destructive: string;
    };
}, {
    state: {
        none: string;
        active: string;
    };
    color: {
        normal: string;
        destructive: string;
    };
}>, {
    state: {
        none: string;
        active: string;
    };
    color: {
        normal: string;
        destructive: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    state: {
        none: string;
        active: string;
    };
    color: {
        normal: string;
        destructive: string;
    };
}, undefined, "rounded-lg bg-gray-950 p-3 text-start leading-none transition-colors dark:bg-gray-50", import("tailwind-variants/dist/config.js").TVConfig<{
    state: {
        none: string;
        active: string;
    };
    color: {
        normal: string;
        destructive: string;
    };
}, {
    state: {
        none: string;
        active: string;
    };
    color: {
        normal: string;
        destructive: string;
    };
}>, unknown, unknown, undefined>>;
type Props = {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    children?: ReactNode;
    variant?: typeof navbarButtonClass.defaultVariants.color;
    getPathname?: () => string;
};
export declare function VerticalNavbarButton({ href, onClick, children, variant: color, getPathname, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
