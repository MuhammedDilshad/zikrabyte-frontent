import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FinalSection from "../../components/FinalSection/FinalSection";
import Banner from "../../components/Banner/Banner";
import SecondSection from "../../components/SecondSection/SecondSection";
import Items from "../../components/Items/Items";
import { getListData } from "../../Api/ListReques";
import { useState } from "react";
import { useEffect } from "react";
import Uploadimage from "../../components/Uploadimage/Uploadimage";

function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListData();
        console.log(response.data, "home");
        setList(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <Uploadimage /> */}
      <Header />
      <Banner />
      <SecondSection />

      {list.map((data) => (
        <Items
          productTitle={data.productTitle}
          productContent={data.productContent}
          image={data.image}
          key={data._id}
        />
      ))}

      <FinalSection />
      <Footer />
    </div>
  );
}

export default Home;
