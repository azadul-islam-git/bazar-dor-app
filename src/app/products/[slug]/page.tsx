import ProductDetails from "@/components/ProductDetails";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
};

export default ProductDetailsPage;
