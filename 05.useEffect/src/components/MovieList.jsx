import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useEffect, useState } from "react";

// 영화 API 정보 가져와서 영화랭킹 순서대로 화면에 띄우기
const MovieList = () => {
    let targetDt = '20250611';  // 날짜
    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;  // API 키
    // 아래 URL에 위의 날짜와 API 키를 대입
    const MOVIE_URL = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDt}`;

    const [movieList, setMovieList] = useState(null);  // movieList 초기화

    const getMovieList = async () => {  // URL에 있는 정보를 비동기로 가져오기 (async, await, axios 사용!)
        let res = await axios.get(MOVIE_URL);  // MOVIE_URL로 GET 요청을 보내고 결과를 저장
        let data = res.data;  // 저장된 결과의 데이터를 넣음

        // data.boxOfficeResult.dailyBoxOfficeList -> 찾고자하는 데이터가 있는 공간

        // dailyBoxOfficeList가 배열로 되어있으므로 map으로 순회
        // -> 이 때 dailyBoxOfficeList의 요소명은 item으로 통일
        let movies = data.boxOfficeResult.dailyBoxOfficeList.map((item) => ({  
            rank : item.rank,  // item의 rank 부분
            movieNm : item.movieNm,  // item의 movieNm 부분
            openDt : item.openDt  // item의 openDt 부분
        }));

        setMovieList(movies);  // movieList에 위의 rank, movieNm, openDt를 저장

    }

    useEffect(() => {  // 컴포넌트가 렌더링될 때 자동으로 getMovieList 함수를 실행
        getMovieList();
    }, [])

    return (  // html 공간
        // return() 안에는 반드시 <div>가 필수!
        <div>
            <h1>영화 목록</h1>  {/* 제목 */}
            <div>  {/* html에서 반복해서 출력하는 곳은 div안에 div를 작성! */}
                {movieList.map((movie) => (  // movieList 배열을 map 함수를 사용해 배열요소명을 movie로 설정하고 순회
                    <p key={movie.rank}>  {/* map에 사용할 인덱스인 key를 movieList의 rank로 설정 */}
                        {movie.rank}. {movie.movieNm} | {movie.openDt}  {/* '랭킹. 이름 | 개봉일' 형식 출력 */}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default MovieList