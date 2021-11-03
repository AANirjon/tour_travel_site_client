import React from "react";
import { Accordion } from "react-bootstrap";

const TourTips = () => {
    return (
        <>
            <div className="img-container">
                <img
                    className="w-100"
                    src="https://i.ibb.co/rQdVGhb/Bangladesh-15.jpg"
                    alt=""
                />
                <div className="content">
                    <h1 className="text-warning">
                        BANGLADESH TRAVEL: 10 THINGS TO KNOW BEFORE YOU GO
                    </h1>
                </div>
            </div>
            <div className="container-fluid p-2">
                <p className="fs-5">
                    Travel to Bangladesh is one of the last opportunities in
                    South East Asia to experience travel with a true sense of
                    adventure: Heading off the beaten track and into a country
                    that does not have an established tourism infrastructure,
                    especially not for foreign tourists. Bangladesh travel is
                    still, in many ways, a journey into the lesser known.
                </p>
                <div className="row align-items-start">
                    <div className="col-md-3 row g-2 px-5">
                        <h3>Bangladesh</h3>
                        <img
                            src="https://soultravelblog.com/wp-content/uploads/2018/01/Bangladesh-morning.jpg"
                            alt=""
                            className="img-fluid rounded"
                        />
                        <img
                            src="https://soultravelblog.com/wp-content/uploads/2018/01/Bangladesh-Gol-Kanon-1024x669.jpg"
                            alt=""
                            className="img-fluid rounded"
                        />
                        <img
                            src="https://soultravelblog.com/wp-content/uploads/2018/01/Bangaldesh-Waterways1.jpeg"
                            alt=""
                            className="img-fluid rounded"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cox%27s_Bazar_boats.jpg/400px-Cox%27s_Bazar_boats.jpg"
                            alt=""
                            className="img-fluid rounded"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/220px-Sajek_Valley_2.jpg"
                            alt=""
                            className="img-fluid rounded"
                        />
                    </div>

                    <div className="col-md-6" id="faq">
                        <h2>FAQ</h2>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    1. First things first
                                </Accordion.Header>
                                <Accordion.Body>
                                    do check the current political situation and
                                    travel advisories of your country for
                                    Bangladesh before booking your trip. The
                                    country has experienced political turmoil in
                                    the past, and the situation can change
                                    quickly.{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    2. Visa on Arrival.
                                </Accordion.Header>
                                <Accordion.Body>
                                    Citizens of many countries can get a Visa on
                                    Arrival for Bangladesh if flying in to Dhaka
                                    airport, if you are travelling for tourism
                                    (tourist visa) and plan to stay less than 30
                                    days.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    3. Overland from India.{" "}
                                </Accordion.Header>
                                <Accordion.Body>
                                    Another option from India would be to get
                                    your Bangladesh visa in Kolkata (Calcutta).
                                    In addition to the twice weekly Maitree
                                    Express, there’s also a train that runs from
                                    Kolkata to Khulna.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    4. A little history.
                                </Accordion.Header>
                                <Accordion.Body>
                                    Until 1947, Bangladesh used to be part of
                                    India and was known as “East Bengal”. In
                                    1947 when India gained independence from
                                    British colonial rule, the sub-continent was
                                    also partitioned into India and Pakistan,
                                    leading to the largest migration crisis in
                                    history.{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    5. Bangladesh’s population
                                </Accordion.Header>
                                <Accordion.Body>
                                    14 million of which are packed into the
                                    capital, Dhaka. But that number is growing
                                    every day – as more and more of the rural
                                    population come to the capital city in
                                    search of work that is more lucrative and
                                    secure than agriculture.{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    6. Religious diversity
                                </Accordion.Header>
                                <Accordion.Body>
                                    Although Bangladesh has a Muslim majority,
                                    there is a sizeable Hindu population
                                    throughout the country. There are also
                                    tribal communities in the Chittagong
                                    hilltracts, and Bangladesh has a growing
                                    number of immigrants from Myanmar (both
                                    before and especially since the current
                                    Rohingya crisis).{" "}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>
                                    7. A friendly hello
                                </Accordion.Header>
                                <Accordion.Body>
                                    It can be difficult to distinguish who is
                                    what religion to the un-trained eye – not
                                    all Muslim women cover their hair, some
                                    Hindu women do cover their hair… Why does it
                                    matter?
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>
                                    8. Offers of hospitality
                                </Accordion.Header>
                                <Accordion.Body>
                                    Bangladesh (for me at least) has to be its
                                    people. Expect to get lots of (usually
                                    friendly) attention, enquiries as to your
                                    family (ladies – if travelling with a man or
                                    solo – it’s best to say you are married) and
                                    offers of tea, dinner, lunch.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>
                                    9. Language.
                                </Accordion.Header>
                                <Accordion.Body>
                                    Bangla (or Bengali) is the language of
                                    Bangladesh and is largely the same as the
                                    Bengali spoken in India. The major
                                    difference you will find is in levels of
                                    spoken English in Bangladesh: English is not
                                    widely spoken, especially outside of cities,
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header>
                                    10. Timings and weekends.
                                </Accordion.Header>
                                <Accordion.Body>
                                    Bangladesh is on GMT+6, making it 0.5 hours
                                    ahead of India. The weekend is either one or
                                    two days (depending on what job you do) –
                                    everyone has Friday (the muslim sabbath)
                                    off, and government, bank and (some) office
                                    workers also have Saturday off.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-md-3 bg-dark text-white rounded col-12">
                        <h4>Tourism in Bangladesh</h4>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sajek_Valley_2.jpg/220px-Sajek_Valley_2.jpg"
                            alt=""
                            className="img-fluid rounded"
                        />
                        <p className="text-start">
                            <small>
                                Bangladesh's tourist attractions include
                                historical monuments, resorts, beaches, picnic
                                spots, forests and tribal people, wildlife of
                                various species. Activities for tourists include
                                angling, water skiing, river cruising, hiking,
                                rowing, yachting, and sea bathing.
                            </small>
                            <br />
                            <small>
                                In the northern part, comprising the Rajshahi
                                division, there are archaeological sites,
                                including the temple city Puthia in Rajshahi;
                                the largest and most ancient archaeological
                                site, Mahasthangarh in Bogra; the single largest
                                Buddhist monastery, Paharpur in Naogaon;
                            </small>
                            <br />

                            <small>
                                In the south-eastern part, which is the
                                Chittagong Division, there are natural and hilly
                                areas like Chittagong Hill Tracts, along with
                                sandy sea beaches. The most notable beach, in
                                Cox's Bazar, is a contender for the title of
                                longest unbroken sandy sea beach in the world.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TourTips;
