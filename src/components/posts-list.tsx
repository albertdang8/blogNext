import Image from "next/image";

import React from "react";

export default async function PostsList() {
  const response = await fetch("https://dummyjson.com/posts?limit=4");
  const data = await response.json();

  return (
    <section className="bg-[#1c5d992d] p-4 border">
    <h1 className="text-3xl italic">Featured Posts:</h1>
      <ul className="flex flex-wrap gap-14 justify-around py-12">
        {data.posts.map((post: any) => (
          <li key={post.id} className="flex flex-col items-center">
            <Image src="/blogRef.png" alt="test" width={250} height={100} className="rounded-sm mb-4" />
            <div>
              <h2 className="max-w-[250px] font-bold capitalize text-2xl pb-8 border-b">{post.title}</h2>
              <h4 className="pt-2">
                Tags:{" "}
                {post.tags.map((tag: string, index: number) => (
                  <span key={index}>
                    <span className="cursor-pointer hover:text-accentLight transition-colors">#{tag}</span>
                    {index !== post.tags.length - 1 ? ", " : ""}
                  </span>
                ))}
              </h4>{" "}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
