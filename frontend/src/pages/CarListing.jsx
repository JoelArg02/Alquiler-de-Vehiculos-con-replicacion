import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortedCars, setSortedCars] = useState(carData);
  const [sortValue, setSortValue] = useState('');

  useEffect(() => {
    if (sortValue === "low") {
      const sorted = [...carData].sort((a, b) => a.price - b.price);
      setSortedCars(sorted);
    } else if (sortValue === "high") {
      const sorted = [...carData].sort((a, b) => b.price - a.price);
      setSortedCars(sorted);
    } else {
      setSortedCars(carData);
    }
  }, [sortValue]);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={(e) => setSortValue(e.target.value)}>
                  <option>Seleccionar</option>
                  <option value="low">Precio más bajo al más alto</option>
                  <option value="high">Precio más alto al más bajo</option>
                </select>
              </div>
            </Col>

            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
