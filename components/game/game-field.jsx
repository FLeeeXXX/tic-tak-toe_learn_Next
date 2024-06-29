import clsx from "clsx";
import {ZeroIcon} from "./icons/zero-icon";
import {CrossIcon} from "./icons/cross-icon";
import {UiButton} from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null)

export function GameField({ className }) {

    return(
        <div className={clsx(className,"rounded-2xl bg-white shadow-md px-8 pt-5 pb-7")}>
            <div className="flex gap-3 items-center">
                <div className="mr-auto">
                    <div className="flex items-center gap-1 text-xl leading-tight font-bold">
                        Ход: <ZeroIcon className="w-5 h-5"/>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
                        Следующий: <CrossIcon/>
                    </div>
                </div>
                <UiButton size="md" variant="primary">Ничья</UiButton>
                <UiButton size="md" variant="outline">Сдаться</UiButton>
            </div>
            <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3">
                {cells.map((_, index) => (
                    <button key={index} className="border border-slate-200 -ml-px -mt-px flex items-center justify-center">
                        <CrossIcon className="w-5 h-5"/>
                    </button>
                ))}
            </div>
        </div>
    );
}