import styles from './Skills.module.css'
import ButtonA from "../elementos/ButtonA"
import {useState} from 'react'
import javascript from '../../image/Skills/javascript.svg'
import css from '../../image/Skills/css.svg'
import html from '../../image/Skills/html.svg'
import react from '../../image/Skills/react.svg'
import csharp from '../../image/Skills/csharp.png'
import net from '../../image/Skills/net.png'
import bootstrap from '../../image/Skills/bootstrap.png'

function Skills(){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }
    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className={styles.skills} id='Tecnologias'>
           <h1>Principais tecnologias que utilizo</h1>
           <p>Como desenvolvedor front-end, utilizo uma variedade de tecnologias para criar
              interfaces web interativas e responsivas. Os principais recursos que uso
              incluem JavaScript, CSS e HTML para a base do desenvolvimento. Além disso, 
              utilizo o framework React para criar componentes reutilizáveis e dinâmicos.
            </p>

            {info === true &&(
                 <p>Para a integração com o back-end,
                    costumo utilizar C# e o framework .NET para desenvolver aplicações web robustas e escaláveis. 
                    O Bootstrap também é uma ferramenta essencial no meu kit de desenvolvimento, pois facilita a 
                    criação de layouts e estilos consistentes em diferentes dispositivos.<br></br><br></br>
                
                    Com a combinação dessas tecnologias, consigo desenvolver aplicações web modernas e eficientes, proporcionando uma ótima 
                    experiência de usuário. Estou sempre atualizado com as novas tendências e tecnologias do mercado
                    para continuar aprimorando minhas habilidades e entregando projetos de alta qualidade.
                </p>              
            )}
                    <div>
                        <img src={javascript}/>
                        <img src={html}/>
                        <img src={css}/>
                        <img src={react}/>
                        <img src={csharp}/>
                        <img src={net}/>
                        <img src={bootstrap}/>
                   </div>

                   {info === false&&(
                         <div className={styles.button} onClick={InfoOn}>
                            <ButtonA  text='Saber mais'/>
                        </div>
                   )}
        </div>
    )
}
export default Skills