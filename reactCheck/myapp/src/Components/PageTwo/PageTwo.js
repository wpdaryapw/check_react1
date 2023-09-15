import styles from './PageTwo.module.css'
import pricePng from './imageBike.png'

function PageTwo(){
    return(
        <div className={styles.container}>
            <h2 className={styles.h2}>Что мы предлагаем</h2>
            <p className={styles.p}>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой.</p>
            <img className={styles.image} src={pricePng}/>
        </div>

    )
}

export default PageTwo