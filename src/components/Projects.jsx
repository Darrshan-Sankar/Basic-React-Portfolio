import React, { useState, useEffect } from 'react';
import Pcard from './PCard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Projects.css';

const initialData = [
    {
        imageSrc: "assets/img/projects/FBRIDS.jpg",
        title: "Face Recognition based Intrusion Detection",
        category: "Know more",
        link: "projects/FRBIDS.html",
    },
    {
        imageSrc: "assets/img/projects/Gait.jpg",
        title: "Gait Analysis",
        category: "Know more",
        link: "projects/Gait.html",
    },
    {
        imageSrc: "assets/img/projects/Others.jpg",
        title: "Others",
        category: "Know more",
        link: "projects/Others.html",
    },
];

const Projects = () => {
    // Initialize the cardData state variable with data from localStorage or the initial data
    const [cardData, setCardData] = useState(() => {
        const storedData = localStorage.getItem('cardData');
        return storedData ? JSON.parse(storedData) : initialData;
    });

    const [newCardInfo, setNewCardInfo] = useState({
        imageSrc: "",
        title: "",
        category: "",
        link: "",
    });

    // Update localStorage whenever cardData changes
    useEffect(() => {
        localStorage.setItem('cardData', JSON.stringify(cardData));
    }, [cardData]);

    const handleAddCard = () => {
        if (newCardInfo.imageSrc && newCardInfo.title && newCardInfo.category && newCardInfo.link) {
            setCardData([...cardData, newCardInfo]);
            setNewCardInfo({
                imageSrc: "",
                title: "",
                category: "",
                link: "",
            });
        } else {
            alert("Please fill in all fields.");
        }
    };

    const handleRemoveCard = (index) => {
        const updatedCardData = [...cardData];
        updatedCardData.splice(index, 1);
        setCardData(updatedCardData);
    };

    return (
        <div id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-title">
                            <h2>Projects & Achievements</h2>
                            <p>My Projects & Achievements</p>
                        </div>
                    </div>
                </div>
                {cardData.length > 0 ? (
                    <div className="Projects">
                        <div className="row">
                            {cardData.map((card, index) => (
                                <Pcard
                                    key={index}
                                    imageSrc={card.imageSrc}
                                    title={card.title}
                                    category={card.category}
                                    link={card.link}
                                    onRemove={() => handleRemoveCard(index)}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No Data to be shown</p>
                )}
                <div className="row mt-4">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Image URL"
                            value={newCardInfo.imageSrc}
                            onChange={(e) => setNewCardInfo({ ...newCardInfo, imageSrc: e.target.value })}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={newCardInfo.title}
                            onChange={(e) => setNewCardInfo({ ...newCardInfo, title: e.target.value })}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Category"
                            value={newCardInfo.category}
                            onChange={(e) => setNewCardInfo({ ...newCardInfo, category: e.target.value })}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Link"
                            value={newCardInfo.link}
                            onChange={(e) => setNewCardInfo({ ...newCardInfo, link: e.target.value })}
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={handleAddCard}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;