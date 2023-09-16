import React from 'react'
import Banner from './Banner';
import './Home.scss'
import LiveCurrency from '../LiveCurrency/LiveCurrency';
import Footer from '../AllCurrency/Footer';
//import AllCurrency from '../AllCurrency/AllCurrency';
const AllCurrency = React.lazy(()=> import('../AllCurrency/AllCurrency') );


function Home() {
  return (
    <div className='main-content' >
      <Banner/>
      <LiveCurrency/>
      <AllCurrency/>
      <Footer/>
    </div>
  )
}

export default Home;