import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/components/Navbar/navbar.module.css'

function Navbar() {
  return (
    <>
    <header className={styles.container} >
      <div className={styles.contain}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image src='/icon/logo.png' alt='E.V.C.I. logo' width={70} height={70}/>
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navmenu}>
          {NavLinks.map((link)=>(
          <Link className={styles.navitem} href={link.href} key={link.key}>{link.text}</Link> 
          ))}
        </ul>
      </nav>
        <div id='icon' className={styles.mobile_toggle} aria-controls='primary-navigation' aria-expanded="false">
          <span className={styles.vissually_hidden}>menu</span>
        </div>
      </div>
    </header>
    {/* <script>
   const pryHeader = document.querySelector('.container')
const navToggle = document.querySelector('.mobile_toggle')
const pryNav = document.querySelector('.navbar');

navToggle.addEventListener('click',() => {
    pryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false):navToggle.setAttribute('aria-expanded', true);
    pryNav.toggleAttribute('data-visible');
    pryHeader.toggleAttribute('data-overlay')

}) 

    </script> */}
    </>
  )
}

export default Navbar