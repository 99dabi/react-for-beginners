import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

//app.js 에서 :id로 넘김 값을 detail.js 에서 useParams를 사용해 받음
function Detail() {
  const { id } = useParams();

  //로딩바
  const [loading, setLoading] = useState(true);
  //영화정보
  const [movie, setMovie] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //영화 데이터 입력
    setMovie(json.data.movie);
    //console.log(json);
    //console.log(movie);

    //표기되고 있는 로딩 제거
    setLoading(false);
  };
  useEffect(() => {
    //await : async 함수 내부에 있지 않으면 사용 불가능 함
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.large_cover_image} />
        </div>
      )}
    </div>
  );
}
export default Detail;
