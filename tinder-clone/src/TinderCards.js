
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./tindercards.css";
import axios from './axios';

function TinderCards(){
    const[people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req =await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []);
    console.log(people);
    /*   
    {
        name: "Elon Musk",
        url:"https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg",
    },
    {
        name: "jeff bezos",
        url:"https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg",
    },
    ]);
    */
    const swiped = (direction, nameToDelete) => {
        console.log("removing: "+ nameToDelete);
        //setLastDirection(direction);
    };

    const outofframe = (name) =>
    {
        console.log(name + " left the screen!");

    };
    return( 
        <div className="tindercards">
            <div className="tindercards__cardContainer">
                {people.map((Person) => (
                    <TinderCard
                        className="swipe"
                        key={Person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>swiped(dir, Person.name)}
                        onCardLeftScreen={()=>outofframe(Person.name)}

                        >
                            <div
                                style={{ backgroundImage: `url(${Person.imgUrl})`}}
                                className="card"
                            >
                                <h3>{Person.name}</h3>
                            </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;