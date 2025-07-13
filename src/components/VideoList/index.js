import Card from "../Card";
import styles from "./VideoList.module.css";

function VideoList({videos}){
    let x = videos.length
    return(
        <>
            <h3>Total: {x}</h3>
            <section className={styles.VideoList}>
               {videos.map(video => ( <Card id={video.id} key={video.id}/> ))}
            </section>
        </>
    );
}

export default VideoList;