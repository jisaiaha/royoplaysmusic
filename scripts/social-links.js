fetch('data/social-links.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('instagram-link').href = data.instagram;
        document.getElementById('soundcloud-link').href = data.soundcloud;
        document.getElementById('github-link').href = data.github;
    })
    .catch(error => console.error('Error loading social links:', error));
