import React from 'react'
import Banner from '../../components/banner/Banner'
import Kidscreen from '../../components/kidscreen/Kidscreen'
import Realscreen from '../../components/realscreen/Realscreen'
import Playback from '../../components/playback/Playback'
import Strategy from '../../components/strategy/Strategy'
import Small from '../../components/small/Small'

const Home = () => {
  return (
    <>
      <div className="banner">
        <Banner />

      </div>
      <div id="mainSection">
        <Kidscreen />
        <Realscreen />
        <Playback />
        <Strategy />
      </div>
      <div>
        <Small />
      </div>

    </>
  )
}

export default Home