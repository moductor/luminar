import { ReactNode } from '../../node_modules/react';

export declare const cardClass: import('tailwind-variants').TVReturnType<{} | {} | {}, undefined, "rounded-xl border-2 border-gray-300 bg-gray-100 p-4 shadow-lg shadow-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:shadow-gray-900", import("tailwind-variants/dist/config.js").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("tailwind-variants").TVReturnType<unknown, undefined, "rounded-xl border-2 border-gray-300 bg-gray-100 p-4 shadow-lg shadow-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:shadow-gray-900", import("tailwind-variants/dist/config.js").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type Props = JSX.IntrinsicElements["div"] & {
    children?: ReactNode;
};
export declare function Card({ className, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
