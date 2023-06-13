export const SIZE = 32;
export const FPS = 60;

export const MoveDirection = {
    left: 0,
    right: 1,
    top: 2,
    down: 3, 
}

export const MAP = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 4, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 5, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
]

export const DX = [0, 1, 0, -1];
export const DY = [-1, 0, 1, 0];