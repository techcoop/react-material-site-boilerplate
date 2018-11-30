import React from 'react'
import { connect } from 'react-redux'

import CoreLayout from 'react-material-site/lib/layouts/CoreLayout'
import CookiesPartial from 'react-material-site/lib/partials/Cookies'

// ********** WARNING
// The use of this partial does not constitute legal advice but instead is intended as a starting place and placeholder
export const Cookies = props => (
  <CoreLayout {...props}>
    <CookiesPartial content={props.content.local.get('cookie policy')} language={props.ui.language} />
  </CoreLayout>
)

const mapDispatchToProps = {
}

const mapStateToProps = state => ({
  content: state.content,
  ui: state.ui
})

export default connect(mapStateToProps, mapDispatchToProps)(Cookies)
