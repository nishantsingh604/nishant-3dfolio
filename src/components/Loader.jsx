import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 9000); // 9 seconds

        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <div className="loader-container">
            <div className="loader">
                <p>Loading...</p>
            </div>
        </div>
    ) : null;
};

export default Loader;