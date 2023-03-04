import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCatergory = (newCategory) => {
        if ( categories.includes(newCategory) ) return
        setCategories( prevCategories => [newCategory, ...prevCategories])
    }

    return (
        <>        
            <div>GifExpertApp</div>
            <AddCategory
                onNewCategory={onAddCatergory}
            />
            {
                categories.map( (category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}