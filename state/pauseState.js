import State from './state'
import DrawingData from "../drawingData";
export default class PauseState extends State {
    constructor(previousState) {
        super({
            ' ': () => state = previousState
        });
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);

        const [x,y] = [screenWidth/2,screenHeight/2];
        DrawingData.fillText(ctx,'Press Space to resume game', x, y, '30px sans-serif','red');
    }
}