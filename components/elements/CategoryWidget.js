import Link from "next/link";

const CategoryWidget = ({ categories, activeCategory }) => {
  return (
    <div className="category-widget">
      <h4 className="category-widget-title">All Services</h4>
      <ul className="category-widget-list">
        {categories.map((category) => (
          <li key={category.href} className={category.href === activeCategory ? "active" : ""}>
            <Link href={category.href}>
              {category.title}
              <i className="icon-40"></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryWidget;
