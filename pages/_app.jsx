import "../styles/global.css"
import { Inter } from "next/font/google";

/*
    Это что-то вроде глобальной страницы, которая является оберткой над всеми страницами
    Поэтому, чтобы стили не были тупо прописаны сверху везде, мы можем описать его здесь и стили будут на всех страницах
 */

const inter = Inter({subsets: ["latin"]})

export default function App({ Component, pageProps }) {
    return (
    <div className={inter.className}>
        <Component {...pageProps} />
    </div>)
}