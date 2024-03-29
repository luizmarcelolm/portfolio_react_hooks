import styles from './Button.module.css'

function Button({text, link}){
    return(
        <div>
            <a href={link} target="_blank">
               <button className={styles.btn}> {text}</button>
            </a> 
        </div>
    )
}
export default Button