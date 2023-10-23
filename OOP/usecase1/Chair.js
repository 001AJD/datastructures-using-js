class Chair
{
    constructor(color, seatHeight, recliningAngle, backSupport, isHeightAdjustable, isMovable)
    {
        this.color = color;
        this.seatHeight = seatHeight;
        this.recliningAngle = recliningAngle;
        this.backSupport = backSupport;
        this.isHeightAdjustable = isHeightAdjustable;
        this.isMovable = isMovable;
    }
    adjustableHeight () {};
    adjustableAngle() {};
    moveChair() {};
}

const newChair = new Chair('Blue', '30 inch', '90 degrees', true, true, true);

console.dir(Chair);
console.log(Chair);