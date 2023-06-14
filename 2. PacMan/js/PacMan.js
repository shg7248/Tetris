import { MoveDirection } from "./Constant.js";

export default function PacMan(context, x, y) {
    this.context = context;
    this.x = x;
    this.y = y;

    this.rx = x;
    this.ry = y;

    this.currentMove = MoveDirection.left;
    this.requestedMove = this.currentMove;

    this.loadImages();
    this.keydown();
}

PacMan.prototype.loadImages = function() {
    const left = new Image();
    left.src = './images/팩맨왼쪽.png';

    const right = new Image();
    right.src = './images/팩맨오른쪽.png';
    
    const top = new Image();
    top.src = './images/팩맨위쪽.png';

    const down = new Image();
    down.src = './images/팩맨아래쪽.png';

    this.images = [left, right, top, down];
}

PacMan.prototype.draw = function() {
    this.context.drawImage(this.images[this.currentMove], this.x, this.y, 1, 1);
}

PacMan.prototype.keydown = function() {
    const that = this;
    document.addEventListener('keydown', function(event) {
        switch(event.keyCode) {
            case 37:
                that.requestedMove = MoveDirection.left;
                break;
            case 39:
                that.requestedMove = MoveDirection.right;
                break;  
            case 38:
                that.requestedMove = MoveDirection.top;
                break;  
            case 40:
                that.requestedMove = MoveDirection.down;
                break;
        }
    })
}

PacMan.prototype.move = function(board) {

    const x = Math.round(this.x * 1e2) / 1e2;
    const y = Math.round(this.y * 1e2) / 1e2;

    const isIntegerXY = Number.isInteger(x) && Number.isInteger(y);

    if(isIntegerXY) {
        this.rx = x;
        this.ry = y;
    }

    if(this.currentMove !== this.requestedMove) {
        if(isIntegerXY) {
            if(!board.isWall(x, y, this.requestedMove)) {
                this.currentMove = this.requestedMove;
            }
        }
    }

    if(isIntegerXY && board.isWall(x, y, this.currentMove)) {
        return;
    }

    switch(this.currentMove) {
        case MoveDirection.left:
            this.x -= 0.05;
            break;
        case MoveDirection.right:
            this.x += 0.05;
            break;
        case MoveDirection.top:
            this.y -= 0.05;
            break;
        case MoveDirection.down:
            this.y += 0.05;
            break;
    }
}