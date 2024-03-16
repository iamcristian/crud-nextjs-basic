"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";

type Post = {
  id: string;
  title: string;
  description: string;
  date: Date;
};

const Actual = () => {
  const [counter, setCounter] = useState(0);

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("/api/blogs");
      setPosts([...data.posts]);
    };

    fetchPosts();
  }, []);

  const createPost = async () => {
    const { data } = await axios.post("/api/blogs", {
      title: `title de sistema ${counter}`,
      description: "New Description for your app",
    });

    setPosts([...posts, data.post]);
    setCounter(counter + 1);
  };

  return (
    <main className="bg-neutral-900 h-screen w-screen flex flex-col items-center">
      <h1 className="text-center text-white text-2xl hover:text-opacity-30 mt-10">
        Posts
      </h1>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <ul className="flex flex-col gap-2 bg-neutral-500 p-8 rounded-lg">
          {posts?.map((post) => (
            <li key={post.id} className="bg-blue-500 text-neutral-800 px-5">
              <h2 className="text-base text-black">{post.title}</h2>
              <p className="text-sm">{post.description}</p>
            </li>
          ))}
        </ul>

        <button
          onClick={() => createPost()}
          className="rounded-lg bg-neutral-600 p-5 absolute bottom-10"
        >
          Create Post
        </button>
      </div>
    </main>
  );
};

export default Actual;
