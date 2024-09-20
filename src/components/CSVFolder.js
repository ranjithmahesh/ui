import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

function CSVFolder() {
  const data = [
    {
      "Web Url": "http://www.sangeetha.studio",
      "Line of Business ": "/Retail and Shopping/Lifestyle/Apparels",
      "Mcc Code Scrapped": 5691,
    },
    {
      "Web Url": "https://fantasydangal.com/",
      "Line of Business ":
        "Betting, including Lottery Tickets, Casino Gaming Chips, Off-Track Betting, Wagers at Race Tracks and games of chance to win prizes of monetary value",
      "Mcc Code Scrapped": 7995,
    },
    {
      "Web Url": "http://www.haldenluxury.com",
      "Line of Business ": "Mens and Boys Clothing and Accessories Stores",
      "Mcc Code Scrapped": 5611,
    },
    {
      "Web Url": "https://www.rimli.in/",
      "Line of Business ":
        "Jewelry Stores, Watches, Clocks, and Silverware Stores",
      "Mcc Code Scrapped": 5944,
    },
    {
      "Web Url": "https://wiisuites.com",
      "Line of Business ": "Travel Agencies and Tour Operators",
      "Mcc Code Scrapped": 4722,
    },
    {
      "Web Url": "https://www.blenditrawapothecary.in/",
      "Line of Business ": "Cosmetic Stores",
      "Mcc Code Scrapped": 5977,
    },
    {
      "Web Url": "https://thebyke.com",
      "Line of Business ": "/Hospitality/Hotels & Resorts/Hotels & Resorts",
      "Mcc Code Scrapped": 7011,
    },
    {
      "Web Url": "https://mckstrustfund.org",
      "Line of Business ": "Charitable Social Service Organizations",
      "Mcc Code Scrapped": 8398,
    },
    {
      "Web Url": "https://haribadairyfarm.com/",
      "Line of Business ": "/Food & Beverages/Sweets, Cakes & Bakery/Sweets",
      "Mcc Code Scrapped": 5441,
    },
    {
      "Web Url": "http://maklifedairy.in",
      "Line of Business ": "Dairy Products Stores",
      "Mcc Code Scrapped": 5451,
    },
    {
      "Web Url": "https://diagnostics.medgenome.com/",
      "Line of Business ": "Medical and Dental Laboratories",
      "Mcc Code Scrapped": 8071,
    },
    {
      "Web Url": "https://annamsshop.com/",
      "Line of Business ": "Grocery Stores and Supermarkets",
      "Mcc Code Scrapped": 5411,
    },
    {
      "Web Url": "https://klay.co.in/",
      "Line of Business ": "Child Care Services",
      "Mcc Code Scrapped": 8351,
    },
    {
      "Web Url": "http://www.theblackboxco.com",
      "Line of Business ": "Luggage and Leather Goods Stores",
      "Mcc Code Scrapped": 5948,
    },
    {
      "Web Url": "http://www.eternalganges.com/",
      "Line of Business ": "Book Stores",
      "Mcc Code Scrapped": 5942,
    },
    {
      "Web Url": "http://www.ruhincollectionz.com",
      "Line of Business ": "Family Clothing Stores",
      "Mcc Code Scrapped": 5651,
    },
    {
      "Web Url": "https://artofliving.store/",
      "Line of Business ": "Religious Goods Stores",
      "Mcc Code Scrapped": 5973,
    },
    {
      "Web Url": "http://www.amaraa.co",
      "Line of Business ": "Fast Food Restaurants",
      "Mcc Code Scrapped": 5814,
    },
    {
      "Web Url": "https://www.inditab.com",
      "Line of Business ": "Utilities, Electric, Gas, Water, and Sanitary",
      "Mcc Code Scrapped": 4900,
    },
    {
      "Web Url": "https://www.Eurekaforbes.com",
      "Line of Business ": "Household Appliance Stores",
      "Mcc Code Scrapped": 5722,
    },
    {
      "Web Url": "https://www.campusshoes.com/",
      "Line of Business ": "Shoe Stores",
      "Mcc Code Scrapped": 5661,
    },
    {
      "Web Url": "https://omgs.in",
      "Line of Business ": "Gift, Card, Novelty and Souvenir Shops",
      "Mcc Code Scrapped": 5947,
    },
    {
      "Web Url": "https://quackquack.in",
      "Line of Business ": "Dating Services",
      "Mcc Code Scrapped": 7273,
    },
    {
      "Web Url": "https://nishhair.com/",
      "Line of Business ": "Wig and Toupee Stores",
      "Mcc Code Scrapped": 5698,
    },
    {
      "Web Url": "https://ITservicess.com",
      "Line of Business ": "Electronics Stores",
      "Mcc Code Scrapped": 5732,
    },
  ];

  const jsonData = `
    "website_reachability_check": {
      "data": {
        "page_accessibilty": true
      },
      "dynamic_website": true,
      "method": "mv",
      "redirect_url": " ",
      "status": "200",
      "website_redirection": false,
      "website_response_code": 200,
      "website_url": "https://duraup.in",
      "website_working_status": true
    }
  },
 "websiteCategorizationV1": {
        "categories": [
          {
            "Category type": "",
            "IAB22": "Ayurvedic Medicine",
            "confidence": 1,
            "input_mcc_match": false,
            "is_refurbished": false,
            "mcc_code": 8099,
            "name": "Healthy Living/Wellness/Ayurvedic Medicine",
            "risk_classification": "Approved - High",
            "risk_level": "High",
            "status": "Approved - High"
          }
        ],      "domain": {
        "Possible_Categories": {
                    "Healthy Living/Nutrition/Nutrition": {
            "confidence": 0.6692850924284856,
            "mcc_code": 5499
          },
          "Healthy Living/Wellness/Ayurvedic Medicine": {
            "confidence": 100,
            "mcc_code": 8099
          },
          
        },
      "audit": {
      "createdDate": "Thu, 16 May 2024 05:49:12 GMT",
      "domainName": "duraup.in",
      "estimatedDomainAge": 84,
      "expiresDate": "Fri, 16 May 2025 05:49:12 GMT",
     
      "registrarName": "GoDaddy.com, LLC",
          "createdDate": "Thu, 16 May 2024 05:49:12 GMT",
        "expiresDate": "Fri, 16 May 2025 05:49:12 GMT",
       
        "registrarName": "GoDaddy.com, LLC",
        "estimatedDomainAge": 84,
    }
  },
  "Transaction_Laundering_name_matched_uls": [],
        "is_blacklisted": false,
        "legal_name_match": false,
        "paidup_capital": "₹34,200,000",
  {
            "dnsType": "CNAME",
            "name": "www.duraup.in",
            "dnsType": "A",
            "location": {
              "ip": "89.117.27.127",
              "ip_location_data": {
                "city_name": "Mumbai",
                "country_code": "IN",
                "country_name": "India",
                "isp": "SC Lithuanian Radio and TV Center",
                "region": "Maharashtra"
              },
            {
              "blacklist_email_check": {
                "status": "not blacklisted"
              
        ],
                  {
              "blacklist_phone_check": {
                "status": "not blacklisted"
              }
                
            {
              "blacklist_upi_check": {
                "status": "Not Blacklisted",
  
  "sslCheckInfo": {
    "ssl_check": {
      "message": "SSL Certificate is  Valid.",
      "status": 200
  
      "dns_valid": true,
      "domain": "duraup.in",
      "domain_age": {
        "human": "3 months ago",
      },
      "domain_rank": 0,
      "domain_trust": "neutral",
      "language_code": "EN",
      "malware": false,
      "mx_records": [
        "mx1.hostinger.com",
        "mx2.hostinger.com"
      ],
      "ns_records": [
        "ns1.dns-parking.com",
        "ns2.dns-parking.com"
      ],
      "page_size": 143662,
      "page_title": "Duraup Capsules | Supreme Quality Ayurveda Wellness Medicines | Ayurveda Wellness Capsules | Ayurvedic Capsules Online, Ayurvedic Medicine for Fatigue and Weakness | Ayurvedic Safe Capsules for Boosting Stamina, Ayurvedic Medicine for Sexual Wellness, Ayurvedic Immunity Booster, Ayurvedic Medicine for Energy | sexual product for stamina | medicine for long lasting in bed | | sexual health products &#8211; Ayurvedic Wellness Capsules",
      "parking": false,
      "phishing": false,
      "redirected": true,
      "server": "LiteSpeed",
      "spamming": false,
      "suspicious": false,
      "technologies": [
        "Google Analytics",
        "Google Fonts",
        "Facebook Pixel",
        "WordPress"
      "unsafe": false
  },
         
      "policy_complaince_checks": {
        "contact": {
          "capture_status": "true",
          "contact_check_details": {
            "address_check": {},
            "email_check": {
              "email_match_config": [],
              "emailid_already_present": "false"
            },
            "legal_name_check": {},
            "phone_check": {
              "contact_already_present": "false",
              "phone_match_config": []
            }
          },
          "contact_url": [
            "https://duraup.in/contact/"
  
            "contacts_form": {
              "status": "True"
            },
            "contains_valid_email": "true",
            "contains_valid_phone": "true",
            "email_validation": [
              {
                
            "emails": [
              "Info@duraup.in",
              "info@duraup.in"
            ],
            "phone_number": [
              "+918360071416"
            ],
          "policy_screenshot": [
            "
          "status": "accessible"
        },
      "product_pricing_checks": {
        "currencies": [
          "₹"
        ],
        "currencies_found": true,
        "max_price": 395,
        "min_price": 395,
        "price_average": {
          "average_product_price": 395,
          "product_page_links": [
            "https://duraup.in/",
          ]
        },
        "price_listing": true,
        "prices": [
          395
        ],
        "un_reasonable_price": false
      },
      "social_media_link_check": {
        "social_media_links": [
          "https://www.facebook.com/duraup.in",
          "https://twitter.com/duraup_in",
          "https://www.instagram.com/duraup.in/"
        ],
        "social_media_urls_insights": {},
        "status": "true"
      },

`;

  return (
    <Container className="my-4">
      <Row className="" style={{ height: "100%" }}>
        <Col md={6}>
          <h5
            className="mx-auto  text-white rounded"
            style={{
              backgroundColor: "#6f6cff",
              maxWidth: "max-content",
              padding: "5px 50px",
            }}
          >
            Through the API
          </h5>
          <div
            className="rounded-3 pt-1"
            style={{
              flex: "1",
              overflowY: "scroll",
              maxHeight: "500px",
              fontSize: "12px",
              backgroundColor: "#6f6cff",
              color: "white",
              scrollbarWidth: "none" /* For Firefox */,
              msOverflowStyle: "none" /* For Internet Explorer and Edge */,
            }}
          >
            <div className="m-lg-">
              <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                {jsonData}
              </pre>
            </div>
          </div>{" "}
        </Col>
        <Col md={6} className="rounded-3 mt-3 mt-sm-0">
          <h5
            className="mx-auto  text-white rounded"
            style={{
              backgroundColor: "#6f6cff",
              maxWidth: "max-content",
              padding: "5px 50px",
            }}
          >
            Importing a .CSV file
          </h5>

          <div
            className="rounded-3 pt-1"
            style={{
              flex: "1",
              overflowY: "scroll", // Allow scrolling
              maxHeight: "500px",
              fontSize: "12px",
              backgroundColor: "#6f6cff",
              color: "white",
              scrollbarWidth: "none" /* For Firefox */,
              msOverflowStyle: "none" /* For Internet Explorer and Edge */,
            }}
          >
            <Table className="bg-transparent table ">
              <thead>
                <tr style={{ backgroundColor: "#6f6cff", color: "white" }}>
                  <th style={{ backgroundColor: "#6f6cff", color: "white" }}>
                    Web Url
                  </th>
                  <th style={{ backgroundColor: "#6f6cff", color: "white" }}>
                    Category
                  </th>
                  <th style={{ backgroundColor: "#6f6cff", color: "white" }}>
                    MccCode
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td style={{ backgroundColor: "#6f6cff", color: "white" }}>
                      {item["Web Url"]}
                    </td>
                    <td style={{ backgroundColor: "#6f6cff", color: "white" }}>
                      {item["Line of Business "]}
                    </td>
                    <td style={{ backgroundColor: "#6f6cff", color: "white" }}>
                      {item["Mcc Code Scrapped"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CSVFolder;
