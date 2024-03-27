# Pinterest Clone

This is a Pinterest clone project focusing on the core features of the Pinterest platform, including user authentication, profile management, pin feed, pin saving, deletion, editing, and pin uploading functionalities.

## Features

### Authentication

- **Register**: Users can create a new account by providing necessary details like username, email, and password.
- **Login**: Registered users can log in using their credentials to access the application.

### Profile Management

- **Profile**: Users have a dedicated profile page where they can view their information and manage their boards.
- **Boards**: Users can create and manage boards to organize their pins.

### Feed

- **Feed**: The feed page displays a collection of pins from different users, allowing users to discover new content.

### Pin Actions

- **Save**: Users can save pins to their boards for later reference.
- **Delete**: Users can remove pins from their boards.
- **Edit**: Users can modify the details of their pins.

### Upload

- **Upload**: Users can upload new pins to share with others.

## Routes

- **/register**: Register a new user account.
- **/login**: Log in to the application.
- **/profile**: View and manage user profile and boards.
- **/feed**: Explore pins from different users.
- **/save/:pinid**: Save a pin to a specific board.
- **/delete/:pinid**: Remove a pin from a board.
- **/edit**: Edit pin profile picture
- **/upload**: Upload new pins.

## Technologies Used

- **Frontend**: HTML,Tailwind Css,JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**:Moongoose(passport package)

## Getting Started

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up MongoDB and configure database connection.
5. Create a `.env` file and set environment variables (e.g., PORT, DB_URI, JWT_SECRET).
6. Run the server using `npm start`.
7. Access the application in your browser.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## License

This project is licensed under the [MIT License](LICENSE).