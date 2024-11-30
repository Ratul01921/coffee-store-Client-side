import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, taste, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //   title: "Deleted!",
                //   text: "Your file has been deleted.",
                //   icon: "success"
                // });
                console.log('delete confirmed')
                fetch(`http://localhost:5555/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }

                    })
            }
        });
    }
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
                            onClick={() => handleDelete(_id)}
                            className="btn join-item bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;