# User Profiles Application

This is a Next.js application that displays a list of user profiles with dynamic routing to individual user details and server actions for liking or disliking profiles.

## Features

- **Home Page**: Displays a list of user profiles.
- **Dynamic Routing**: Allows users to click on a profile to view more details, utilizing Next.js's file-system-based routing.
- **Server Actions/API Routes**: Users can "like" or "dislike" profiles through API routes which handle POST requests to update user preferences.

## How to Run the Application

To get the application up and running on your local machine, follow these steps:

1. Clone the repository:

   \```bash
   git clone https://your-repository-url.git
   cd your-repository-directory
   \```

2. Install dependencies:

   \```bash
   npm install
   \```

   or if you're using `yarn`:

   \```bash
   yarn
   \```

3. Start the development server:

   \```bash
   npm run dev
   \```

   or with `yarn`:

   \```bash
   yarn dev
   \```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

Describe how to run the automated tests for this system (if applicable).

## Deployment

Instructions on how to deploy the application (if applicable).

## Dynamic Route Functionality

The application uses Next.js's dynamic routing feature to create a unique route for each user profile. When a user clicks on a profile from the home page, they are taken to a route like `/users/{id}`, where `{id}` is the unique identifier for the selected user profile. The user's detailed information is then fetched and displayed.

## Server Action/API Route Functionality

The application includes API routes such as `/api/users/{id}/like` and `/api/users/{id}/dislike` to handle like and dislike actions for each user profile. When these endpoints receive a POST request, the server performs the necessary actions to record the user's preference. This could involve updating a database or storing the data in memory.

---

For more information on Next.js, check out the [Next.js documentation](https://nextjs.org/docs).
