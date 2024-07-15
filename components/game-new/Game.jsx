import {GameLayout} from "./ui/GameLayout";
import {BackLink} from "./ui/BackLink";
import {GameInfo} from "./ui/GameInfo";
import {GameTitle} from "./ui/GameTitle";
import {PLAYERS} from "./constants";
import {PlayerInfo} from "./ui/PlayerInfo";
import {GameMoveInfo} from "./ui/GameMoveInfo";
import { GameCell } from "./ui/GameCell";
import {GameOverModal} from "./ui/GameOverModal";
import {useReducer} from "react";
import {GAME_STATE_ACTIONS, gameStateReducer, initGameState} from "./model/gameStateReducer";
import {computeWinner} from "./model/computeWinner";
import {getNextMove} from "./model/getNextMove";


const PLAYERS_COUNT = 2;

export function Game(){

    const [gameState, dispatch] = useReducer(gameStateReducer, { playersCount: PLAYERS_COUNT }, initGameState);

    const winnerSequence = computeWinner(gameState.cells)
    const nextMove = getNextMove(gameState.currentMove, PLAYERS_COUNT, []);
    const winnerSymbol = computeWinner(gameState, { winnerSequence, nextMove });
    const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol);
    const { cells, currentMove } = gameState;

    return (
        <>
            <GameLayout
                backLink={<BackLink/>}
                gameInfo={
                    <GameInfo isRatingGame playersCount={4} timeMode={'1 мин на ход'}/>
                }
                title={<GameTitle/>}
                playersList={
                    PLAYERS.slice(0,PLAYERS_COUNT).map((player, index) =>
                        <PlayerInfo
                            key={player.id}
                            avatar={player.avatar}
                            isRight={index % 2 === 1}
                            name={player.name}
                            rating={player.rating}
                            symbol={player.symbol}
                            seconds={60}
                        />
                    )
                }
                gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove}/>}
                gameCells={cells.map((cell, index) => (
                    <GameCell
                        disabled={!!winnerSymbol}
                        onClick={()=>{
                            dispatch({
                                type: GAME_STATE_ACTIONS.CELL_CLICK,
                                index,
                            })
                        }}
                        key={index}
                        isWinner={winnerSequence?.includes(index)}
                        symbol={cell}
                    />
                ))}
            />
            <GameOverModal
                players={
                    PLAYERS.slice(0,PLAYERS_COUNT).map((player, index) =>
                        <PlayerInfo
                            key={player.id}
                            avatar={player.avatar}
                            isRight={index % 2 === 1}
                            name={player.name}
                            rating={player.rating}
                            symbol={player.symbol}
                            seconds={60}
                        />
                    )
                }
                winnerName={winnerPlayer?.name}

            />
        </>
    );

}