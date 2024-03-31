import styles from './Presentation.module.css'
import imagem from '../../image/imagem2.svg'
import { useEffect, useState } from 'react' 

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['Em 2013 me formei em Engenharia da Computação e iniciei minha carreira em T.I', 'Em 2014 mudei de cidade e acabei indo para o ramo de manutenção em elevadores.', 'Em 2020 iniciei minha jornada em busca de retornar a área de programação, iniciei meus estudos novamente construindo projetos com diversas tecnologias.', 'Em 2024 iniciei curso de Desenvolvedor FullStack na Escola DNC onde estou aprendendo muito e me sinto preparado para o mercado de trabalho. '];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 90;
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
       let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)  
       setText(updatedText);

       if(!isDeleting && updatedText === fullText){
           setIsDeleting(true);
           setDelta(period);
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
                    <li>2013</li>
                    <li>2014</li>
                    <li>2020</li>
                    <li>2024</li>
                </ul>
            </div>
            <img src={imagem}/>
            <div className={styles.divText}>
                  <p>" {text} "</p> 
            </div>         
        </div>
    )
}
export default Presentation