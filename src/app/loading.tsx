const LoadingPage = () => {
  return (
    <main className="min-h-screen bg-[#F1F6F1] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8 space-y-3">
          <div className="skeleton h-8 w-48 bg-[#DFE7DF]"></div>
          <div className="skeleton h-4 w-64 max-w-full bg-[#DFE7DF]"></div>
        </div>

        {/* Search and Filter Skeletons */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <div className="skeleton h-12 w-full rounded-xl bg-[#DFE7DF] sm:flex-1"></div>
          <div className="skeleton h-12 w-full rounded-xl bg-[#DFE7DF] sm:w-36"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#DFE7DF] bg-[#FAFCFA] p-3 shadow-sm sm:p-4"
            >
              {/* Product Image */}
              <div className="skeleton aspect-square w-full rounded-xl bg-[#DFE7DF]"></div>

              {/* Product Details */}
              <div className="mt-4 space-y-3">
                <div className="skeleton h-3 w-20 bg-[#DFE7DF]"></div>
                <div className="skeleton h-4 w-full bg-[#DFE7DF]"></div>
                <div className="skeleton h-4 w-3/4 bg-[#DFE7DF]"></div>

                {/* Price */}
                <div className="flex items-center justify-between pt-2">
                  <div className="skeleton h-5 w-20 bg-[#DFE7DF]"></div>
                  <div className="skeleton h-8 w-8 rounded-full bg-[#DFE7DF]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
