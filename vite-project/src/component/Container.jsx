import styles from "./Container.module.css";
const Container = (children)=>{
    return <div className={styles.cs_container}>
     {children.children}
    </div>
}
export default Container;