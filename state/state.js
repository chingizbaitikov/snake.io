import DrawingData from "../drawingData";

export default class State {
    constructor(keyMapping) {
        this._keyMapping = keyMapping;
    }

    onDraw(ctx, screenWidth, screenHeight) {
        DrawingData.clearScreen(ctx, screenWidth, screenHeight)
    }

    onKeyDown(key) {
        if (!this._keyMapping) return;

        const action = this._keyMapping[key.toLowerCase()];
        if (action) {
            action();
        }
    }
}