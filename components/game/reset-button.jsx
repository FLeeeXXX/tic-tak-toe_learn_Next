import {React} from "react";

export function ResetButton({ handleClearCell }) {
    return <button className='cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded'
                   onClick={handleClearCell}>Сбросить</button>
}