import type { NextApiRequest, NextApiResponse } from "next";

// This is a placeholder function to simulate database updates
const updateUserLikes = async (userId: number) => {
  console.log(`User ${userId} liked.`);
  // Here, you would update the user's likes in your database
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id } = req.query;
    await updateUserLikes(Number(id));
    res.status(200).json({ message: "User liked." });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
