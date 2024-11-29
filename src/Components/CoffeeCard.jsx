import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee}) => {
    const { _id, name,  quantity, taste, photo } = coffee;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p>Name: {name}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <button className="btn join-item">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button
                        // onClick={() => handleDelete(_id)}
                        className="btn join-item bg-red-500">X</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CoffeeCard;