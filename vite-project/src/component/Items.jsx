import styles from './Items.module.css'

const Items = ({foodItem,bool, handleBuyEvent}) => {
  let as = true;
  // const getFoodItems = (foodItem)=>{
  //  alert("Clicked" + foodItem)
  // }
  return (
    <ul className=' list-group'>
    <li className={`${styles['list-ab']} list-group-item  mb-1 ${bool && active}`} key={foodItem}>
      <span className={`${styles.floatas}` } >{foodItem}</span>
      <button type="button" id="result"
             className={`${styles['btn']} btn btn-info`} onClick={handleBuyEvent}>Buy</button>
    </li>
    </ul>
  );
};
//478197608912
export default Items;