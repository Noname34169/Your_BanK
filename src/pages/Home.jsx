import React from 'react'
import Hero from '../components/Hero/Hero'
import TabsWrap from '../components/TabsWrap/TabsWrap'
import Category from '../components/Category/Category'
import FinanceJourney from '../components/FinanceJourney/FinanceJourney'

const Home = () => {
  return (
    <>
    <Hero />
    <TabsWrap />
    <Category />
    <FinanceJourney />
    </>
  )
}

export default Home