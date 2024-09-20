import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import logo1 from "../assets/features/logo1.png";
import logo2 from "../assets/features/logo2.png";
import logo3 from "../assets/features/logo3.png";
import logo4 from "../assets/features/logo4.png";
import logo5 from "../assets/features/logo5.png";
import logo6 from "../assets/features/logo6.png";
const Features = () => {

    const data = [{
        img: logo1,
        title: "Available Category Structures", des: "We offer three top-level category structures to choose from.Whether you need the deep categorization provided by the IAB taxonomy or prefer a more simple category structure, we’ve got you covered."
    }, {
        img: logo2,
        title: "Smart Categorization Technology", des: "Our Website Categorization API uses a machine learning(ML) engine to scan a website’s content and meta tags.It extracts text to classify the site and assign up to three categories aided by natural language processing(NLP)."
    }, {
        img: logo3,
        title: "Extract logos on the fly",
        des: "One API call to get any company's up-to-date logo. Our APIs are real-time, you’ll get results even for the newest and most obscure brands with only one API call."
    },
    {
        img: logo4,
        title: "Social Media Links Scraper",
        des: "Get the list of links of all the social media channels of a domain. Our APIs are real-time, you'll get updated social media links always."
    },
    {
        img: logo5,
        title: "Parked Domains Recognition",
        des: "With this API you can check if a domain is actually parked and/or for sale. A parked domain is like an 'under construction' domain that is 'parked' and is doing nothing."
    },
    {
        img: logo6,
        title: "Company Information",
        des: "Unlock valuable company data with our Company API. Retrieve real-time company information, including name, location, size, funding, and industry tags."
    }]
    return (
        <Container id="features" className="mt-5">
            <h2 className='text-center text-black'>A Few of ValidX's Best Features</h2>

            <Row className='mt-4 w-100 mx-auto'>
                {data.map((item, index) => (
                    <Col className='g-4' key={index} md={4}>
                        <Card className='shadow-lg border h-100 pt-3' style={{ backgroundColor: "#6642d1" }}>

                            <div className='d-flex justify-content-center'>
                                <img src={item.img} alt={item.title} style={{ width: '50px', height: 'auto' }} />
                            </div>


                            <h5 className='text-center mt-3 px-2 text-white' style={{ fontStyle: 'italic' }}>
                                {item.title}
                            </h5>


                            <p className='text-white text-center px-3' style={{ fontSize: "14px" }}>
                                {item.des}
                            </p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    );
};

export default Features;
