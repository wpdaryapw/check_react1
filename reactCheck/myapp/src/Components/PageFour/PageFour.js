import styles from './PageFour.module.css'
function PageFour(props){
    const {text, color} = props
    return(
        <div className={styles.container} style={{backgroundColor: color}}>
          <h3 className={styles.text}>
            {text}
          </h3>
      </div>

    )
}

export default PageFour