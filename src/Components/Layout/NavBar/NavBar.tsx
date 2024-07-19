import React from 'react'
import styles from './_navBar.module.scss'
import Logo from '@/Components/Global/Logo/Logo'
import MenuBar from '@/Components/Global/Menu/MenuBar/MenuBar'
function NavBar() {
  return (
    <nav className={styles.navBar_container}>
        <Logo/>
        <MenuBar/>
    </nav>
  )
}

export default NavBar