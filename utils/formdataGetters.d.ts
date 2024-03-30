export declare function formdataGetters(data: FormData): {
    field: (name: string) => string | undefined;
    checkbox: (name: string) => boolean;
};
