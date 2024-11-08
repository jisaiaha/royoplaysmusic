
# Royo Plays Music - Portfolio Website

Welcome to the GitHub repository for **Royo Plays Music**, a personal portfolio website showcasing my work as a DJ and karaoke host. This website serves as an online presence where users can learn more about my events, connect via social media, and explore recent projects.

## Features

- **Landing Page**: Simple, bold, and focused design featuring a "Coming Soon" message. Includes links to social media platforms such as Instagram, SoundCloud, and GitHub.
- **Dynamic Social Links**: Social media icons that fetch links dynamically from a JSON file, allowing easy updates.
- **Contact Information**: An email link for direct contact.

## Getting Started

To get the website running locally, follow these steps:

1. **Clone this repository**:
   ```bash
   git clone https://github.com/jisaiaha/royoplaysmusic.git
   ```
2. **Navigate to the directory**:
   ```bash
   cd royoplaysmusic
   ```
3. **Install dependencies** for the React and Flask components:
   - **Frontend (React)**:
     ```bash
     npm install
     ```
   - **Backend (Flask)**: 
     ```bash
     pip install -r requirements.txt
     ```
4. **Run the project**:
   - **Frontend**: Start the React development server.
     ```bash
     npm start
     ```
   - **Backend**: Start the Flask server.
     ```bash
     python app.py
     ```
   - Access the site at `http://localhost:3000` for the React frontend.

## File Structure

- **public/**: Contains static files and assets, such as images and `social-links.json`.
- **src/**: The main React components, including `App.js` and individual components for each section (e.g., `SocialLinks`, `Logo`, `Email`).
- **server/**: Flask backend server files, including `app.py` and database configuration.

## Tech Stack

- **Frontend**: React, JavaScript, CSS (using a minimalist, no-frills design)
- **Backend**: Flask for API and server-side functionality
- **Database**: PostgreSQL for tracking invoicing and hours worked
- **Hosting**: AWS EC2 instance
- **DNS**: Managed via IONOS, pointed to AWS Elastic IP

## Development Workflow

1. **Feature Branches**: Use feature branches to develop and test new features.
   ```bash
   git checkout -b feature/<feature-name>
   ```
2. **Push Changes**: If the branch doesn’t exist on the remote repository, push it using:
   ```bash
   git push -u origin feature/<feature-name>
   ```
3. **Create Pull Requests**: Open a pull request to merge changes into `main` when ready.

## Future Plans

Future development goals include:

- **Dynamic Content**: Expand the site to include additional dynamic content like event details and media samples.
- **Hours Tracking and Invoicing Platform**:
  - Develop a platform to streamline payments and track finances.
  - Support for both **hour-based** and **gig-based** invoicing.
  - Track balances owed by venues or clients.
  - Allow for reports on total hours worked and payments received.
- **Blog**: Add a blog to share updates and insights into music events and trends.

## License

This project is open source under the MIT license.
