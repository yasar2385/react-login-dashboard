# React Dashboard Application

## [Open Link](https://github.com/yasar2385/react-login-dashboard/)

## Description
This is a React application that provides a user login functionality and a protected dashboard. Only authenticated users can access the dashboard.

## Technologies Used
- React
- React Router
- Context API for state management

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yasar2385/react-login-dashboard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-login-dashboard
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure
- `src/`
  - `components/`
    - `ProtectedRoute.js`
  - `context/`
    - `AuthContext.js`
  - `pages/`
    - `LoginPage.js`
    - `DashboardPage.js`
  - `App.js`

## AuthContext
The `AuthContext` is used to manage user authentication state across the application.

## Routes
- `/login`: The login page for users to authenticate.
- `/dashboard`: The protected dashboard page accessible only by authenticated users.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributors
- [Yasar](https://github.com/yasar2385)

## Acknowledgements
- React documentation and community for their invaluable resources and support.

