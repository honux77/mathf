class Mathf {
    static PI:number = 3.141592653589793;
    static E:number = 2.718281828459045;
    static isOdd = (num: number): boolean => (num %2 === 1);
    static isEven = (num: number): boolean => (num %2 === 0);
}

export { Mathf };
