import style from './Footer.module.css'

function Footer() {
    return (
    <footer className={style.footer}>
        <p className={style.copy_Right}>
            <samp>Cellfy.Br</samp> &copy;2022
        </p>
    </footer>)
}
export default Footer;
