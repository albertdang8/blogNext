import Link from "next/link";
import Image from "next/image";

import React from "react";

export default async function PostsList() {
    
  const response = await fetch("https://dummyjson.com/posts?limit=5");
  const data = await response.json();

  return (
    <>
      <ul className="flex flex-wrap gap-4 justify-around">
        {data.posts.map((post: any) => (
            <li key={post.id} className="">
                <Image src="/blogRef.png" alt="test" width={250} height={100}/>
                <h2 className="max-w-[250px]">{post.title}</h2>
            </li>
        ))}
      </ul>
    </>
  );
}
