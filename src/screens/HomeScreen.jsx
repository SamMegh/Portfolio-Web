import samimage from "../assets/Profile_Photo.png";
import Header from "../components/header.jsx";
function HomeScreen() {
  return (
    <div className="Main-screen">
      <div className="wrapper">
        <Header/>

        <div className="content">
          <div className="samImage">
            <img src={samimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
