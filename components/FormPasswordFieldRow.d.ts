/// <reference types="react" />
type Props = Omit<JSX.IntrinsicElements["input"], "type"> & {
    label?: string;
    checkStrength?: boolean;
    onStrengthChange?: (strength: StrengthState) => unknown;
};
export default function FormPasswordFieldRow({ label, checkStrength, onStrengthChange, className, onChange, ...props }: Props): import("react/jsx-runtime").JSX.Element;
declare function getStrength(password: string): {
    state: number;
    strong: boolean;
    containsNumbers?: undefined;
    containsLowerCase?: undefined;
    containsUppperCase?: undefined;
    containsSpecial?: undefined;
    noWhiteSpace?: undefined;
    longEnough?: undefined;
} | {
    containsNumbers: boolean;
    containsLowerCase: boolean;
    containsUppperCase: boolean;
    containsSpecial: boolean;
    noWhiteSpace: boolean;
    longEnough: boolean;
    state: number;
    strong: boolean;
};
export type StrengthState = ReturnType<typeof getStrength>;
export {};
