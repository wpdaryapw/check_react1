import PageFour from "../PageFour/PageFour"
import styles from './Content.module.css'

function Content(){
    let cont = [
        {text:'Годовое ТО', color: 'darkblue'},
        {text:' Выравнивание колес', color: 'blue'},
        {text:'Настройка переключателей', color: 'green'}
    ]
    return(
        <div>
            <div className={styles.container}>
            {cont.map(elem => <PageFour    
            key={elem.id}   text={elem.text}     color={elem.color}/>)}
        </div>
        </div>
    )
}

export default Content