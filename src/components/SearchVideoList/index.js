import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList";
import { useState } from "react";

//pega todas as categorias existentes
function setCategories(videos){
    const array = [];
    videos.forEach(v => {
        if(!array.includes(v.category)){
            array.push(v.category);
        }
    });
    return array;
}

function setFilterVideos(videos, nameCategory){
    return videos.filter( v => v.category.includes(nameCategory));
}

function SearchVideoList({videos}){
    const categories = setCategories(videos);
    const [nameCategory, setSearch] = useState();
    const filterVideos = setFilterVideos(videos, nameCategory);


    return(
        <section className={styles.searchVideoList}>
            <input
                list="category"
                placeholder="Search"
                onChange={event => setSearch(event.target.value)}
            />
            <datalist id="category">
                {
                    categories.map(c => (
                        <option value={c} key={c}></option>
                    ))
                }
            </datalist>
           <VideoList videos={filterVideos}/>
        </section>
    );
}

export default SearchVideoList;