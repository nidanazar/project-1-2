import styles from "../contact/contact.module.css";
import Link from 'next/link';
import React from 'react';

const Contact=()=> {
  return (
    <div className = {styles.container}> 
    <h1 className = {styles.header}> i am Contact Page</h1>
    <ul>
    <li><Link href="/"> go to Home page</Link></li>
        <li><Link href="/about">go to About page</Link></li>
        <li><Link href="/contact">go to Contact page</Link></li>
        <li><Link href="/service">go to Service page</Link></li>
</ul>
    </div>
  )
}

export default Contact