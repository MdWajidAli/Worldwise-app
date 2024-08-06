import Cityitem from "./Cityitem"
import styles from "./CityList.module.css"
import Spinner from "./Spinner"
import PropTypes from "prop-types"
import Message from "./Message"



function CityList({cities, isLoading}){

    if(isLoading) return <Spinner />;

    if(!cities.length)
         return( <Message message="Add your first cty by clicking on a city on the map" />)

    return (
        <ul className={styles.cityList}>
           {cities.map(city => <Cityitem city={city} key={city.id}/>)}
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

export default CityList;