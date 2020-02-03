import AppleViews from "./appleViews";

import DrawingData from "../drawingData";

export default class FieldViews {
    static cellWidth = 16;
    static cellHeight = 16;
    static centeringShiftX;
    static centeringShiftY;

    static recalculateDrawingSizes(screenWidth, screenHeight, field) {
        const fieldPixelWidth = field.width * this.cellWidth;
        const fieldPixelHeight = field.height * this.cellWidth;
        centeringShiftX = (screenWidth - fieldPixelWidth) / 2;
        centeringShiftY = (screenHeight - fieldPixelHeight) / 2;
    }

    static draw(ctx, field) {
        for (let i = 0; i < field.height; i++) {
            for (let j = 0; j < field.width; j++) {
                const cellX = this.centeringShiftX + j * this.cellWidth;
                const cellY = this.centeringShiftY + i * this.cellHeight;

                const [x,y] = [cellX,cellY];
                const [width,height] = [this.cellWidth-1,this.cellHeight-1];

                DrawingData.fillRect(ctx,x,y,width,height,field.color);
            }
        }

        if (field.apple) {
            AppleViews.draw(ctx,field.apple);
        }
    }
}