import State from './state.js'
import GameState from './gameState'
import DrawingData from "../drawingData";

export default class MenuState extends State {
    constructor() {
        super({
            'enter': () => state = new GameState()
        });
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);

        const [x,y] = [screenWidth/2,screenHeight/2];
        DrawingData.fillText(ctx,'Snake IO', x, y, '80px sans-serif','white');
        DrawingData.fillText(ctx,'Press Enter to Return', x, y+70, '30px sans-serif','white');
    }
}