import CitiesLine from './CitiesSection/CitiesSection'
import styles from './heroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.pageTitle}>Japan</h1>
      <CitiesLine />
    </section>
  )
}

export default HeroSection
