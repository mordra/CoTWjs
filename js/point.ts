///<reference path="references.ts"/>

class Point {
    X:number;
    Y:number;

    constructor (x?:number, y?:number) {
        this.X = x;
        this.Y = y;
    }

    Equals(otherPoint : Point) : boolean {
        return (this.X === otherPoint.X && this.Y === otherPoint.Y);
    }
}