import React from 'react'
import { connect } from 'react-redux'

import CoreLayout from 'react-material-site/lib/layouts/CoreLayout'
import PrivacyPartial from 'react-material-site/lib/partials/Privacy'

// ********** WARNING
// The use of this partial does not constitute legal advice but instead is intended as a starting place and placeholder
export const Privacy = props => (
  <CoreLayout {...props}>
    <PrivacyPartial 
      siteDisplay={process.env.SITE_DISPLAY}
      companyLegalName={process.env.PRIVACY_COMPANY_LEGAL_NAME}
      companyLegalNumber={process.env.PRIVACY_COMPANY_LEGAL_NUMBER}
      companyLegalAddress={process.env.PRIVACY_COMPANY_LEGAL_ADDRESS}
      companyOfficeAddress={process.env.PRIVACY_COMPANY_OFFICE_ADDRESS}
      companyLegalOfficer={process.env.PRIVACY_COMPANY_OFFICER}
      companyLegalContact={process.env.PRIVACY_COMPANY_CONTACT}
      
      chatClientId={process.env.CHAT_CLIENT_ID}
      settings={process.env.PRIVACY_SETTINGS}
      subsidiaries={process.env.PRIVACY_SUBSIDIARIES}
      subcontractors={process.env.PRIVACY_SUBCONTRACTORS}
      PSPName={process.env.PRIVACY_PSP_NAME}
      PSPURL={process.env.PRIVACY_PSP_URL}
      PSPPolicy={process.env.PRIVACY_PSP_POLICY}
      countryOffices={process.env.PRIVACY_COUNTRY_OFFICES}
      countryHosting={process.env.PRIVACY_COUNTRY_HOSTING}
      countrySuppliers={process.env.PRIVACY_COUNTRY_SUPPLIERS}
      personalDataUrl={process.env.PRIVACY_PERSONAL_DATA}
      adwords={process.env.PRIVACY_ADWORDS}
    />
  </CoreLayout>
)

const mapDispatchToProps = {
}

const mapStateToProps = state => ({
  content: state.content,
  ui: state.ui
})

export default connect(mapStateToProps, mapDispatchToProps)(Privacy)
