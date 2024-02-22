// app/page.tsx
import Link from "next/link";
import { GetStaticProps } from "next";

interface User {
  id: number;
  name: string;
}

interface HomeProps {
  users: User[];
}

const Home: NextPage<HomeProps> = ({ users }) => {
  return (
    <div>
      <main>
        <h1>Profiles</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <div>{user.name}</div>
              </Link>
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

  return {
    props: {
      users,
    },
  };
};

export default Home;
