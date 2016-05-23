import React from 'react'
import yaml from 'js-yaml'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const data = this.props.route.page.data
    return (
      <DocumentTitle title={`${config.siteTitle} | ${data.title}`}>
        <div>
          <h1>{data.title}</h1>
          <p>Raw view of yaml file</p>
          <pre dangerouslySetInnerHTML={{ __html: yaml.safeDump(data) }} />
        </div>
      </DocumentTitle>
    )
  },
})
