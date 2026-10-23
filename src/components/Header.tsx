import Navbar from "./homepage/Navbar";
import NavLinks from "./homepage/NavLinks";

interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const Header = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    {
      next: { revalidate: 3600 },
    },
  );
  const categories: ICategory[] = await res.json();

  return (
    <header className="sticky top-0 z-50">
      <Navbar categories={categories} />
      <NavLinks categories={categories} />
    </header>
  );
};

export default Header;
