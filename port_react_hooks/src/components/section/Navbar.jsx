import styles from './Navbar.module.css'
import { FaGithubSquare, FaLinkedin  } from "react-icons/fa"; //npm install react-icons --save
import Nav from 'react-bootstrap/Nav'; //npm install react-bootstrap bootstrap

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul className={styles.ulMenu}>
                <li className={styles.menu}><Nav.Link className={styles.item} href="">Projetos</Nav.Link></li>
                <li className={styles.menu}><Nav.Link className={styles.item} href="">Tecnologias</Nav.Link></li>
                <li className={styles.menu}><Nav.Link className={styles.item} href="">Sobre mim</Nav.Link></li>
            </ul>
            <ul> 
                <li><a href='https://github.com/luizmarcelolm' target="_blank"><FaGithubSquare size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/luizmarcelomota/' target="_blank"><FaLinkedin size={30}/></a></li>
            </ul>
        </div>
    )
}
export default Navbar