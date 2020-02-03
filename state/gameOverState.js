import State from './state.js'
import MenuState from './menuState'
import DrawingData from "../drawingData";
export default class GameOverState extends State {
    constructor() {
        super({
            'enter': () => state = new MenuState()
        });
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);

        const [x,y] = [screenWidth/2,screenHeight/2];
        DrawingData.fillText(ctx,'GameOver', x, y, '80px sans-serif','red');
        DrawingData.fillText(ctx,'Press Enter to Return', x, y+70, '40px sans-serif','white');
    }
}