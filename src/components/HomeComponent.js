import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    } else {
        return (
            <Card className="p-2">
                <CardImg src={item.image} alt={item.name} />
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </Card>
        )
    }
}

function Home(props) {
    return (
        <div className="container">
            <br />
            <h4>Welcome to the Home Page</h4>
            <hr />
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.dish}
                        isLoading={props.dishesLoading} 
                        errMess={props.dishesErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;