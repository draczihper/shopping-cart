import Navbar from "./Navbar";
import homeImage from "./assets/home.jpg"
import styles from "./App.module.css"

const App = () => {
  return (
    <>
      <Navbar />
      <img src={homeImage} alt="" className={styles.img} />
      <h1></h1>
    </>
  );
};

export default App;
