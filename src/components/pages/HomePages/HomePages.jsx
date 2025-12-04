import Container from '../../layuot/Container/Container'
import Header from '../../layuot/Header/Header'
import Main from '../../layuot/Main/Main'

import styles from './homePages.module.scss'
const HomePages = () => {
  return (
    <div className={styles.HomePages}>
      <Header />
      <Main />
    </div>
  )
}

export default HomePages
