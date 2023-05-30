import { useEffect, useState } from "react";

const Passengers = ({onTotalChange, passengersRef}) => {

    const [adults, setAdults] = useState(0);
    const [childrens, setChildrens] = useState(0);
    const [infants, setInfants] = useState(0);
    const [total, setTotal] = useState(0);

    //Adultos
    const handleAddAdults = () => {
        setAdults( (c) => c + 1 );
    }
    const handleSubstractAdults = () => {
        if (adults === 0) {
            setAdults(0);
        }else{
            setAdults( (c) => c - 1 );
        }
    }
    
    //Niños
    const handleAddChildrens = () => {
        setChildrens( (c) => c + 1 );
    }
    const handleSubstractChildrens = () => {
        if (adults === 0) {
            setChildrens(0);
        }else{
            setChildrens( (c) => c - 1 );            
        }
    }
    //Infantes
    const handleAddInfants = () => {
        setInfants( (c) => c + 1 );
    }
    const handleSubstractInfants = () => {
        if (adults === 0) {
            setInfants(0);
        }else{
            setInfants( (c) => c - 1 ) ;           
        }
    }

    //Suma total
    useEffect(() => {
        const newTotal = adults + childrens + infants;
        setTotal(newTotal);
        onTotalChange(newTotal);
    }, [adults, childrens, infants, onTotalChange]);

    //Función para mantener el focus
    const handleClickOutside = (event) => {
        if (passengersRef.current && !passengersRef.current.contains(event.target)) {
          onClose && onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [handleClickOutside]);


  return (
    <>
        <div className="sectionContainer passengers" ref={passengersRef}>
            
            <div className="sectionContainer">
                <h4>Adults</h4>
                <div className="flex counter">
                    <button className="btn" onClick={handleSubstractAdults}>-</button>
                    <h5>{adults}</h5>
                    <button className="btn" onClick={handleAddAdults}>+</button>
                </div>
            </div>
            

            <div className="sectionContainer">
                <h4>Childrens</h4>
                <div className="flex counter">
                    <button className="btn" onClick={handleSubstractChildrens}>-</button>
                    <h5>{childrens}</h5>
                    <button className="btn" onClick={handleAddChildrens}>+</button>
                </div>
            </div>
            
            <div className="sectionContainer">
                <h4>Infants</h4>
                <div className="flex counter">
                    <button className="btn" onClick={handleSubstractInfants}>-</button>
                    <h5>{infants}</h5>
                    <button className="btn" onClick={handleAddInfants}>+</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Passengers