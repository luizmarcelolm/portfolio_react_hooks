import styles from './Footer.module.css'
import { FaGithubSquare, FaLinkedin  } from "react-icons/fa"; //npm install react-icons --save

function Footer(){
    return(
        <div className={styles.footer}>
                <ul className={styles.ulFooter}>
                    <li>Meu contato:</li>
                    <li>(12) 97401-5482</li>
                </ul>
      
                <ul className={styles.ulFooter}>
                        <li>Email:</li>
                        <li>luizmarcelolm@hotmail.com</li>
                </ul>
       
          
                <ul className={styles.ulFooterIcon}> 
                        <li><a href='https://github.com/luizmarcelolm' target="_blank"><FaGithubSquare size={40}/></a></li>
                        <li><a href='https://www.linkedin.com/in/luizmarcelomota/' target="_blank"><FaLinkedin size={40}/></a></li>
               </ul>
          
        </div>
    )
}
export default Footer