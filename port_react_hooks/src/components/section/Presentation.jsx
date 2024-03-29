import styles from './Presentation.module.css'
import imagem from '../../image/imagem2.svg'

function Presentation(){
    return(
        <div className={styles.presentation}>
            <h1>Sobre mim</h1>

            <img src={imagem}/>

            <p>Durante os últimos três anos, tive a oportunidade de trabalhar como desenvolvedor em uma empresa de tecnologia. Durante esse período, pude aprimorar minhas habilidades em linguagens de programação como Java, Python e JavaScript, bem como em frameworks como Spring e React.

Ao longo desses anos, participei de projetos desafiadores que me permitiram aprender e crescer profissionalmente. Trabalhei em equipes multidisciplinares, colaborando com designers, analistas de negócios e outros desenvolvedores para criar soluções inovadoras e de alta qualidade.

Além disso, tive a oportunidade de liderar projetos e mentorear desenvolvedores mais juniores, ajudando a compartilhar meu conhecimento e experiência com a equipe.

Essa experiência de três anos no desenvolvimento me deu uma base sólida para enfrentar novos desafios e me tornou um profissional mais confiante e habilidoso. Estou animado para continuar crescendo e evoluindo nessa área tão dinâmica e empolgante.</p>
               
        </div>
    )
}
export default Presentation