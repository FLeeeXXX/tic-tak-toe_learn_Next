export function GameLayout({ backLink, title, gameInfo, playersList, gameMoveInfo, actions, gameCells }) {

    return (
        <div className="pb-10">
            <div className='pl-2'>
                {backLink}
                {title}
                {gameInfo}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 justify-between rounded-2xl bg-white shadow-md px-8 py-4">
                {playersList}
            </div>
            <div className="mt-6 rounded-2xl bg-white shadow-md px-8 pt-5 pb-7">
                <div className="flex gap-3 items-center">
                    <div className="mr-auto">
                        {gameMoveInfo}
                    </div>
                    {actions}
                </div>
                <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19,30px)] pl-px pt-px mt-3">
                    {gameCells}
                </div>
            </div>
        </div>
    );

}