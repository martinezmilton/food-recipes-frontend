import { useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryList.css';

type Props = {
    categories: { strCategory: string }[];
    onCategoryClick: (category: string) => void;
};

const CAT_POR_PAGE = 9;

const CategoryList = ({ categories, onCategoryClick }: Props) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(categories.length / CAT_POR_PAGE);
    const startIndex = (currentPage - 1) * CAT_POR_PAGE;
    const endIndex = startIndex + CAT_POR_PAGE;
    const currentCategories = categories.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="contenedor">
            <div className="grid-category">
                {currentCategories.map((category) => (
                    <CategoryCard
                        key={category.strCategory}
                        name={category.strCategory}
                        image={`https://www.themealdb.com/images/category/${category.strCategory}.png`}
                        onclick={() => onCategoryClick(category.strCategory)}
                    />
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
