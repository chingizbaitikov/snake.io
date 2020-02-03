import FieldViews from "./fieldViews";

import DrawingData from "../drawingData";


export default class AppleViews {
    static draw(ctx, apple) { // статик вызывает не создавая обьект
        const cellX = FieldViews.centeringShiftX+ apple.x * FieldViews.cellWidth;
        const cellY = FieldViews.centeringShiftY + apple.y * FieldViews.cellHeight;

        const [x,y] =[cellX,cellY];
        const [width,height] =(FieldViews.cellWidth-1,FieldViews.cellHeight-1);
        DrawingData.fillRect(ctx,x,y, width,height,apple.color);
    }
}