import {useState} from "react";
import {GAME_SYMBOLS} from "./constants";
import {computeWinner, getNextMove} from "./model";


export function useGameState(playersCount) {
    /*
    Здесь используется функция инициализации. Функция передается как аргумент в useState, и она вызывается только один
    раз при первом рендере компонента. Это полезно, если инициализация состояния является дорогостоящей операцией,
    так как она не будет выполняться при каждом рендере компонента, а только при первом.

    Запись (с функцией инициализации) должна использоваться, если создание начального состояния является дорогостоящим
    процессом, который вы хотите выполнить только один раз, при первом рендере компонента.
    */

    const [{cells, currentMove, playersTimeOver}, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS,
        playersTimeOver: [],
    }))

    const winnerSequence = computeWinner(cells)
    const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
    const winnerSymbol = nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];

    const handleCellClick = (index) =>{
        setGameState((lastGameState) =>{

            if (lastGameState.cells[index]){
                return lastGameState
            }

            return {
                ...lastGameState,
                currentMove: getNextMove(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver),
                cells: lastGameState.cells.map((cell, i) => i === index ? lastGameState.currentMove : cell),
            }
        })
    }

    const handlePlayerTimeOver = (symbol) =>{
        setGameState((lastGameState) =>{
            return {
                ...lastGameState,
                playersTimeOver: [...lastGameState.playersTimeOver, symbol],
                currentMove: getNextMove(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver),
            }
        })
    }

    return {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        winnerSequence,
        handlePlayerTimeOver,
        winnerSymbol
    }
}