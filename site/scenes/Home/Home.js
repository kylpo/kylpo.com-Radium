import React from 'react'
import Radium from 'Radium'

const Spacer = () => (
  // <div style={{color: '#666', margin: '10px 0'}}>-</div>
  <div style={{height: 30}} />
)

@Radium
class Link extends React.Component {
  render() {
    return (
      <a
        href={this.props.url}
        style={{
          margin: '4px auto',
          textDecoration: 'none',
          color: '#777',
          fontFamily: 'Unica One',
          letterSpacing: '0.2px',
    //       fontFamily: 'Vollkorn',
          // fontFamily: 'Abel',
          ':hover': {
            color: '#111',
            textDecoration: 'underline',
          }
        }}
      >
        {this.props.label}
      </a>
    )
  }
}

@Radium
export default class Home extends React.Component {
  render() {
    return (
        <div>
          <div
            style={styles.container}
          >
            {/*<img
              src={require('images/me.jpg')}
              alt="Kyle Poole"
              style={{
              maxHeight: 200,
              maxWidth: 200,
              borderRadius: 8,
              borderColor: '#666',
              borderWidth: 2,
              }}
              />
            */}
            <h1 style={styles.title}>
              KYLPO
            </h1>

            <Spacer />

            <Link url='https://medium.com/@kylpo' label='BLOG' />
            <Link url='https://github.com/kylpo' label='GITHUB' />
            <Link url='https://twitter.com/kylpo' label='TWITTER' />
            <Link url='https://www.linkedin.com/in/kylpo' label='LINKEDIN' />

            <Spacer />

            <p style={{textAlign: 'center', margin: '16px 20px 0', lineHeight: '24px', letterSpacing: '0.3px'}}>
              <b>Kyle Poole</b> is a full stack web and mobile developer using React (+Native) at <a href='http://www.instrument.com/' style={styles.textLink}>Instrument</a>
            </p>


          </div>
          <div style={styles.fade}/>
        </div>
    )
  }
}

const fadeIn = Radium.keyframes({
  '0%': {opacity: 1, backgroundColor: 'black', visibility: 'visible'},
  '40%': {opacity: 1, backgroundColor: 'black', visibility: 'visible'},
  '100%': {opacity: 0},
}, 'fadeIn')


const titleFadeIn = Radium.keyframes({
  '0%': {color: 'black'},
  '20%': {color: 'white'},
  '30%': {color: 'white'},
  // '40%': {color: 'white'},
  '70%': {color: '#111'},
  '100%': {color: '#111'},
}, 'titleFadeIn')

const styles = {
  textLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    // fontFamily: 'Unica One',
    color: '#111',
    ':hover': {
      textDecoration: 'underline',
    }
  },
  container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    // border: '10px solid #111',
  },
  title: {
    fontSize: 40,
    lineHeight: '40px',
    // fontFamily: 'Montserrat',
          fontFamily: 'Unica One',
    color: '#111',
    zIndex: 100,
    // Use a placeholder animation name in `animation`
    animation: 'x 4s ease-out',
    // Assign the result of `keyframes` to `animationName`
    animationName: titleFadeIn,
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
    animation: 'x 4s ease-out',
    // Assign the result of `keyframes` to `animationName`
    animationName: fadeIn,
  },
}
