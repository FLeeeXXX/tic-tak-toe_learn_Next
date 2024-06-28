import clsx from 'clsx';
import {Profile} from "../profile";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";


export function GameInfo({ className }) {
    return(
        <div className={clsx(className, "flex justify-between rounded-2xl bg-white shadow-md px-8 py-4")}>
            <div className="flex gap-3 items-center">
                <div className="relative">
                    <Profile className="w-44"/>
                    <div
                        className="flex h-5 w-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center">
                        <CrossIcon/>
                    </div>
                </div>
                <div className="h-6 w-px bg-slate-200"/>
                <div className="text-slate-900 text-lg font-semibold">01:08</div>
            </div>

            <div className="flex gap-3 items-center">
                <div className="text-orange-600 text-lg font-semibold">00:08</div>
                <div className="h-6 w-px bg-slate-200"/>
                <div className="relative">
                    <Profile className="w-44"/>
                    <div
                        className="flex h-5 w-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center">
                        <ZeroIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
}