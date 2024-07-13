import clsx from "clsx";
import {UiButton} from "../uikit/ui-button";
import {GameSymbol} from "./game-symbol";


export function GameField({ className, cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol}) {

    const actions = (
        <>
            <UiButton size="md" variant="primary">Ничья</UiButton>
            <UiButton size="md" variant="outline">Сдаться</UiButton>
        </>
    )

    return (
        <GameFiledLayout className={className}>
            <GameMoveInfo
                actions={actions}
                currentMove={currentMove}
                nextMove={nextMove}
            />
            <GameGrid>
                {cells.map((symbol, index) => (
                    <GameCell
                        disabled={!!winnerSymbol}
                        onClick={()=>{
                            handleCellClick(index)
                        }}
                        key={index}
                        isWinner={winnerSequence?.includes(index)}
                    >
                        {symbol && <GameSymbol symbol={symbol} className="h-5 w-5"/>}
                    </GameCell>
                ))}
            </GameGrid>
        </GameFiledLayout>
    );
}

function GameCell({children, onClick, isWinner, disabled}) {
    return(
        <button
            disabled={disabled}
            onClick={onClick}
            className={clsx("border border-slate-200 -ml-px -mt-px flex items-center justify-center", isWinner && "bg-orange-600/10")}>
            {children}
        </button>
    )
}

function GameFiledLayout({children, className}) {
    return (
        <div className={clsx(className,"rounded-2xl bg-white shadow-md px-8 pt-5 pb-7")}>
            {children}
        </div>
    );
}

function GameMoveInfo({actions, currentMove, nextMove}) {
    return(
        <div className="flex gap-3 items-center">
            <div className="mr-auto">
                <div className="flex items-center gap-1 text-xl leading-tight font-bold">
                    Ход: <GameSymbol symbol={currentMove} className="w-5 h-5"/>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
                    Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3"/>
                </div>
            </div>
            {actions}
        </div>
    );
}

function GameGrid({children}) {
    return (
        <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3">
            {children}
        </div>
    );
}