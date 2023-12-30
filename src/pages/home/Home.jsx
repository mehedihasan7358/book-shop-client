import AllBooks from "../AllBooks/AllBooks";
import Banner from "../Banner/Banner";
import BestBooks from "../BestBooks/BestBooks";


const Home = () => {
    return (
        <div>
            <Banner />
            <BestBooks/>
            <AllBooks/>
        </div>
    );
};

export default Home;