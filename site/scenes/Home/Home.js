import React from 'react'
import Radium from 'Radium'
import DocumentTitle from 'react-document-title'

const Spacer = () => (
  // <div style={{color: '#666', margin: '10px 0'}}>-</div>
  <div style={{height: 40}} />
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
          color: '#888',
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
      <DocumentTitle title='kylpo.com'>
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
            <Text
              tag='h1'
              size={40}
              fontFamily='Montserrat'
              style={styles.title}
              color='#111'
            >
              KYLPO
            </Text>

            <Spacer />

            <Link url='https://medium.com/@kylpo' label='blog' />
            <Link url='https://github.com/kylpo' label='github' />
            <Link url='https://twitter.com/kylpo' label='twitter' />
            <Link url='https://www.linkedin.com/in/kylpo' label='linkedIn' />

            <Spacer />

            <p style={{textAlign: 'center', margin: '0 20px', lineHeight: '40px'}}>
              <b>Kyle Poole</b> is a full stack web and mobile developer using React (+Native) at <a href='http://www.instrument.com/' style={styles.textLink}>Instrument</a>
            </p>


          </div>
          <div style={styles.fade}/>
        </div>
      </DocumentTitle>
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
    border: '10px solid #111',
  },
  title: {
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
