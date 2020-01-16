import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {

	const { handleSubmit } = props

  return (
		<form onSubmit={handleSubmit}>
			<div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
			<div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
			<div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
			<button type="submit">Submit</button>
		</form>
	)
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default ContactForm
