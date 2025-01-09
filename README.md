
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
   - **Backend (Flask)**: The requirements will automatically be installed into a virtual environment by running venv_setup.py script in the backend directory. The script should also tell you the command to execute to activate the virtual python environment.
 
4. **Run the project**:
   - **Frontend**: Start the React development server. This command should be executed in the root directory.
     ```bash
     npm start
     ```
   - **Backend**: First, ensure that the virtual environment (located in backend) is activated. 
   
   For Windows environments, use the .bat file to activate the environment

   ```
   venv\Scripts\activate
   ```

   For Linux / Git Bash environments, use the following command to activate the environment.

   ```bash
   source venv/Scripts/activate
   ```

   After activating the virtual environment, you may start the Flask server. 
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
