import { useState, useRef } from 'react';
import Swal from 'sweetalert2'

function FormContact() {
	const [ formStatus, setFormStatus ] = useState( 'Send' );

	const onSubmit = ( event ) => {
		event.preventDefault();
		setFormStatus( 'Submitting...' );
		button.current.disabled = true;

		// Study
		const { name, email, comment } = event.target.elements;

		let data = {
			name: name.value,
			email: email.value,
			comment: comment.value,
		};

		Swal.fire( {
			"allowOutsideClick": false,
			"text": "Espere un momento por favor.",
			"title": "Enviando mensaje ...",
		} )
		Swal.showLoading();
	}	// end function

	const button = useRef();

	return (
		<div className="container mt-5">
			<h1 className="mb-3">Contact</h1>
			<form onSubmit={onSubmit}>
				<div className="mb-3">
					<label className="form-label" htmlFor="name">
						Name
					</label>
					<input id="name" className="form-control" placeholder="Name" required="required" type="text" />
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="email">
						Email
					</label>
					<input id="email" className="form-control" placeholder="Email" required="required" type="email" />
				</div>
				<div className="mb-3">
					<label className="form-label" htmlFor="comment">
						Comment
					</label>
					<textarea id="comment" className="form-control" placeholder="Message" required="required" rows="3" />
				</div>

				<button ref={button} className="btn btn-danger" type="submit">{formStatus}</button>
			</form>
		</div>
	);
}   // end function


export default FormContact;