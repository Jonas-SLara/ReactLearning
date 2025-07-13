import style from "./Container.module.css"

//recebe um parametro que vai ser o filho do componente
function Container({ children }){
    return(
        <section className={style.container}>
            {children}
        </section>
    );
}

export default Container;