import {createContext, useContext, useState } from "react";

// Cria o contexto que será usado por outros componentes
export const FavoritesContext = createContext();

// Nome visível no React DevTools para facilitar debug
FavoritesContext.displayName = "MyFavorites";

// Provider é o componente que envolve a aplicação e fornece os dados
/*Cria o estado global favorite, que guarda os IDs (ou objetos) de filmes
 marcados como favoritos.
 Fornece esse estado e a função para atualizá-lo (setFavorite) para toda a
 aplicação.
 children são todos os componentes dentro do Provider
 (neste caso, todas as rotas).
*/
export default function FavoritesProvider({children}){
    const [favorite, setFavorite] = useState([]);
    return(
        <FavoritesContext.Provider
            value={{favorite, setFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
}

//Hook Personalizado
//toda função que começa com use é um hook
export function useFavoriteContext(){
    //utilizando o nosso contexto que acabamos de criar
    const {favorite, setFavorite} = useContext(FavoritesContext);
    
    const toggleFavorite = (newFavorite) =>{
        //é repetido?
        const isRepeteable = favorite.some(i => i.id === newFavorite.id);
        //caso já tenha na array de favoritos, remover através de filter
        if(isRepeteable){
            return setFavorite(favorite.filter((f)=>f.id !== newFavorite.id));
        }
        //caso não, adicione
        return setFavorite([...favorite, newFavorite]);
    };
    
    return {
        favorite,
        toggleFavorite
    }
}