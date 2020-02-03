import State from './state.js'
import PauseState from './pauseState.js'
import GameOverState from './gameOverState.js'

import FieldModel from '../models/fieldModel.js'
import SnakeModel from '../models/snakeModel.js'

import FieldViews from "../views/fieldViews";
import SnakeViews from "../views/snakeViews";
import DrawingData from "../drawingData";


export default class GameState extends State {
    constructor() {
        let field = new FieldModel(25, 25);
        let snake = new SnakeModel(0, 0, 3, field);
        field.createApple(snake);

        super({
            'w': () =>      snake.turnUp(),
            'a': () =>      snake.turnLeft(),
            's': () =>      snake.turnDown(),
            'd': () =>      snake.turnRight(),
            ' ': () =>      state = new PauseState(this),
        });

        this._field = field;
        this._snake = snake;
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);

        this._snake.move();
        if(this._snake.isDead){
            state = new GameOverState();
        }

        FieldViews.recalculateDrawingSizes(screenWidth, screenHeight, this._field);
        FieldViews.draw(ctx, this._field);
        SnakeViews.draw(ctx, this._snake);

        const [x,y] = [screenWidth/2,55];
        DrawingData.fillText(ctx,'Score: ${this._snake.score}', x, y, '38px sans-serif','white');
    }
}