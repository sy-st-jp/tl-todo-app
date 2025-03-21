export const getKeys = <T extends Record<string, unknown>>(obj: T): Array<keyof T> => {
    return Object.keys(obj) as Array<keyof T>;
};
