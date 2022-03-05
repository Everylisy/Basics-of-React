import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";


function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const {id} = useParams()
    const getMovie = useCallback(async() => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovies(json.data.movie)
        setLoading(false)
        console.log(json)
        }, [id])
        
        useEffect(() => {
        getMovie()
        }, [getMovie])

    return (
        <div>
        {loading ? <h1>Loading...</h1> : 
        <div>
            <img src={movies.background_image_original} alt={movies.title}/>
            <h2>{movies.title}</h2>
            <p>{movies.description_full}</p>
            <ul>
                {movies.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>⭐Rating : {movies.rating}</p>
            <p>👍Like : {movies.like_count}</p>
            </div>}
      </div>
        )
}

export default Detail;