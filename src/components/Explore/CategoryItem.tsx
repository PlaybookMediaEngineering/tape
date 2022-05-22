import React, { FC } from "react";

type Props = {
  category: { name: string; icon: React.ReactNode };
};

const CategoryItem: FC<Props> = ({ category }) => {
  return (
    <button className="flex items-center justify-between p-4 transition duration-300 ease-in-out bg-secondary hover:scale-105 rounded-xl">
      <span className="truncate">{category.name}</span>
      {category.icon}
    </button>
  );
};

export default CategoryItem;
