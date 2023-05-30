import { useEffect, useRef, useState } from 'react';

//Librería para las fechas
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Iconos
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';

//Menú de opciones
import Select from 'react-select';

//Componentes
import Passengers from './Passengers';






const Search = () => {

  //Fechas

  //Check-In
  const [selectedDateCheckIn, setSelectedDateCheckIn] = useState();
  const handleDateChangeCheckIn = (date) => {
    setSelectedDateCheckIn(date);
  }
  //Check-Out
  const [selectedDateCheckOut, setSelectedDateCheckOut] = useState();
  const handleDateChangeCheckOut = (date) => {
    
    
    if(selectedDateCheckIn > date){
      alert('Select a correct date');
      setSelectedDateCheckOut();
    }else{
      setSelectedDateCheckOut(date);
    }
  }

  const passengersRef = useRef(null);

  const [total, setTotal] = useState(0);

  function handleTotalChange(newTotal) {
    setTotal(newTotal);
  }

  //UseRef
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  //Menu de ciudades
  const [cityOptions, setCityOptions] = useState([]);


  const [isCheckedRt, setIsCheckedRt] = useState(true);
  const [isCheckedOw, setIsCheckedOw] = useState(false);

  //Cambio de estado para RT
  const handleCheckboxChangeRt = (event) => {
    setIsCheckedRt(event.target.checked);
    setIsCheckedOw(false);
  };
  
  //Cambio de estado para RT
  const handleCheckboxChangeOw = (event) => {
    setIsCheckedOw(event.target.checked);
    setIsCheckedRt(false);
  };

  //Fetch a la API
  useEffect(() => {
    // Utilicé la API REST Countries para obtener la lista de países y sus ciudades
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Obtener la lista de ciudades de cada país
        const cityOptions = data.flatMap(country =>
          country.capital ? { value: country.capital, label: `${country.capital}, ${country.name.common}` } : []
        );
        setCityOptions(cityOptions);
      })
      .catch(error => {
        console.log('Error al obtener la lista de ciudades:', error);
      });
  }, []);




  return (
    <div className='search container section'>
      <div className="sectionContainer grid">

        <div className="btns flex">

          <div className={`singleBtn ${isCheckedRt ? 'active-check': ''}`}>
        
            <label htmlFor="roundTrip-checkbox">
              <span> <input 
                  type="checkbox" 
                  id='roundTrip-checkbox'
                  checked={isCheckedRt} 
                  onChange={handleCheckboxChangeRt}
                />Round-trip</span>
            </label>

          </div>

          <div className={`singleBtn ${isCheckedOw ? 'active-check': ''}`}>
        
            <label htmlFor="oneWay-checkbox">
              <span> <input type="checkbox" id='oneWay-checkbox' checked={isCheckedOw} onChange={handleCheckboxChangeOw}/>One-way</span>
            </label>

          </div>
          

        </div>

        <div className="searchInputs flex">

          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="texts">
              <h4>Where are you flying?</h4>
              <Select
                className='select-option'
                options={cityOptions}
                placeholder="From"
              />
              <Select
                className='select-option'
                options={cityOptions}
                placeholder="To"
              />
            </div>
          </div>

          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className="texts">
              <h4>Who is traveling?</h4>
              <input type="text" placeholder='Add guests' className='inputPassengers' ref={inputRef} onClick={handleClick}/>
              <Passengers onTotalChange={handleTotalChange} passengersRef={passengersRef}/>
            </div>
          </div>
          
          {/*Single Input*/}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <DatePicker placeholderText='Add date'selected={selectedDateCheckIn} onChange={handleDateChangeCheckIn}/>
            </div>
          </div>
          
          {/*Single Input*/}
          <div className={`singleInput flex ${isCheckedOw ? 'none': ''}`}>
            <div className="iconDiv">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <DatePicker placeholderText='Add date' selected={selectedDateCheckOut} onChange={handleDateChangeCheckOut}/>
            </div>
          </div>

          <button className='btn btnBlock flex'>Search Flight</button>

        </div>


      </div>

    </div>
  )
}

export default Search