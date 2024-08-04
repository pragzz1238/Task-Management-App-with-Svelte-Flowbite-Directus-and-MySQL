# Task Management App with Svelte Flowbite Directus and MySQL

This project is a task management application built with Directus, MySQL, Svelte, and Flowbite. It includes a backend configured with Directus for managing tasks and user authentication, and a frontend using Svelte and Flowbite for a responsive user interface.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18)
- [MySQL](https://www.mysql.com/) (version 8 or later)
- [Postman](https://www.postman.com/downloads/) (for testing API endpoints)

## Setup and Installation

### Backend Setup

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/pragzz1238/Task-Management-App-with-Svelte-Flowbite-Directus-and-MySQL.git
    cd Task-Management-App-with-Svelte-Flowbite-Directus-and-MySQL
    ```

2. **Navigate to the Backend Directory**:
    ```sh
    cd backend
    ```

3. **Install Dependencies**:
    ```sh
    npm install
    ```

4. **Create and Configure MySQL Database**:
    - Create a database named `directus` in MySQL.
    - Update the `.env` file with your MySQL credentials:
      ```env
      DB_CLIENT=mysql
      DB_HOST=127.0.0.1
      DB_PORT=3306
      DB_DATABASE=directus
      DB_USER=your_mysql_username
      DB_PASSWORD=your_mysql_password
      ```

5. **Run Directus Setup**:
    ```sh
    npx create-directus-project .
    ```

6. **Start the Directus Server**:
    ```sh
    npx directus start
    ```
     
7. **Configure Directus for Task Management**:
    - Follow the steps in [Section 4 of the project documentation](link-to-documentation#section-4) to configure Directus for task management. This includes setting up collections, fields, and roles necessary for managing tasks.
      
### Frontend Setup

1. **Navigate to the Frontend Directory**:
    ```sh
    cd ../frontend
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Start the Frontend Server**:
    ```sh
    npm run dev
    ```

## Running the Project

1. **Start the Backend**:
    - Ensure that MySQL is running.
    - Start the Directus server by navigating to the backend directory and running:
      ```sh
      npx directus start
      ```

2. **Start the Frontend**:
    - Navigate to the frontend directory and run:
      ```sh
      npm run dev
      ```

3. **Open the Application**:
    - Visit `http://localhost:5173` in your web browser to access the frontend application.

4. **Test the API** (optional):
    - Use Postman to test authentication and task management API endpoints. For example, use the `POST http://localhost:8055/auth/login` endpoint to authenticate users.

## Usage

- **Frontend**: Provides a user-friendly interface for managing tasks. Use the provided forms to add, update, and delete tasks.
- **Backend**: Manages tasks and user authentication. Ensure that Directus is properly configured to handle CRUD operations for tasks and user roles.

## Troubleshooting

If you encounter any issues during setup or usage, please refer to the [project documentation](https://docs.google.com/document/d/1Qi_enhhbSwvz8Y9sT7ZzBHy_yb7YmhH9/edit?usp=sharing&ouid=113151971144209721830&rtpof=true&sd=true) for detailed instructions and troubleshooting tips.
