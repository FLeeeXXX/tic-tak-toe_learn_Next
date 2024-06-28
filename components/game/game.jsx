import {React} from "react";
import {GameInfo} from "./game-info";
import {GameCell} from "./game-cell";
import {useGameState} from "./use-game-state";
import {ResetButton} from "./reset-button";

export function Game() {
    const {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleClearCell,
        winnerSymbol,
        isDraw
    } = useGameState();

    return (
        <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
            <GameInfo
                isDraw={isDraw}
                winnerSymbol={winnerSymbol}
                currentStep={currentStep}
            />
            <div className='grid pt-px pl-px grid-cols-[repeat(3,30px)] grid-rows-game-field'>
                {
                    cells.map((symbol, index) => (
                        <GameCell
                            symbol={symbol}
                            isWinner={winnerSequence?.includes(index)}
                            key={index}
                            onClick={() => handleCellClick(index)}
                        />
                    ))
                }
            </div>
            <ResetButton handleClearCell={handleClearCell}/>
        </div>
    )
}