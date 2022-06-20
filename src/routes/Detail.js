import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail() {
  const { id } = useParams();
  const [ data, setData ] = useState({});
  const getMovie = async () => {
    const apiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const json = await(
      await fetch(apiUrl)
    ).json();
    setData(json.data.movie);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      Detail
    </div>
  )
}

export default Detail;