import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#05893E]">404</h1>
        <p className="mt-3 text-lg">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি</p>
        <Link href="/" className="btn mt-5 bg-[#05893E] text-white">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
