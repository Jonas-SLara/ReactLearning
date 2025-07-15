import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList";
import { useState } from "react";

import { categories, setFilterVideos} from "../Category";

function SearchVideoList({videos}){

    const [nameCategory, setSearch] = useState();
    const filterVideos = setFilterVideos(videos, nameCategory);

    return(
        <section className={styles.searchVideoList}>
            <input
                list="category"
                placeholder="Search"
                onChange={(event) => setSearch(event.target.value)}
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