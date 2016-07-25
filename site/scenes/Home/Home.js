import React from 'react'
import Radium from 'Radium'
import DocumentTitle from 'react-document-title'

const Spacer = () => (
  // <div style={{color: '#666', margin: '10px 0'}}>-</div>
  <div style={{height: 40}} />
)

const Link = props => (
  <a
    href={props.url}
    style={{
      margin: '4px auto',
      textDecoration: 'none',
      color: '#666',
    }}
  >
    {props.label}
  </a>
)

@Radium
export default class Home extends React.Component {
  render() {
    return (
      <DocumentTitle title='kylpo.com'>
        <div>
          <div
            style={styles.container}
          >
            <img
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

            <h1 style={{margin: '40px 0'}}>@kylpo</h1>

            {/* <Spacer /> */}

            <Link url='https://medium.com/@kylpo' label='Blog' />
            <Link url='https://github.com/kylpo' label='Github' />
            <Link url='https://twitter.com/kylpo' label='Twitter' />
            <Link url='https://www.linkedin.com/in/kylpo' label='LinkedIn' />

            <Spacer />

            <p style={{textAlign: 'center', margin: '0 20px'}}>
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
  'from': {opacity: 1, backgroundColor: 'black', visibility: 'visible'},
  'to': {opacity: 0},
}, 'fadeIn')

const styles = {
  textLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#111',
  },
  container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    border: '8px solid #111',
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
    animation: 'x 3s ease-out',
    // Assign the result of `keyframes` to `animationName`
    animationName: fadeIn,
  },
}
