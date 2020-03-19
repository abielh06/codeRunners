import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from './utsa.jpg'
import image2 from './utsa2.jpeg'
import image3 from './utsa3.jpg'
import image4 from './utsa4.jpg'
import image6 from './utsa6.jpg'
import image7 from './utsa7.jpg'
import image13 from './utsa13.jpg'
import image14 from './utsa14.jpg'


export default class App extends Component {
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2, image3, image4, image6, image7, image13, image14 ]} />
      </div>
    )
  }
}
