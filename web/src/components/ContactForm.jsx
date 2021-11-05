import { useState } from 'preact/hooks';

const {
	FORM_NAME,
	FORM_SUBJECT,
	FORM_MESSAGE,
	FORM_EMAIL
} = import.meta.env;

export default function ContactForm() {
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		const body = {
			[FORM_NAME]: name,
			[FORM_EMAIL]: email,
			[FORM_SUBJECT]: subject,
			[FORM_MESSAGE]: message
		}

		console.log(body);

		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	}

	return (
		<form id="form" onSubmit={handleSubmit}>
			<div className="row">
				<div className="input-field">
					<label htmlFor="name">Seu nome</label>
					<input
						type="text"
						id="name"
						value={name}
						onInput={({ target }) => setName(target.value)}
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="email">Seu email</label>
					<input
						type="email"
						id="email"
						value={email}
						onInput={({ target }) => setEmail(target.value)}
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="subject">Assunto</label>
					<input
						type="text"
						id="subject"
						value={subject}
						onInput={({ target }) => setSubject(target.value)}
						required
					/>
				</div>
			</div>
			<div className="input-field">
				<label htmlFor="message">Sua mensagem</label>
				<textarea
					id="message"
					value={message}
					onInput={({ target }) => setMessage(target.value)}
					required
				></textarea>
			</div>
			<button className="button primary">Enviar</button>
		</form>
	);
};