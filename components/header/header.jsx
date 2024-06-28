import Image from "next/image";
import logoSrc from "./header_logo.svg"
import {Profile} from "../profile";
import {ArrowDownIcon} from "./icons/arrow-down-icon";


export function Header(){
    return(
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
        <Image src={logoSrc} alt="logo"/>
        <div className="h-8 w-px ml-6 mr-6 bg-slate-200" />
        <button className="w-44 rounded-lg bg-teal-600 text-white px-5 py-2 text-2xl leading-tight hover:bg-teal-500 transition-colors">Играть</button>
        <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
            <Profile/>
            <ArrowDownIcon/>
        </button>
    </header>);
}