import React, { useState } from 'react';
import Loader from './GeneralScreens/Loader';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);


        fetch('http://localhost:5001/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Handle the response from the server
                navigate("/contactus")
                setLoading(false);
            })
            .catch((error) => {
                alert(error)
                setLoading(false);
            });
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <form onSubmit={handleSubmit} style={{ width: '500px', padding: '20px' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
                        <label style={{ marginBottom: '10px' }}>Name</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                        <br />
                        <label style={{ marginBottom: '10px' }}>Email Address</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                        <br />
                        <label style={{ marginBottom: '10px' }}>Message</label>
                        <br />
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5} // Set the number of rows to 5 for a 5-line message box
                            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                        <br />
                        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white', fontWeight: 'bold' }}>Submit</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ContactUs;