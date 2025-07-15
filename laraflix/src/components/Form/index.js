import styles from "./Form.module.css";
import {categories} from "../Category";
import { useState } from "react";
import ToastError from "../ToastError";

function Form(){
    //hooks
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [newVideos, setVideos] = useState([]);
    const [errors, setErrors] = useState(null);

    //valida url
    const isValidYoutubeUrl = (url) => {
        const regex =/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w\-]{11}$/;
        if( !regex.test(url) || url.length < 43 ){
            setErrors("ERRO: URL inválida!");
            return null;
        }
        //extrai os ultimos 11 char que tem o id
        return url.substring(32, 43);
    }

    //valida categoria
    const isValidCategory = (category) => {
        if(!category || category === '-'){
            setErrors("ERRO: categoria inválida!")
            return null;
        }
        return category;
    }

    const onSave = (e)=>{
        //interrompe o comportamento do evento atual que é o subbmit, evitando o refresh
        e.preventDefault();
        const idVideo = isValidYoutubeUrl(url);
        const categoryVideo = isValidCategory(category);
        if(idVideo && categoryVideo){
            //salva o novo vídeo na array de videos novos
            const newVideo = {idVideo, category};
            setVideos([...newVideos, newVideo]);
        
            localStorage.setItem('videos', JSON.stringify([...newVideos, newVideo]));
            //lipar o form
            setUrl('');
            setCategory('');
            setErrors(null);
        }
    }

    return(
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label for="url">URL do vídeo:</label>
                    {/*  https://www.youtube.com/watch?v=xxxxxxxxxxx   43char*/}
                    <input id="url"
                     type="text"
                     placeholder="url"
                     value={url}
                     minLength="43"
                     maxLength="43"
                     onChange={e => setUrl(e.target.value)}
                     required/>  
                </div>
                <div>
                    <label for="category">Categoria:</label>
                    <select id="category"
                     value={category}
                     required
                     onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria</option>
                        {
                            categories.map(cat => 
                            <option key={cat} value={cat}>{cat}</option>)
                        }
                    </select>
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                    <button 
                    type="reset"
                    onClick={()=>localStorage.clear()}>
                    Desfazer tudo</button>
                </div>
                {errors && <ToastError msg={errors} onclose={() => setErrors(null)} />}
            </form>
        </section>
    );
}

export default Form;