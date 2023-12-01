export default function Footer() {
// Add to the list here, client, you probably don't need to touch the return(code). 
  const footerItems = [
    {
      category: "Explore",
      items: ["Design ideas", "Color palettes", "Blog", "Apps", "Custom pages"],
    },
    {
      category: "Community",
      items: [
        "Online Communities",
        "Creators",
        "Developers",
        "Partnerships",
        "Affiliates Program",
      ],
    },
    {
      category: "Download",
      items: ["iOS", "Android", "Windows", "Mac", "Linux/Unix"],
    },
    {
      category: "Company",
      items: [
        "About",
        "Newsroom",
        "Careers",
        "Terms and Privacy",
        "Sustainability",
        "Security",
        "Mission Statement",
      ],
    },
  ];

  return (
    <footer className="container flex flex-col pt-4 mt-4 border-t border-black">
      <nav className="flex flex-wrap justify-between lg:justify-around pb-12">
        {footerItems.map((category, index) => (
          <ul key={index}>
            <h3 className="font-bold text-2xl pb-2">{category.category}</h3>
            <div className="text-[1.25rem]">
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-accentLight duration-200"
                >
                  {item}
                </li>
              ))}
            </div>
          </ul>
        ))}
      </nav>
      <div className="text-center border-t py-4">
        All Rights Reserved, ©nextBlog
      </div>
    </footer>
  );
}
