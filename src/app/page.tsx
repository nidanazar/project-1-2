
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import React from 'react'

const Homepage=()=> {
  return (
    <div>
      <ul>
        <Header></Header>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/service">Service</a></li>
        <Footer></Footer>
      </ul>
      </div>
  )
}

export default Homepage

//**************************************************************** */
//<link></link> Mehod
// import Link from 'next/link'
// import React from 'react'
// const Homepage = () => {
//   return (
//     <>
//       <ul>
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//         <li><Link href="/service">Service</Link></li>
//         </ul>
//       </>
//   );
// }

// export default Homepage