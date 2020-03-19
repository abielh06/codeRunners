import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from './utsa.jpg'
import image2 from './utsa2.jpeg'
import image3 from './utsa3.jpg'
import image4 from './utsa4.jpg'
import image5 from './utsa5.jpg'
import image6 from './utsa6.jpg'
import image7 from './utsa7.jpg'
import image8 from './utsa8.jpg'
import image9 from './utsa9.jpg'
import image11 from './utsa11.jpg'
import image12 from './utsa12.jpg'


export default class App extends Component {
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2, image3, image4, image5, image6, image7, image8, image9, image11, image12 ]} />
      </div>
    )
  }
}
