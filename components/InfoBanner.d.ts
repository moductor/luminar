import { ReactNode } from '../../node_modules/react';

export declare const infoBannerClass: import('tailwind-variants').TVReturnType<{
    color: {
        info: string;
        error: string;
    };
}, undefined, "grid gap-1 text-wrap rounded-xl border border-opacity-20 bg-opacity-10 p-2", import("tailwind-variants/dist/config.js").TVConfig<{
    color: {
        info: string;
        error: string;
    };
}, {
    color: {
        info: string;
        error: string;
    };
}>, {
    color: {
        info: string;
        error: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    color: {
        info: string;
        error: string;
    };
}, undefined, "grid gap-1 text-wrap rounded-xl border border-opacity-20 bg-opacity-10 p-2", import("tailwind-variants/dist/config.js").TVConfig<{
    color: {
        info: string;
        error: string;
    };
}, {
    color: {
        info: string;
        error: string;
    };
}>, unknown, unknown, undefined>>;
type Props = JSX.IntrinsicElements["p"] & {
    children?: ReactNode;
    variant?: typeof infoBannerClass.defaultVariants;
    title?: string;
    icon?: ReactNode;
};
export default function InfoBanner({ className, children, variant, title, icon, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
