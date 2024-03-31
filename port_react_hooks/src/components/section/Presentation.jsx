import styles from './Presentation.module.css'
import imagem from '../../image/imagem2.svg'
import { useEffect, useState } from 'react' 

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['EM (2008) INICIEI O CURSO DE ENGENHARIA DA COMPUTAÇÃO, ONDE INICIEI MINHA PAIXÃO POR TECNOLOGIA, DURANTE O CURSO TRABALHEI EM DUAS EMPRESAS COMO ESTAGIÁRIO EM T.I ATUANDO NO SUPORTE TÉCNICO.', 
                      'EM (2013) ME FORMEI EM ENGENHARIA DA COMPUTAÇÃO E COMECEI A TRABALHAR COM MANUTENÇÃO E SUPORTE TÉCNICO EM CAMPO. ', 
                      'EM (2014) ACABEI MUDANDO DE CIDADE E COMECEI A TRABALHAR COM MANUTENÇÃO EM ELEVADORES.', 
                      'EM (2020) RETOMEI MEUS ESTUDOS E COMECEI A ME DEDICAR A PROGRAMAÇÃO.'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 500;
    const period2 = 10000;
    const [delta, setDelta] = useState(100)  

    useEffect(()=>{
        let ticher = setInterval (()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticher)}
    }, [text])

    const toType = () =>{          
       let i = loop % toRotate.length;
       let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(text.length) : fullText.substring(text.length)  
       setText(updatedText);

       if(!isDeleting && updatedText === fullText){
           setIsDeleting(true);
           setDelta(period2);
       }else if(isDeleting && updatedText === '') {
             setIsDeleting(false);
             setDelta(period);
             
             setLoop(loop+1);
       }
    }


    return(
        <div className={styles.presentation} id='Sobre_mim'>
            <h1>Sobre mim</h1>
            <div className={styles.div}>
                <ul>
                    <li>2008</li>
                    <li>2013</li>
                    <li>2014</li>
                    <li>2020</li>
                </ul>
            </div>
            <img src={imagem}/>
            <div className={styles.divText}>
                  <p>"  {text}  "</p> 
            </div>         
        </div>
    )
}
export default Presentation