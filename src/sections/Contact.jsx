import React from 'react';

const Contact = () => {
    return (
        <section
            style={{
                backgroundColor: '#f7f7f7',
                padding: '2rem',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h1 style={{ marginBottom: '2rem', fontSize: '2rem', color: '#333' }}>
                Contact Me
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    maxWidth: '1200px',
                    background: '#fff',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden'
                }}
            >
                {/* Left Column with Image */}
                <div style={{ flex: '1 1 300px' }}>
                    <img
                        src="/path/to/your/image.jpg"
                        alt="Contact"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                {/* Right Column with Contact Details */}
                <div
                    style={{
                        flex: '1 1 300px',
                        padding: '2rem',
                        color: '#000'
                    }}
                >
                    <h2 style={{ color: '#FF6347', marginBottom: '1rem' }}>Get in Touch</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I'd love to hear from you! Whether you have a question or just want to say hi,
                        feel free to drop a message.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                        <li>
                            <strong>Email: </strong>
                            <a href="mailto:example@example.com" style={{ color: '#1E90FF' }}>
                                example@example.com
                            </a>
                        </li>
                        <li>
                            <strong>Phone: </strong>
                            <a href="tel:+1234567890" style={{ color: '#32CD32' }}>
                                +1 234 567 890
                            </a>
                        </li>
                        <li>
                            <strong>Address: </strong>
                            <span style={{ color: '#FFD700' }}>1234 Street, City, Country</span>
                        </li>
                        <li>
                            <strong>LinkedIn: </strong>
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#0077B5' }}
                            >
                                yourprofile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;