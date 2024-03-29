import styles from './Projects.module.css'
import Card from '../elementos/Cards'
import imagem1 from '../../image/imagem1.svg'


function Projects(){
    return(
        <div className={styles.projects} id="Projects">
            <h2>Projetos</h2>
                <div className={styles.divCards}>
                    <Card
                        imagem={imagem1}
                        title="TELA CEP/CLIMA"
                        description="O objetivo desse projeto foi consumir API de CEP e Clima, e criar uma tela onde o usuário irá informar nome, email, cep, latitude, longitude, e a aplicação irá retornar os dados conforme informações digitadas." 
                        tech="Javascript - css - html - react - api"
                        repo="https://github.com/luizmarcelolm/tela_api" 
                        site="https://tela-api.vercel.app/" />    

                    <Card
                        imagem={imagem1}
                        title="TELA CEP/CLIMA"
                        description="O objetivo desse projeto foi consumir API de CEP e Clima, e criar uma tela onde o usuário irá informar nome, email, cep, latitude, longitude, e a aplicação irá retornar os dados conforme informações digitadas." 
                        tech="Javascript - css - html - react - api"
                        repo="https://github.com/luizmarcelolm/tela_api" 
                        site="https://tela-api.vercel.app/" />                    
                </div>
        </div>
    )
}
export default Projects