import styles from './Items.module.css'

const Items = (prop) => {
  const getFoodItems = (prop)=>{
   alert(prop)
  }
  return <>
    <li className={`${styles['list-ab']} list-group-item`} key={prop.foodItem}>
      <span className={`${styles.floatas}`}>{prop.foodItem}</span>
      <button type="button" id="result"
             className={`${styles['btn']} btn btn-info`} onClick={()=>getFoodItems(prop.foodItem)}>Buy</button>
    </li>
  </>
}
//478197608912
export default Items;