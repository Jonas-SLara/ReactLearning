import styles from "./ToastError.module.css";

function ToastError({ msg, onclose}){
    return(
        <div className={styles.toast}>
            <span>{msg}</span>
            <button onClick={onclose}>X</button>
        </div>
    );
}

export default ToastError;