# HR-ERP Frontend

This project is the frontend for the HR-ERP system, built using React and Vite. It includes features for managing candidates, employees, attendance, leaves, and user authentication with a modern UI design.

## Description

The HR-ERP frontend provides a comprehensive interface for HR management tasks. It includes modules for:

- **Candidate Management**: View and manage job applicants, filter by status/position, and add new candidates with file uploads.
- **Employee Management**: View employee details, edit profiles with inline editing, and use a custom calendar for date selection.
- **Attendance Management**: Track employee attendance, toggle status, and filter by various criteria.
- **Leave Management**: Manage leave requests with calendar integration, status tracking, and document uploads.
- **User Authentication**: Secure login and registration with token-based authentication.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modular Architecture**: Organized components for easy maintenance and scalability
- **State Management**: Efficient state handling with React useState and useEffect
- **Dynamic UI Elements**: Dropdown menus, modals, and interactive tables
- **API Integration**: Connects to a backend API for data retrieval and management
- **Form Validation**: Basic client-side validation for input fields

## Technologies Used

- **Frontend**: React, Vite, JavaScript ES6, CSS Modules
- **UI Components**: React Icons, Custom SVG components
- **Styling**: CSS Flexbox/Grid, Responsive design
- **Form Handling**: Controlled components, File input management
- **State Management**: LocalStorage for token persistence
- **Development Tools**: ESLint, Node.js, npm

## Getting Started / Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**  
   Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/techux/HR-ERP-frontend.git
   ```

2. **Navigate to Project Directory**  
   Change into the project directory:

   ```bash
   cd HR-ERP-frontend
   ```

3. **Install Dependencies**  
   Install all required dependencies using npm:

   ```bash
   npm install
   ```

4. **Configure Environment Variables**  
   Create a `.env` file in the project root and set your base API URL:

   ```
   VITE_API_BASE_URL=http://localhost:8080
   ```

5. **Run the Development Server**  
   Start the application in development mode:

   ```bash
   npm run dev
   ```

6. **Open in Browser**  
   Access the app at `http://localhost:3000` in your browser

## Deployment / Live URL

The application is deployed on Vercel. You can view the live site here:

[https://hr-erp-frontend.vercel.app](https://hr-erp-frontend.vercel.app)

To deploy your own version:

1. Push code to a GitHub repository
2. Connect to Vercel/Netlify/GitHub Pages
3. Configure environment variables in deployment service

## Folder Breakdown

- **src/components/**: Contains all React components organized by module
- **src/assets/**: Stores static assets like images
- **src/css/**: Contains CSS files for styling
- **src/App.jsx**: Root component that handles routing
- **vite.config.js**: Vite configuration file
- **.env**: Environment variables for API endpoints

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## Acknowledgements

- **React** - For the component-based architecture
- **Vite** - For the fast build setup
- **ESLint** - For maintaining code quality
- **React Icons** - For easy icon integration

## Endnotes

Thank you for your interest in the HR-ERP Frontend project! Please direct any questions to the repository owner [@techux](https://github.com/techux).
