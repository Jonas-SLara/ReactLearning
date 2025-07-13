import styles from "./Category.module.css";
import videos from "../../json/db.json"

export const categories = [
  "philosophy",
  "science",
  "horror",
];

export function filterCategory(id){
  return videos.filter(video => video.category === categories[id])
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