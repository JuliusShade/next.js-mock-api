import { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    // Add more fields as needed
  };
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

const UserProfile: NextPage<UserProps> = ({ user }) => {
  return (
    <main>
      <h1>Profile Details</h1>
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        {/* Display more user details as needed */}
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<
  UserProps,
  IParams
> = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

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
