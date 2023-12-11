import './weather.css'
import * as React from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { GrLinkNext } from 'react-icons/gr'

const WeatherApp = () => {
  const [state, setState] = React.useState(false)
  return (
    // <div className='weather-app'>
    //   <br />
    //   <br />
    //   <div className='search_input'>
    //     <label htmlFor='' className='label_name'>
    //       Search By CityName
    //     </label>
    //     <label htmlFor='' className='label_name'>
    //       Seaarch By PinCode
    //     </label>
    //     <input
    //       type='text'
    //       className='search_city'
    //       value={city}
    //       onChange={e => setCity(e.target.value)}
    //     />
    //     <input
    //       type='text'
    //       className='code_search'
    //       value={pincode}
    //       onChange={e => setPincode(e.target.value)}
    //     />
    //   </div>
    //   <br />
    //   <br />
    //   <br />
    //   {weatherData && (
    //     <>
    //       <WeatherCard
    //         temperature={weatherData?.main?.temp}
    //         conditions={weatherData?.weather?.[0]?.description}
    //         humidity={weatherData?.main?.humidity}
    //         windSpeed={weatherData?.wind?.speed}
    //         city={weatherData?.name}
    //       />
    //       <div className='forecast-container'>
    //         {weatherData &&
    //           weatherData?.length >= 2 &&
    //           weatherData.forecast.map(dayForecast => (
    //             <ForecastCard
    //               key={dayForecast.date}
    //               date={dayForecast.date}
    //               temperature={dayForecast.temperature}
    //               conditions={dayForecast.conditions}
    //             />
    //           ))}
    //       </div>
    //     </>
    //   )}
    // </div>

    <>
      <div class='card'>
        <div class='back'></div>
        <div class='front'>
          <div class='imgset'>
            <img
              style={{ width: '100%' }}
              alt='img'
              src='https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png'
            />
          </div>
        </div>
        <div class='text-container'>
          <div className='next_icon'>
            <GrLinkNext onClick={() => setState('click1')} />
          </div>
          <p id='head'>Happy Birthday!</p>
          <h5>@LPW_Sajid</h5>
          <p>
            I hope your special day will bring you lots of happiness, love, and
            fun. You deserve them a lot. Enjoy!
          </p>
          <p>Hope your day goes great!</p>
          <div className='next_icon'>
            <GrLinkNext onClick={() => setState('click1')} />
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherApp
