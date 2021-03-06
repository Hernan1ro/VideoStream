import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";
import { connect } from "react-redux";

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header bg="header-background-1" />
      <Search />
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem isList={true} key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
