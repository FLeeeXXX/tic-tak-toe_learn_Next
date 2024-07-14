import {React, useState} from 'react';
import { Header } from '../components/header';
import { GameField, GameInfo, GameTitle } from "../components/game";
import { useGameState } from "../components/game";
import {GameSymbol} from "../components/game/game-symbol";
import {UiModal} from "../components/uikit/ui-modal";
import {UiButton} from "../components/uikit/ui-button";

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
            <UiModal width="md" isOpen={winnerSymbol} onClose={() => console.log("close")}>
                <UiModal.Header>Игра завершена!</UiModal.Header>
                <UiModal.Body>
                    <div className="text-sm">
                        Победитель: <span className="text-teal-600">Paromovevg</span>
                    </div>
                </UiModal.Body>
                <UiModal.Footer>
                    <UiButton size="md" variant="outline">Вернуться</UiButton>
                    <UiButton size="md" variant="primary">Играть снова</UiButton>
                </UiModal.Footer>
            </UiModal>
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
