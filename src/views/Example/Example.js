import React from 'react'
import { connect } from 'react-redux'

import CoreLayout from 'react-material-site/lib/layouts/CoreLayout'
import Content from 'react-material-site/lib/components/Content'
import Button from 'react-material-site/lib/components/Button'

import { incrementExample } from '../../modules/example'

import './Example.scss'
// style={{padding: '20px'}}
export const Example = (props) => (
  <CoreLayout {...props}>
    <div style={{padding: '20px'}}>
      <Content header={props.content.text.get(['example', 'page title', props.ui.language])} />

      <Content body={props.content.text.get(['example', 'body', props.ui.language])} style={{padding: '20px 0'}}/>

      <div className='tc-example__increment'>
        <div className='tc-example__count'>{props.example.count}</div>
        <Button 
          raised
          onClick={props.incrementExample}
          text={props.content.text.get(['example', 'button', props.ui.language])}
          style={{marginLeft: 'auto', padding: '30px'}}
          className='tc-example__button'
        />
      </div>
    </div>
  </CoreLayout>
)

const mapDispatchToProps = {
  incrementExample
}

const mapStateToProps = state => ({
  ui: state.ui,
  content: state.content,
  example: state.example
})

export default connect(mapStateToProps, mapDispatchToProps)(Example)
