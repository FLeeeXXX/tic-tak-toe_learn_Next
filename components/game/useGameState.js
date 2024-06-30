import {useState} from "react";
import {GAME_SYMBOLS, MOVE_ORDER} from "./constants";

function getNextMove(CurrentMove){
    const NextMoveIndex = MOVE_ORDER.indexOf(CurrentMove) + 1
    return MOVE_ORDER[NextMoveIndex] ?? MOVE_ORDER[0];
}

export function useGameState() {

    /*
    Здесь используется функция инициализации. Функция передается как аргумент в useState, и она вызывается только один
    раз при первом рендере компонента. Это полезно, если инициализация состояния является дорогостоящей операцией,
    так как она не будет выполняться при каждом рендере компонента, а только при первом.

    Запись (с функцией инициализации) должна использоваться, если создание начального состояния является дорогостоящим
    процессом, который вы хотите выполнить только один раз, при первом рендере компонента.
    */

    const [{cells, currentMove}, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS,
    }))

    const nextMove = getNextMove(currentMove);

    const handleCellClick = (index) =>{
        setGameState((lastGameState) =>{

            if (lastGameState.cells[index]){
                return lastGameState
            }

            return {
                ...lastGameState,
                currentMove: getNextMove(lastGameState.currentMove),
                cells: lastGameState.cells.map((cell, i) => i === index ? lastGameState.currentMove : cell),
            }
        })
    }

    return {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
    }
}