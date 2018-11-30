import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CoreLayout from 'react-material-site/lib/layouts/CoreLayout'
import Content from 'react-material-site/lib/components/Content'

import './Terms.scss'

export const Terms = (props) => (
  <CoreLayout {...props}>
    <Content use='headline4'>Terms of Use</Content>

    <Content 
      className='tc-terms-view__section'
      headerType='headline5'
      header=''
    >
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </Content>
  </CoreLayout>
)

Terms.defaultProps = {
}

Terms.propTypes = {
}

const mapDispatchToProps = {
}

const mapStateToProps = state => ({
  content: state.content
})

export default connect(mapStateToProps, mapDispatchToProps)(Terms)
