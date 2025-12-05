import Button from '@common/Button/Button'
import { useEffect, useState } from 'react'

import citiesContentData from './data/citiesContent.data'
import styles from './japaneseCities.module.scss'
const JapaneseCities = () => {
  const [selectedCity, setSelectedCity] = useState(citiesContentData[0])
  const [activeButton, setActiveButton] = useState(false)
  const [progress, setProgress] = useState(0)

  const part = 100 / citiesContentData.length

  ;(useEffect(() => {
    console.log('Progress changed:', progress)
  }),
    [progress])

  return (
    <section className={styles.japaneseCities}>
      <div className={styles.japaneseCitiesItemImageConteiner}>
        <img
          className={styles.japaneseCitiesItemImage}
          src={selectedCity.image}
          alt={selectedCity.name}
        />
      </div>
      <div className={styles.japaneseCitiesItemInfo}>
        <h2 className={styles.japaneseCitiesItemTitle}>{selectedCity.name}</h2>
        <p className={styles.japaneseCitiesItemDescription}>{selectedCity.description}</p>
        <ul className={styles.japaneseCitiesItemDescriptionButtonList}>
          {citiesContentData.map((city, index) => (
            <li key={city.name} className={styles.japaneseCitiesItemDescriptionButtonListItem}>
              <button
                key={city.name}
                type="button"
                className={`${styles.japaneseCitiesItemDescriptionButtonListButton} ${
                  activeButton === city.name
                    ? styles.japaneseCitiesItemDescriptionButtonListButtonActive
                    : ''
                }`}
                onClick={(e) => {
                  const cityName = e.currentTarget.dataset.city
                  const cityObj = citiesContentData.find((c) => c.name === cityName)
                  if (cityObj) setSelectedCity(cityObj)

                  setProgress(part * (index + 1))
                  setActiveButton(cityName)
                }}
                data-city={city.name}
              >
                {city.name}
              </button>
            </li>
          ))}
        </ul>
        <Button>About Us</Button>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressBarItem} style={{ height: `${progress}%` }}></div>
      </div>
    </section>
  )
}

export default JapaneseCities
