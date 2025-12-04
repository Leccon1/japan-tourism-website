import citiesContentData from './data/citiesContent.data'
import styles from './japaneseCities.module.scss'
const JapaneseCities = () => {
  return (
    <section className={styles.japaneseCities}>
      <div className={styles.japaneseCitiesItem}>
        <img className={styles.japaneseCitiesItemImage} src="" alt="" />
        <div className={styles.japaneseCitiesItemInfo}>
          <h2 className={styles.japaneseCitiesItemTitle}></h2>
          <p className={styles.japaneseCitiesItemDescription}></p>
          <ul className={styles.japaneseCitiesItemDescriptionButtonList}>
            {citiesContentData.map((city) => (
              <li key={city.name} className={styles.japaneseCitiesItemDescriptionButtonListItem}>
                <button key={city.name} type="button" data-city={city.name}>
                  {city.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default JapaneseCities
