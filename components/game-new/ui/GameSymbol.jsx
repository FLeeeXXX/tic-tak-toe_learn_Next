import {SquareIcon} from "./icons/square-icon";
import {CrossIcon} from "./icons/cross-icon";
import {VectorIcon} from "./icons/vector-icon";
import {ZeroIcon} from "./icons/zero-icon";
import {GAME_SYMBOLS} from "../constants";


export function GameSymbol({symbol, className}) {
    const Icon = {
        [GAME_SYMBOLS.CROSS]: CrossIcon,
        [GAME_SYMBOLS.ZERO]: ZeroIcon,
        [GAME_SYMBOLS.SQUARE]: SquareIcon,
        [GAME_SYMBOLS.VECTOR]: VectorIcon,
    }[symbol] ?? CrossIcon

    return <Icon className={className}/>
}