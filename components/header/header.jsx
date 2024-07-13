import Image from "next/image";
import logoSrc from "./header_logo.svg"
import {Profile} from "../profile";
import {ArrowDownIcon} from "./icons/arrow-down-icon";
import {UiButton} from "../uikit/ui-button";


export function Header(){
    return(
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
        <Image src={logoSrc} alt="logo"/>
        <div className="h-8 w-px ml-6 mr-6 bg-slate-200" />
        <UiButton className="w-44" variant="primary" size="lg">Играть</UiButton>
        <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
            <Profile name="Paromovevg" rating="1230"/>
            <ArrowDownIcon/>
        </button>
    </header>);
}