import { Link } from 'react-router-dom'

import Container from './Container';
import styles from './Navbar.module.css';
//import {BsFillPlusCircleFill, BsFillHouseDoorFill,BsFillPersonLinesFill} from 'react-icons/bs'



function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">
                            <button className={styles.button}>
                                <span>Home</span>
                            </button>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/fornecedores">
                        <button className={styles.button}><span>Fornecedor</span></button></Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/clientes">
                            <button className={styles.button}>
                                <span>Cliente</span>
                            </button>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/form">
                        <button className={styles.button}><span>Cadastro</span></button></Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;