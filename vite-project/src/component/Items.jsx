import styles from './Items.module.css'

const Items = (prop) => {
    console.log(prop);
    return <>
     <li className={`${styles['list-ab']} list-group-item`} key={prop.foodItem}>
   <span>{prop.foodItem}</span>
  </li>
</>
}
//478197608912
export default Items;