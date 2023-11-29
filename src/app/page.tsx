import PostsList from "@/components/posts-list";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-between p-6 text-xl font-bold">
        <div className="min-w-screen-lg flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col justify-between mb-4 md:mb-0 md:mr-6 w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl leading-tight mb-4 md:max-w-[24ch]">
              Fundamentals of Building a Blog Site in 2024: from Imagination to
              Code!
            </h1>
            <a
              href="#"
              className="text-base md:text-lg whitespace-nowrap lowercase italic hover:text-accentLight duration-200 underline underline-offset-4"
            >
              Read More
            </a>
          </div>
          <div className="relative w-full md:w-1/2">
            <Image
              alt="blog reference image"
              src="/p2.jpg"
              objectFit="contain"
              objectPosition="center"
              quality={100}
              width={400} // Adjust the width for larger screens
              height={400} // Adjust the height accordingly
              layout="responsive"
              className="rounded-sm w-[500px] h-[500px]"
            />
          </div>
        </div>
      </section>

      <PostsList />
    </main>
  );
}
