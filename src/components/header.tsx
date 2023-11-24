import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function header() {
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image src="/logo/logo.png" alt="logo" height={50} width={50} />
      </Link>
      <ul className="flex gap-4 font-semibold text-xl">
        <Link href="/">
        <li>Home</li>
        </Link>
        <Link href="/posts">
        <li>myPosts</li>
        </Link>
      </ul>
    </header>
  );
}
