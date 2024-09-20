import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'react-bootstrap';
import bodySec from "../assets/bodySec.png"
const WhyValidX = () => {
    const data = [{
        title: "Cutting-Edge Precision",
        des: "Our website categorization API is highly accurate. A simple lookup of a company will classify its industry within 385 possible topic categories."
    }, {
        title: "Aligned With Industry Standards",
        des: "Our classification taxonomy is based on the IAB V2 standard, it can be used for 1 - 1 personalization, marketing segmentation, online filtering and more."
    }, {
        title: "Automate Analysis of Merchants Web",
        des: "With the same API call, you can get also any company's up-to-date logo. Extract logos on the fly on any domain, URL or IP address."
    }];

    return (
        <Container id="why" className="mt-5 ">
            <h2 className='text-center'>Why ValidX?</h2>
            
            <Row className='mt-2 mt-md-5 mx-auto  w-100 '>
                {data.map((item, index) => (
                    <Col className=' mt-2 ' key={index} md={4}>
                        <Card className='shadow-lg border  h-100' style={{ "boxShadow": "0 4px 8px rgba(191, 84, 189, 0.5)" }} >
                            <CardHeader className='fw-semibold text-white ' style={{ "backgroundColor": "	#8A2BE2", "fontSize": "18px" }}>{item.title}</CardHeader>
                            <CardBody >{item.des}</CardBody>
                        </Card>
                    </Col>
                ))}
                <div className='' >

                    <h2 className='text-center mt-4'>How It Works</h2>
                    <img src={bodySec} className='w-100' alt='Body Sec' />
                </div>
            </Row>
        </Container>
    );
};

export default WhyValidX;
