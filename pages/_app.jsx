import "../styles/global.css"
import { Inter } from "next/font/google";
import clsx from "clsx";

/*
    Это что-то вроде глобальной страницы, которая является оберткой над всеми страницами
    Поэтому, чтобы стили не были тупо прописаны сверху везде, мы можем описать его здесь и стили будут на всех страницах
 */

const inter = Inter({subsets: ["latin"]})

export default function App({ Component, pageProps }) {
    return (
    <div className={clsx(inter.className, 'text-slate-900')}>
        <Component {...pageProps} />
        <div id="modals"></div>
    </div>)
}