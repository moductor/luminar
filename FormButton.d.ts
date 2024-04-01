import { ReactNode } from '../../node_modules/react';

export declare const formButtonClass: import('tailwind-variants').TVReturnType<{} | {} | {}, undefined, "inline-block rounded-lg bg-gray-900 px-3 py-2 text-center font-bold leading-none text-gray-50 focus:outline-none focus:ring dark:bg-gray-50 dark:text-gray-950", import("tailwind-variants/dist/config.js").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "inline-block rounded-lg bg-gray-900 px-3 py-2 text-center font-bold leading-none text-gray-50 focus:outline-none focus:ring dark:bg-gray-50 dark:text-gray-950", import("tailwind-variants/dist/config.js").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type Props = JSX.IntrinsicElements["button"] & {
    children?: ReactNode;
};
export declare function FormButton({ className, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
