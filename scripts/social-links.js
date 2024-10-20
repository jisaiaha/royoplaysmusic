fetch('data/social-links.json')
    .then(response => response.json())
    .then(data => {
        const socialLinksContainer = document.getElementById('social-links-container');

        Object.keys(data).forEach(key => {
            const platform = data[key];
            
            // Create the anchor element
            const linkElement = document.createElement('a');
            linkElement.href = platform.url;
            linkElement.target = '_blank';

            // Create the image element
            const iconElement = document.createElement('img');
            iconElement.src = platform.icon;
            iconElement.alt = platform.alt;
            iconElement.classList.add('social-icon');

            // Append the image to the link
            linkElement.appendChild(iconElement);

            // Append the link to the container
            socialLinksContainer.appendChild(linkElement);
        });
    })
    .catch(error => console.error('Error loading social links:', error));
