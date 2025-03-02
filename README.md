# JHub Mobule 1b - Rich Web Application


> **TODO**: Short and slightly sarcastic summary of the repo

## Features

- Unclassified
- Responsive
- Connects to the Companies House API to search for companies based on name
- Allows user to interact with the API through additional calls, by viewing further information about a specific company
- Managed through a git-based tool
- Reasonably easy to use from a UX perspective
- No obvious plagiarism (I thought you spelt plagiarism wrong in the mark scheme until I googled it, turns out I've been spelling it wrong for years)
- Includes a PDF of the course certificate
- Uses React
- No major errors present

## Prerequisites

- **Node.js** and **npm**
- A **Companies House API key**. Sign up for an API key from [GOV.uk](https://developer-specs.company-information.service.gov.uk/guides/quickStart).

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/jackduffield/jhub-1b.git
   cd jhub-1b
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add your Companies House API key:
   
   ```
   REACT_APP_COMPANIES_HOUSE_API_KEY=your_actual_api_key_here
   ```

4. Run the application:

   ```bash
   npm start
   ```

5. Open your browser and go to http://localhost:3000 to use the application.

## Project Structure
```
companies-house-search/
├── public/                     # Public directory for HTML and static files
├── src/                        # React components and main files
│   ├── components/             # Component directory
│   │   ├── SearchBar.js        # Component for the search bar
│   │   ├── CompanyList.js      # Component for displaying company search results
│   │   └── CompanyDetail.js    # Component for displaying company details
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point of the React application
│   └── styles.css              # Styling for the app
├── .env.example                # Example environment file for API keys
├── .gitignore                  # Files and directories to ignore in Git
├── README.md                   # Project information and setup instructions
└── package.json                # Project metadata and dependencies
```
## Available Scripts

In the project directory, you can run:

    npm start - Runs the app in development mode.
    npm test - Launches the test runner.
    npm run build - Builds the app for production.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

This project uses data from the Companies House API.
