import MainSection from "../components/MainSection.tsx";
import Navbar from "../components/Navbar.tsx";
import SearchCars from "../components/SearchCars.tsx";

const GetCars = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <SearchCars />
    </>
  );
};

export default GetCars;
