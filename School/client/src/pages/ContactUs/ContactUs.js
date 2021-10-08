import React from "react";
import { useState } from "react";
import axios from "axios"
import { TextField, Button } from '@material-ui/core'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
const Contact = () => {
	const [Name, setName] = useState('')
	const [Email, setEmail] = useState('')
	const [Subject, setSubject] = useState('')
	const [Message, setMessage] = useState('')
	const [Alert1, setAlert] = useState(false)
	const alertModel = <Stack sx={{ width: '58%', marginLeft: "340px" }} ><Alert severity="success">Your feedback is already sended</Alert></Stack>
	const sendFeedBack = () => {

		axios.post("http://localhost:3002/contactus", {
			Name,
			Email,
			Subject,
			Message
		})
			.then(() => {
				setAlert(true)
			})
			.catch(() => {
			console.log("error")	
			})
	}
	return (
		<><br/><br/>
			<div className="container">
				<h1 className="nst">CONTACT US</h1>
				<br />
				<br />

				<p className="nst">Let us know what you think! In order to provide better service , please do not hesitate to give us your feedback. Thank you.</p>
				<br />
				<br />

				<div className="block">
					<TextField
						onChange={e => setName(e.target.value)}
						style={{ width: "427px" }}
						label="NAME"
						variant="standard"
					/>

					<TextField
						onChange={e => setEmail(e.target.value)}
						style={{ width: "427px", marginLeft: "10px" }}
						label="EMAIL"
						variant="standard"
					/>
					<br />
					<br />
					<div >
						<TextField
							onChange={e => setSubject(e.target.value)}
							style={{ width: "870px" }}
							label="Subject"
							variant="standard"
						/>
						<br />
						<br />

						<TextField
							onChange={e => setMessage(e.target.value)}
							style={{ width: "870px" }}
							label="Message"
							variant="standard"
						/>
					</div>
				</div>
			</div>
			<br />
			<br />

			{Alert1 ? alertModel : ""}
			<br />

			<Button
				
				variant="contained"
				style={{ marginLeft: "340px", width: "210px" }}
			>
				<Link
				className="contactLink"
				to="/home"	
				>
				BACK HOME
				</Link>
			</Button>
			<Button
				onClick={sendFeedBack}
				variant="contained"
				style={{ marginLeft: "20px", width: "210px" }}
			>
				Send
			</Button>
		<br/>
		<br/>
		<br/>
		<br/> 	
		</>
	);
};

export default Contact;
