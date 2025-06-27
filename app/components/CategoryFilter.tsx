'use client';

import { useEffect, useState } from 'react';

interface Props {
    selectedCategory: string;
    onSelectCategory: (val: string) => void;
    categories: string[];
}

export default function CategoryFilter({
    selectedCategory,
    onSelectCategory,
    categories,
}: Props) {
    const [selected, setSelected] = useState(selectedCategory);

    useEffect(() => {
        setSelected(selectedCategory);
    }, [selectedCategory]);

    const handleChange = (category: string) => {
        setSelected(category);
        onSelectCategory(category);
    };


    return (
        <div className="flex flex-wrap gap-4 max-w-6xl mx-auto py-6">
            {['All', ...categories].map((category) => (
                <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selected === category || (category === 'All' && selected === '')}
                        onChange={() => handleChange(category === 'All' ? '' : category)}

                        className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:border-purple-600 checked:bg-purple-600 transition-colors"
                    />
                    <span
                        className={`text-base font-medium ${selected === category || (category === 'All' && selected === '')
                            ? 'text-green-900'
                            : 'text-gray-700'
                            }`}
                    >
                        {category}
                    </span>
                </label>
            ))}
        </div>
    );
}
