import CategoryPage from "@/components/CategoryPage";

const NavLinksPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string }>;
}) => {
  const { slug } = await params;
  const { sort } = await searchParams;

  return <CategoryPage slug={slug} sort={sort} />;
};

export default NavLinksPage;
