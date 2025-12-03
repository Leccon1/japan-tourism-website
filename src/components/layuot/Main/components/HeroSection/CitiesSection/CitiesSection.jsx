import styles from './CitiesSection.module.scss'
import citiesData from './data/cities.data'
const CitiesLine = () => {
  return (
    <section className={styles.citiesLine}>
      {citiesData.map((item) => (
        <div className={styles.citiesLineItem} key={item.city}>
          <img className={styles.citiesLineItemImage} src={item.image} alt={item.city} />
          <div className={styles.citiesLineItemContent}>
            <p className={styles.citiesLineItemDescription}>{item.description}</p>
            <p className={styles.citiesLineItemCity}>{item.city}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CitiesLine
