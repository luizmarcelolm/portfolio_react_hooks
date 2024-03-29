import styles from './Skills.module.css'
import Button from "../elementos/Button"

function Skills(){
    return(
        <div className={styles.skills}>
           <h1>Principais tecnologias que utilizo</h1>
           <p>Como desenvolvedor front-end, utilizo uma variedade de tecnologias para criar
              interfaces web interativas e responsivas. Os principais recursos que uso
              incluem JavaScript, CSS e HTML para a base do desenvolvimento. Além disso, 
              utilizo o framework React para criar componentes reutilizáveis e dinâmicos.
            </p>
            <div className={styles.button}>
                <Button link="https://www.linkedin.com/in/luizmarcelomota/" text='Saber mais'/>
            </div>
        </div>
    )
}
export default Skills