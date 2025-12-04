import iconSearch from '@icons/icon-search.svg'

import Button from '../../common/Button/Button'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavListItem}>
            <a href="/" className={styles.headerNavListLink}>
              History of Japan
            </a>
          </li>
          <li className={styles.headerNavListItem}>
            <a href="/" className={styles.headerNavListLink}>
              History of Japan
            </a>
          </li>
          <li className={styles.headerNavListItem}>
            <a href="/" className={styles.headerNavListLink}>
              Experiences
            </a>
          </li>
        </ul>
        <div className={styles.headerSearchContainer}>
          {' '}
          <input id="search" type="text" className={styles.searchInput} />
          <label htmlFor="search" className={styles.searchLabel}>
            Search
          </label>
          <img src={iconSearch} alt="Search" className={styles.seachIcon} />
        </div>
      </nav>
      <Button>Explore</Button>
    </header>
  )
}

export default Header
