import { MOVE_ORDER } from "../constants";


export function getNextMove(CurrentMove, playersCount, playersTimeOver){

    const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(symbol => !playersTimeOver?.includes(symbol));
    const NextMoveIndex = slicedMoveOrder.indexOf(CurrentMove) + 1
    return slicedMoveOrder[NextMoveIndex] ?? slicedMoveOrder[0];
}