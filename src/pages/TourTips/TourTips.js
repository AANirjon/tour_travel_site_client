import React from "react";
import { Accordion } from "react-bootstrap";

const TourTips = () => {
    return (
        <>
            <div className="img-container">
                <img
                    className="w-50"
                    src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs="
                    alt=""
                />
                <div className="content">
                    <h1 className="text-warning">
                        BANGLADESH TRAVEL: 05 THINGS YOU HAVE TO KNOW BEFORE GO
                    </h1>
                </div>
            </div>
            <div className="container-fluid p-2">
                <p className="fs-5">
                This is a life skill that a lot of people struggle with. Learning to focus and really listen to what people tell us is so important to success in life. Achieving success is about building relationships and you build strong relationships understanding people. People who travel a lot know you really need to listen to have good understanding.
                </p>
                <div className="row align-items-start">
                    <div className="col-md-3 row g-2 px-5 mt-2">
                        <h3>Bangladesh</h3>
                        <img
                            src="https://thumbs.dreamstime.com/b/time-to-travel-wooden-sign-beach-background-49509295.jpg"
                            alt=""
                            className="img-fluid rounded mt-2"
                        />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGURJuADaDrnANfoRVsav4Jb0zP0TR9M5LA&usqp=CAU"
                            alt=""
                            className="img-fluid rounded mt-2"
                        />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrek9eqC3mai2XxnR3f7JTN8UQNW-NVjLBVQ&usqp=CAU"
                            alt=""
                            className="img-fluid rounded mt-2"
                        />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ptHqLbKLzQtaSbH9YntgmUFoPMGSGHsHAQ&usqp=CAU"
                            alt=""
                            className="img-fluid rounded mt-2"
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
                        <h4>Tourism Places in Bangladesh</h4>
                        <img
                            src="data:image/jpeg;base64,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"
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
