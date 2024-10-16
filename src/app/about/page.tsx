import styles from "./about.module.css"
import Link from 'next/link'
import React from 'react'

const AboutPage=()=> {
  return (
    <div className={styles.container}>
    <h1 className={styles.header}> i am About Page</h1>
    <ul>
        <li><Link href="/about/nested-about">this is nested Page</Link></li>
        
        <li><Link href="/"> go to Home page</Link></li>
        <li><Link href="/about">go to About page</Link></li>
        <li><Link href="/contact">go to Contact page</Link></li>
        <li><Link href="/service">go to Service page</Link></li>
        </ul>
    </div>
  )
}
export default AboutPage