import styles from "./Category.module.css";
import videos from "../../json/db.json"

//retorna uma array com todas as categorias listadas
export function setCategories(videos){
    const array = [];
    videos.forEach(v => {
        if(!array.includes(v.category)){
            array.push(v.category);
        }
    });
    return array;
}

//obtem a array de categorias para ser reutilizada em outros componentes
export const categories = setCategories(videos);

//retorna uma array com os videos de acordo com o nome da categoria
export function setFilterVideos(videos, nameCategory){
    return videos.filter( v => v.category.includes(nameCategory));
}

function Category({category, children}){
    return (
        <section className={styles.category}>
            <h1>{category}</h1>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Category;