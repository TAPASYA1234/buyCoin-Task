import React from 'react'
import Banner from './Banner';
import './Home.scss'
import LiveCurrency from '../LiveCurrency/LiveCurrency';
//import AllCurrency from '../AllCurrency/AllCurrency';
const AllCurrency = React.lazy(()=> import('../AllCurrency/AllCurrency') );


function Home() {
  return (
    <div className='main-content' >
      <Banner/>
      <LiveCurrency/>
      <AllCurrency/>
    </div>
  )
}

export default Home;