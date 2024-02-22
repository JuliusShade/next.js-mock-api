import type { NextApiRequest, NextApiResponse } from "next";

const updateUserDislikes = async (userId: number) => {
  console.log(`User ${userId} disliked.`);
  // Here, you would update the user's dislikes in your database
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id } = req.query;
    await updateUserDislikes(Number(id));
    res.status(200).json({ message: "User disliked." });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
