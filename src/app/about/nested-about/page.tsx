import Link from 'next/link'
import React from 'react'

const NestedPage=()=> {
  return (
    <div>
    <h1>i am Nested Page</h1>
    <li><Link href="/"> go to Home pagr</Link></li>
        <li><Link href="/about">go to About page</Link></li>
        <li><Link href="/contact">go to Contact page</Link></li>
        <li><Link href="/service">go to Service page</Link></li>

    </div>
  )
}

export default NestedPage