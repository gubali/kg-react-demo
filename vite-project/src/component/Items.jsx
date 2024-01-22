import styles from './Items.module.css'

const Items = ({foodItem, handleBuyEvent}) => {
  const getFoodItems = (foodItem)=>{
   alert("Clicked" + foodItem)
  }
  return (
    <li className={`${styles['list-ab']} list-group-item`} key={foodItem}>
      <span className={`${styles.floatas}`}>{foodItem}</span>
      <button type="button" id="result"
             className={`${styles['btn']} btn btn-info`} onClick={handleBuyEvent}>Buy</button>
    </li>
  );
};
//478197608912
export default Items;