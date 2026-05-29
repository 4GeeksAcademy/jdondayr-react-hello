import React from "react";

// Components
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

const Body = () => {
    return (
        <div className="mt-5 d-flex flex-column align-items-center gap-5">
            <Jumbotron />
            <div className="cards row">
                <Card 
                imgLink="src/img/renderizado-web.jpg"
                imgAlt="web render"
                cardTitle="Better web rendering"
                cardText="React.js makes your web render in less time, becouse it makes that your web only refreshes the components it need to refresh"
                cardButton="Learn about web rendering"/>
                <Card 
                imgLink="src/img/react_jsx-1.webp"
                imgAlt="jsx react"
                cardTitle="Type in JSX"
                cardText="React implements JSX, that is JS + XML. You can type your code mixing HTML and JavaScript!"
                cardButton="Learn about JSX"/>
                <Card 
                imgLink="src/img/DOM.avif"
                imgAlt="DOM JS"
                cardTitle="Forget about the DOM..."
                cardText="React drives the DOM for you... your work is to say how do you need the page depending on the context"
                cardButton="Learn more about this topic"/>
                <Card 
                imgLink="src/img/reciclar.webp"
                imgAlt="recycle"
                cardTitle="Recycle your components"
                cardText="Everything is about components in React. You can make your own components and recycle them, creating your own properties (these cards are an example of it)."
                cardButton="Learn more about components"/>
            </div>
        </div>
    )
}

export default Body;