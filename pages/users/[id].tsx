// pages/users/[id].tsx
import { GetServerSideProps, NextPage } from "next";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  // Add any additional fields you need
}

interface UserProps {
  user: User;
}

const UserProfile: NextPage<UserProps> = ({ user }) => {
  // Format the phone number if necessary
  const formattedPhone = user.phone.replace(/[^\d+]/g, "");

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-500 text-white p-6">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p>
          Email:{" "}
          <a href={`mailto:${user.email}`} className="hover:text-blue-300">
            {user.email}
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href={`tel:${formattedPhone}`} className="hover:text-blue-300">
            {user.phone}
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href={`http://${user.website}`}
            target="_blank"
            className="hover:text-blue-300"
          >
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  // Replace the URL with your API endpoint URL
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();

  // If the user does not exist, you can redirect or return a 404
  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
  };
};

export default UserProfile;
