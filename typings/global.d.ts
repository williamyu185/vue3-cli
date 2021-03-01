interface Window {
    globalUniquenessCoordinationCliTopLevelObj: Object;
}
declare type CCIndexable<T> = {
    [key: string]: T
};
// 将泛型 T 中的所有属性转化为可选属性
type CCPartial<T> = {
    [P in keyof T]?: T[P];
};
// 将泛型 T 中的所有属性转化为必选属性
type CCRequired<T> = {
    [P in keyof T]-?: T[P];
};
// 将泛型 T 中的所有属性转化为只读属性
type CCReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
// 从泛型 T 中检出指定的属性并组成一个新的对象类型
type CCPick<T, K extends keyof T> = {
    [P in K]: T[P];
}
// Record 允许从 Union 类型中创建新类型，Union 类型中的值用作新类型的属性。
type CCRecord<K extends keyof any, T> = {
    [P in K]: T;
};
// 从泛型 T 中排除可以赋值给泛型 U 的类型
type CCExclude<T, U> = T extends U ? never : T;
// 从泛型 T 中提取可以赋值给泛型 U 的类型
type CCExtract<T, U> = T extends U ? T : never;
// 从泛型 T 中提取出不在泛型 K 中的属性类型，并组成一个新的对象类型
type CCOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// 从泛型 T 中排除掉 null 和 undefined
type CCNonNullable<T> = T extends null | undefined ? never : T;
// 以元组的方式获得函数的入参类型
type CCParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
// 以元组的方式获得构造函数的入参类型
type CCConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
// 获得函数返回值的类型
type CCReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// 获得构造函数返回值的类型
type CCInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;





declare let process;
