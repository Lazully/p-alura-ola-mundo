import { Route, useParams, Routes } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "Componentes/PostModelo";
import ReactMarkdown from "react-markdown"
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "Componentes/PaginaPadrao";
import './post.css'
import styles from './post.module.css'
import PostCard from "Componentes/PostCard";


export default function Post() {

    const parametros = useParams();

    console.log(PerformanceObserverEntryList)

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a,b) => b.id - a.id) /* Ordenar de forma descrescente */
        .slice(0, 4);

    return (
/*         <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={

                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                    </PostModelo>}>

                </Route>
            </Route>
        </Routes> */

        <PaginaPadrao>
            <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar: 
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>

                    </PostModelo>
        </PaginaPadrao>

    )

}