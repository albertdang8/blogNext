import PostsList from "@/components/posts-list";
import Image from "next/image";

export default async function Home() {

  return (
    <main>
      <section className="text flex flex-col items-center justify-between p-6 text-xl font-bold">
        <div className="flex max-lg:flex-col justify-between min-w-full ">
          <div className="flex justify-between mb-4 items-end px-1">
            <h1 className="w-[24ch] text-4xl">
              Fundamentals of Building a Blog Site in 2024: from Imagination to
              Code!
            </h1>
            <a
              href="#"
              className="text-[1.25rem] whitespace-nowrap lowercase italic hover:text-accentLight duration-200 underline underline-offset-4"
            >
              Read More
            </a>
          </div>
          <Image
            alt="blog reference image"
            src="/blogRef.png"
            width={300}
            height={300}
            layout="responsive"
            // objectFit="cover"
          />
        </div>
      </section>
      <section>
        <div>
          <h1>Recent Posts</h1>
          <PostsList />
        </div>
      </section>
    </main>
  );
}
