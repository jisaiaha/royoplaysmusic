import React, { useEffect, useState } from 'react';

function SocialLinks() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch('/data/social-links.json')
            .then(response => response.json())
            .then(data => setLinks(Object.values(data)))
            .catch(error => console.error('Error loading social links:', error));
    }, []);

    return (
        <div className="social-links">
            {links.map((platform, index) => (
                <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer">
                    <img src={platform.icon} alt={platform.alt} className="social-icon" />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
