# Lab-3

Search Feature:

Users can search for specific movies by entering keywords in the search bar.
Routing:

Users can easily navigate between multiple pages in the app using React Router, such as:
Home Page (Movies List).
Movie Details Page.
Favorites Page.
Watchlist Page.
Pagination:

Implemented pagination to allow users to browse through movies across multiple pages.
Users can navigate between pages to view all available movies.

# Lab-4

At the beginning of the app, the user encounters a form for a fake login.

The form validates the following fields:

Email: Must follow a valid email format.
Name: Must contain only letters and spaces.
Username: Must contain only letters and numbers (no spaces).
Password: Must be at least 8 characters long and contain an uppercase letter, a lowercase letter, a number, and a special character.
Confirm Password: Must match the password.
Once all validations are successful, the user is granted access to the movie app.

Main Features of the App:
Favorite Movies:

Users can add movies to a favorites page.
Navigate to the favorites page easily via the navbar.
Remove movies from favorites.
State Management:

Used Redux Toolkit to manage state across the entire application.

# Lab-5

Features Added:
Language Dropdown:

A dropdown in the navbar allows users to switch between two languages: English and Arabic.
The selected language is stored globally using Context API.
Changing the language:
Updates the app's direction:
Adjusts the movie data fetched to match the selected language.

React.lazy and Suspense:
Implemented lazy loading for all pages to enhance performance.
Pages are only loaded when the user navigates to them, reducing the initial load time of the app.
Fallback Component:
While a page is loading, a simple Loading... message is displayed for a better user experience.
