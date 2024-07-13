import {React, useState} from 'react';
import { Header } from '../components/header';
import { GameField, GameInfo, GameTitle } from "../components/game";
import { useGameState } from "../components/game";
import {GameSymbol} from "../components/game/game-symbol";

export default function HomePage() {

    const [playersCount] = useState(4);

    const {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
        winnerSequence,
        handlePlayerTimeOver,
        winnerSymbol
    } = useGameState(playersCount)

    return (
    <div className="bg-slate-50 min-h-screen">
        <Header/>
        <main className="pt-6 mx-auto w-max">
            <GameTitle playersCount={playersCount} />
            <GameInfo
                currentMove={currentMove}
                playersCount={playersCount}
                className="mt-4"
                isWinner={!!winnerSymbol}
                onPlayerTimeOver={handlePlayerTimeOver}
            />
            {
                winnerSymbol && (
                    <div className="my-4">
                        <GameSymbol symbol={winnerSymbol}/>
                    </div>
                )
            }
            <GameField
                cells={cells}
                currentMove={currentMove}
                handleCellClick={handleCellClick}
                nextMove={nextMove}
                playersCount={playersCount}
                winnerSequence={winnerSequence}
                winnerSymbol={winnerSymbol}
                className="mt-7"
            />
        </main>
    </div>
    )
}
