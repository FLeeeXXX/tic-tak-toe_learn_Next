import clsx from 'clsx';
import {Profile} from "../profile";
import {GameSymbol} from "./game-symbol";
import {GAME_SYMBOLS} from "./constants";

import avatarSrc1 from './images/avatar-1.png'
import avatarSrc2 from './images/avatar-2.png'
import avatarSrc3 from './images/avatar-3.png'
import avatarSrc4 from './images/avatar-4.png'
import {useEffect, useState} from "react";

const players = [
    {
        id: 1,
        name: 'Lara',
        rating: 1280,
        avatar: avatarSrc1,
        symbol: GAME_SYMBOLS.CROSS,
    },
    {
        id: 2,
        name: 'Mrakobombobemcarc',
        rating: 1300,
        avatar: avatarSrc2,
        symbol: GAME_SYMBOLS.ZERO,
    },
    {
        id: 3,
        name: 'Paromovevg3',
        rating: 1400,
        avatar: avatarSrc3,
        symbol: GAME_SYMBOLS.VECTOR,
    },
    {
        id: 4,
        name: 'Paromovevg',
        rating: 1230,
        avatar: avatarSrc4,
        symbol: GAME_SYMBOLS.SQUARE,
    }
]

export function GameInfo({ className, playersCount, currentMove, isWinner, onPlayerTimeOver }) {
    return(
        <div className={clsx(className, "grid grid-cols-2 gap-3 justify-between rounded-2xl bg-white shadow-md px-8 py-4")}>
            {
                players.slice(0,playersCount).map((player, index) => (
                    <PlayerInfo
                        key={player.id}
                        playerInfo={player}
                        isRight={index % 2 === 1}
                        isTimerRunning={currentMove === player.symbol && !isWinner}
                        onTimeOver={() => onPlayerTimeOver(player.symbol)}
                    />
                ))
            }
        </div>
    );
}


function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {

    /*
    useEffect позволяет сделать работу не на пользовательское событие, а на изменение состояния внутри самого React
    */

    const [seconds, setSeconds] = useState(60);

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondsString = String(seconds % 60).padStart(2, "0");
    const isDanger = seconds < 10;

    useEffect(() => {
        if (isTimerRunning) {
            const interval = setInterval(() => {
                setSeconds(s => Math.max(s - 1, 0));
            }, 1000)


            // ф-я для остановки и обновления (нужно чтобы таймер обновлялся)

            /*
            Предназначен такой функционал базово для такого, чтоб useEffect отследил какие-то изменения, что-то сделал
            и как только он что-то сделал, например, нам хочется его закончить, перед работой какого-то другого useEffect (пример - другой таймер)
            */
            return () => {
                clearInterval(interval);
                setSeconds(60)
            }
        }
    }, [isTimerRunning]);

    useEffect(() => {
        if (seconds === 0) {
            onTimeOver();
        }
    }, [seconds]);

    const getTimerColor = () =>{
        if(isTimerRunning){
            return isDanger ? "text-orange-600" : "text-slate-900"
        }
        return 'text-slate-200';
    }

    return (
        <div className="flex gap-3 items-center">
            <div className={clsx("relative", isRight && "order-3")}>
                <Profile
                    className="w-44"
                    name={playerInfo.name}
                    rating={playerInfo.rating}
                    avatar={playerInfo.avatar}
                />
                <div
                    className="flex h-5 w-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center">
                    <GameSymbol
                        symbol={playerInfo.symbol}
                    />
                </div>
            </div>
            <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}/>
            <div className={clsx("w-[60px] text-lg font-semibold", isRight && "order-1", getTimerColor())}>{minutesString}:{secondsString}</div>
        </div>
    )
}