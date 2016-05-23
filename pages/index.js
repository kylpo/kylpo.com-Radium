import React from 'react'
// import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
// import 'css/zenburn.css'

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

export default class Sass extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div
          style={{
            display: 'flex',
            height: '100vh',
            // flex: 1,
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',

          }}
        >
          {/* <img */}
          {/*   src='http://placehold.it/400x400' */}
          {/*   alt='Kyle Poole' */}
          {/*   style={{ */}
          {/*     margin: '0 auto', */}
          {/*   }} */}
          {/* /> */}

          <h1 style={{margin: 0}}>@kylpo</h1>

          <Spacer />

          <Link url='https://medium.com/@kylpo' label='blog' />
          <Link url='https://github.com/kylpo' label='github' />
          <Link url='https://twitter.com/kylpo' label='twitter' />
          <Link url='https://www.linkedin.com/in/kylpo' label='linkedin' />

          <Spacer />

          <p style={{textAlign: 'center', margin: '0 20px'}}>
            <b>Kyle Poole</b> is a full stack web and mobile developer using React (+Native)
          </p>

        </div>
      </DocumentTitle>
    )
  }
}
