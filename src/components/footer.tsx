
export default function Footer() {
  return (
    <footer className="container flex flex-col pt-4 mt-4 border-t border-black">
      <nav className="flex flex-wrap justify-between lg:justify-around pb-12">
        <ul>
          <h3 className="font-bold text-2xl pb-2">Explore</h3>
          <div className="text-[1.25rem]">
            <li className="cursor-pointer hover:text-accentLight duration-200">Design ideas</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Color palettes</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Blog</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Apps</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Custom pages</li>
          </div>
        </ul>
        <ul>
          <h3 className="font-bold text-2xl pb-2">Community</h3>
          <div className="text-[1.25rem]">
            <li className="cursor-pointer hover:text-accentLight duration-200">Online Communities</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Creators</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Developers</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Partnerships</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Affiliates Program</li>
          </div>
        </ul>
        <ul>
          <h3 className="font-bold text-2xl pb-2">Download</h3>
          <div className="text-[1.25rem]">
            <li className="cursor-pointer hover:text-accentLight duration-200">iOS</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Android</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Windows</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Mac</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Linux/Unix</li>
          </div>
        </ul>
        <ul>
          <h3 className="font-bold text-2xl pb-2">Company</h3>
          <div className="text-[1.25rem]">
            <li className="cursor-pointer hover:text-accentLight duration-200">About</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Newsroom</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Careers</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Terms and Privacy</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Sustainability</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Security</li>
            <li className="cursor-pointer hover:text-accentLight duration-200">Mission Statement</li>
          </div>
        </ul>
      </nav>
      <div className="text-center border-t py-4">
        All Rights Reserved, nextBlog
      </div>
    </footer>
  );
}
