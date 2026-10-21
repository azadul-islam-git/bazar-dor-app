import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-white items-center p-4 max-w-7xl mx-auto py-6 px-4">
      <aside className="grid-flow-col items-center">
        <p className="text-sm">বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p className="text-sm">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
