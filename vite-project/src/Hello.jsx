function Hello() {
  //let fName = "Haniya";
  //let lName = "Asif";
  let fullName = () => {
    // return fName + " " + lName;
    return "Khan"
  };
  return <p>This is Dynamic component {fullName()}</p>;
}
export default Hello;
