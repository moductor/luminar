/// <reference types="react" />
type Props = Omit<JSX.IntrinsicElements["input"], "type" | "className" | "value" | "defaultValue"> & {
    label?: string;
};
export default function FormCheckboxRow({ label, checked, defaultChecked, onChange, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
