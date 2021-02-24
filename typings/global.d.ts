interface Window {
    globalUniquenessCoordinationCliTopLevelObj: Object;
}
declare type Indexable<T> = {
    [key: string]: T
};

declare global {
    export interface ObjectConstructor {
        setPrototypeOf(obj: any, proto: any);
    }
}