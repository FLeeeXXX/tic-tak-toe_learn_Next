import "../styles/global.css"

/*
    Это что-то вроде глобальной страницы, которая является оберткой над всеми страницами
    Поэтому, чтобы стили не были тупо прописаны сверху везде, мы можем описать его здесь и стили будут на всех страницах
 */

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}