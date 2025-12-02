import iconSearch from '@icons/icon-search.svg'

import Button from '../../common/Button/Button'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>History of Japan</li>
          <li className={styles.headerNavListItem}>Destinations</li>
          <li className={styles.headerNavListItem}>Experiences</li>
        </ul>
        <div className={styles.headerSearchContainer}>
          {' '}
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <img src={iconSearch} alt="Search" />
        </div>
      </nav>
      <Button variant="primary">Explore</Button>
    </header>
  )
}

export default Header
