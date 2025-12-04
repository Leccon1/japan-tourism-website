// Main.jsx
import Container from '../Container/Container'

import CitiesLine from './components/HeroSection/CitiesSection/CitiesSection'
import HeroSection from './components/HeroSection/HeroSection'
import JapaneseCities from './components/JapaneseCities/JapaneseCities'
import styles from './main.module.scss'
const Main = () => {
  return (
    <main className={styles.main}>
      <HeroSection>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.pageTitle}>Japan</h1>
            <CitiesLine />
          </div>
        </Container>
      </HeroSection>
      <JapaneseCities />
    </main>
  )
}

export default Main
