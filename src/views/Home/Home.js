import React from 'react'
import { connect } from 'react-redux'

import CoreLayout from 'react-material-site/lib/layouts/CoreLayout'
import Content from 'react-material-site/lib/components/Content'
import { Grid, GridCell } from 'react-material-site/lib/components/Grid'
import Button from 'react-material-site/lib/components/Button'
import { Card } from 'react-material-site/lib/components/Card'

import './Home.scss'

export const Home = (props) => (
  <CoreLayout {...props}>
    <div className='tc-home__hero'>
      <Content
        style={{maxWidth: '450px'}}
        headerStyle={{padding: '5px 0'}}
        headerType='headline6'
        header={props.content.text.get(['home', 'blurb', props.ui.language])}
        bodyStyle={{margin: '10px'}}
        bodyTag='span'
        body={<div><Button raised to='/contact' text='Contact Us' /></div>}
      />
    </div>
    
    <Grid style={{maxWidth: '750px', marginBottom: '40px'}}>
      {['cra', 'material', 'content', 'router', 'auth', 'vendors'].map((section, index) => (
        <GridCell span='6' mobile='12' key={index}>
          <Card className='tc-home__features'>
            <Content
              style={{padding: '10px', minHeight: '200px'}}
              headerType='headline6'
              header={props.content.text.get(['home', section, 'title', props.ui.language])}
              bodyType='body2'
              bodyStyle={{padding: '10px 0'}}
              body={props.content.text.get(['home', section, 'body', props.ui.language])}
            />
          </Card>
        </GridCell>
      ))}
    </Grid>
  </CoreLayout>
)

const mapDispatchToProps = {
}

const mapStateToProps = state => ({
  ui: state.ui,
  content: state.content
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
