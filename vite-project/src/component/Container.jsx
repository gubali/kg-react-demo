import styles from "./Container.module.css";
const Container = (props)=>{
    return <div className={styles.cs_container}>
     {props.children}
    </div>
}
export default Container;