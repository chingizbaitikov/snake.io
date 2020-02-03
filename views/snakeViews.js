import FieldViews from "./fieldViews";

import DrawingData from "../drawingData";


export default class Snake {
    draw(ctx,snake) {
        for (const segment of snake.body) {
            const cellX = FieldViews.centeringShiftX + segment.x * FieldViews.cellWidth;
            const cellY = FieldViews.centeringShiftY + segment.y * FieldViews.cellHeight;

            const [x,y] =[cellX,cellY];
            const [width,height] =(FieldViews.cellWidth-1, FieldViews.cellHeight-1);
            DrawingData.fillRect(ctx,x,y, width,height,snake.color);
        }
    }
}