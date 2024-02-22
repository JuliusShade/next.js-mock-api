// pages/index.tsx
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import "../app/globals.css";

interface User {
  id: number;
  name: string;
  // Add state properties for likes and dislikes
  liked?: boolean;
  disliked?: boolean;
}

interface HomeProps {
  users: User[];
}

const Home: NextPage<HomeProps> = ({ users: initialUsers }) => {
  // Use state to track likes and dislikes for users
  const [users, setUsers] = useState(initialUsers);

  // Function to handle likes
  const handleLike = async (userId: number) => {
    // Send a POST request to the server-side endpoint
    const res = await fetch(`/api/users/${userId}/like`, { method: "POST" });
    if (res.ok) {
      // Update the state to reflect the change in the UI
      setUsers(
        users.map((user) => {
          if (user.id === userId) {
            return { ...user, liked: true, disliked: false };
          }
          return user;
        })
      );
    }
  };

  // Function to handle dislikes
  const handleDislike = async (userId: number) => {
    const res = await fetch(`/api/users/${userId}/dislike`, { method: "POST" });
    if (res.ok) {
      // Update the state as needed
      setUsers(
        users.map((user) => {
          if (user.id === userId) {
            return { ...user, liked: false, disliked: true };
          }
          return user;
        })
      );
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      {" "}
      {/* This lightens the overall background */}
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">
          Profiles
        </h1>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="mb-4 p-4 bg-white rounded-md shadow-md"
            >
              {" "}
              {/* This makes user items white */}
              <div className="flex justify-between items-center">
                <Link href={`/users/${user.id}`}>
                  <div className="text-blue-800">{user.name}</div>{" "}
                  {/* Darker text for better contrast */}
                </Link>
                <div>
                  <button
                    onClick={() => handleLike(user.id)}
                    className="px-4 py-2 mr-2 rounded bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition duration-300"
                    disabled={user.liked}
                  >
                    {user.liked ? "Liked" : "Like"}
                  </button>
                  <button
                    onClick={() => handleDislike(user.id)}
                    className="px-4 py-2 rounded bg-blue-300 text-white hover:bg-blue-400 active:scale-95 transition duration-300"
                    disabled={user.disliked}
                  >
                    {user.disliked ? "Disliked" : "Dislike"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  // Initially, no users are liked or disliked
  const initialUsers = users.map((user) => ({
    ...user,
    liked: false,
    disliked: false,
  }));

  return {
    props: {
      users: initialUsers,
    },
  };
};

export default Home;
