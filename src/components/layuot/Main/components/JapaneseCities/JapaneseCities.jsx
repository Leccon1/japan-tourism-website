import { useState } from 'react'

import citiesContentData from './data/citiesContent.data'
import styles from './japaneseCities.module.scss'
const JapaneseCities = () => {
  const [selectedCity, setSelectedCity] = useState(citiesContentData[0])
  const handleClick = (e) => {
    const cityName = e.currentTarget.dataset.city
    const cityObj = citiesContentData.find((city) => city.name === cityName)
    if (cityObj) {
      setSelectedCity(cityObj)
    }
  }

  return (
    <section className={styles.japaneseCities}>
      <div className={styles.japaneseCitiesItem}>
        <img className={styles.japaneseCitiesItemImage} src={selectedCity.image} alt="" />
        <div className={styles.japaneseCitiesItemInfo}>
          <h2 className={styles.japaneseCitiesItemTitle}>{selectedCity.name}</h2>
          <p className={styles.japaneseCitiesItemDescription}>{selectedCity.description}</p>
          <ul className={styles.japaneseCitiesItemDescriptionButtonList}>
            {citiesContentData.map((city) => (
              <li key={city.name} className={styles.japaneseCitiesItemDescriptionButtonListItem}>
                <button key={city.name} type="button" onClick={handleClick} data-city={city.name}>
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
