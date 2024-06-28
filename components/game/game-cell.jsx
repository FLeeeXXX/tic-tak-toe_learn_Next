import {React} from "react";
import {GameSymbol} from "./game-symbol";
import {clsx} from "clsx";

// Для динамических стилей использовать clsx

export function GameCell({ isWinner, onClick, symbol }) {
    return (
        <button
            className={clsx(
                'flex items-center justify-center -ml-px -mt-px border border-gray-400',
                !isWinner && 'bg-transparent',
                isWinner && 'bg-red-300'
            )}
            onClick={onClick}
        >
            {symbol ? <GameSymbol symbol={symbol} /> : null}
        </button>
    )
}