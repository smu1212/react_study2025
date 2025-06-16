import React, { useEffect, useState } from 'react'
import axios from 'axios'

// .env(환경변수파일)
// - 외부에 노출되면 안되는 중요한 데이터를 보관하는 파일
//   ex) api key, url 등을 정의
// .gitignore 파일에 .env 설정까지 하면 깃허브에 올릴 때 업로드되지 않음!

// 날씨 아이콘, 지역, 기온을 페이지에 출력해보기!

const Weather = () => {

  let city = "Gwangju";  // 지역 : 광주
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;  // env에 넣은 API 키 호출
  // 위의 지역과 API 키를 아래의 URL에 삽입
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const [weather, setWeather] = useState("");  // 날씨 정보를 담을 weather 선언 및 초기화

  const getWeatherData = async () => {  // URL의 정보를 비동기로 가져오기 (async, await, axios 사용!)
    let res = await axios.get(WEATHER_URL);  // WEATHER_URL에 GET 요청을 보내고 결과를 저장
    let data = res.data;  // 저장한 결과의 데이터를 담음

    setWeather({  // weather에 아이콘, 지역, 기온 정보 저장!
      icon : data.weather[0].icon, // 아이콘 정보 -> weather부분이 콘솔창에서 배열로 되어있으므로 인덱스 표기
      city : data.name,  // 지역(도시)정보
      temp : data.main.temp  // 기온 정보
    })
  }

  useEffect(() => {  // 렌더링되는 순간 getWeatherData 함수 실행!
    getWeatherData();
  }, [])

  return (
    <div>
      <h1>2025.06.11</h1>
      {/* weather의 icon 정보를 이용해 참조 사이트 가져오기 */}
      <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨 아이콘"></img>  
      {/* weather의 city, temp 정보 가져오기 */}
      <p>현재 {weather.city}는 {weather.temp}℃입니다.</p>  
    </div>
  )

}

export default Weather