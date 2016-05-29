import React from 'react'
import Radium from 'Radium'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

const Spacer = () => (
  // <div style={{color: '#666', margin: '10px 0'}}>-</div>
  <div style={{height: 40}} />
)

const Link = props => (
  <a
    href={props.url}
    style={{
      margin: '0 auto',
      textDecoration: 'none',
      color: '#666',
    }}
  >
    {props.label}
  </a>
)

class Main extends React.Component {

  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <div
            style={styles.container}
          >
            <img
              src={prefixLink('/me.jpg')}
              alt="Kyle Poole"
              style={{
                maxHeight: 200,
                maxWidth: 200,
                borderRadius: 8,
                borderColor: '#666',
                borderWidth: 2,
              }}
            />

            <h1 style={{margin: '40px 0'}}>@kylpo</h1>

            {/* <Spacer /> */}

            <Link url='https://medium.com/@kylpo' label='blog' />
            <Link url='https://github.com/kylpo' label='github' />
            <Link url='https://twitter.com/kylpo' label='twitter' />
            <Link url='https://www.linkedin.com/in/kylpo' label='linkedin' />

            <Spacer />

            <p style={{textAlign: 'center', margin: '0 20px'}}>
              <b>Kyle Poole</b> is a full stack web and mobile developer using React (+Native)
            </p>

          </div>
          <div style={styles.fade}/>
        </div>
      </DocumentTitle>
    )
  }
}

var fadeIn = Radium.keyframes({
  '0%': {opacity: 1, backgroundColor: 'black', visibility: 'visible'},
  '100%': {opacity: 0},
}, 'fadeIn')

var styles = {
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  fade: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    // Use a placeholder animation name in `animation`
    animation: 'x 4s ease',
    // Assign the result of `keyframes` to `animationName`
    animationName: fadeIn,
  },
}

export default Radium( Main )
