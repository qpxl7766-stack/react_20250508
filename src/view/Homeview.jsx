import React from 'react'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Main from '../components/Main'
import Site from '../components/Site'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Homeview = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </>
  )
}

export default Homeview