import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            marginBottom: rhythm(0.0),
          }}
        >
          {/* <img
            src={profilePic}
            alt={`tritelark`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          /> */}
          {/* <p>
            Musings by <strong>tritelark</strong>
          </p> */}
        </div>
        <div>
          You can contact me via email or{' '}
          <a href="https://twitter.com/tritelark">Twitter</a>.
        </div>
        I work on many different things in the area of technology, usually
        together with many other contributors. In no particular order of
        preference:
        <ul
          style={{
            marginTop: rhythm(0.5),
            marginLeft: rhythm(1.5),
          }}
        >
          <li>
            a dialogue mod for the game Legend of Zelda: Breath of the Wild
          </li>
          <li>a webapp for taking the sample LSAT exam</li>
        </ul>
      </div>
    )
  }
}

export default Bio
