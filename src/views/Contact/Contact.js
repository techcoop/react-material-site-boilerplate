import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { formSubmit, formChange } from 'react-material-site/lib/modules/form'
import CoreLayout from 'react-material-site/lib/layouts/CoreLayout'
import Content from 'react-material-site/lib/components/Content'
import Form from 'react-material-site/lib/components/Form'

const Contact = (props) => (
  <CoreLayout {...props}>
    <div style={{width: '350px', margin: 'auto', padding: '35px 5px'}}>
      <Content
        bodyStyle={{padding: '10px 0'}}
        header={props.content.text.get(['contact', 'page title', props.ui.language])}
        body={props.content.text.get(['contact', 'form', props.ui.language])}
      />
      <Form 
        id='contact'
        {...props.form['contact']}
        data={Object.assign(
          {},
          {name: props.auth.profile.name, email: props.auth.profile.email},
          (props.form['contact'] ? props.form['contact'].data : undefined))
        }
        onSubmit={props.formSubmit}
        onChange={props.formChange}
        language={props.ui.language}
        submitLabel={{en: 'Contact', fr: 'Contactez'}}
        fields={{
          name: {
            type: 'text',
            label: {en: 'Full Name', fr: 'Nom Complet'},
            required: true,
            pattern: '[A-Za-zÀ-ž -]{1,}',
            error: {en: 'A name must be only letters and longer than 2', fr: 'Un nom ne doit être que des lettres et plus long que 2'}
          },
          email: {
            type: 'text',
            label: {en: 'Email Address', fr: 'Adresse Courriel'},
            required: true,
            pattern: '[^@ ]+@[^@ ]+',
            error: {en: 'Please enter a valid email address', fr: 'S\'il vous plaît, mettez une adresse courriel valide'}
          },
          company_name: {
            type: 'text',
            label: {en: 'Company Name', fr: 'Nom de l\'entreprise'},
            //pattern: '.{2,}',
            //error: {en: 'A company name must be longer than 2 characters', fr: 'Un nom de l\'entreprise doit être plus de 2 caractères'}
          },
          description: {
            type: 'text',
            label: {en: 'Description', fr: 'Description'},
            //pattern: '.{2,}',
            //error: {en: 'Please describe your question in more detail', fr: 'Veuillez décrire votre question plus en détail'}          
          },
          subscribe: {
            type: 'checkbox',
            label: {en: 'Yes, please send me stuff from time to time.', fr: 'Oui, s\'il vous plaît envoyez-moi des choses de temps en temps.'}
          },
        }}
      />
    </div>
  </CoreLayout>
)

Contact.defaultProps = {
}

Contact.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
  ui: PropTypes.object,
  content: PropTypes.object,
  form: PropTypes.object,
  auth: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

const mapDispatchToProps = {
  formSubmit,
  formChange
}

const mapStateToProps = state => ({
  content: state.content,
  ui: state.ui,
  auth: state.auth,
  form: state.form
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
