import React from 'react';
function Cards({username, btntext}) {
    console.log("props => ", username);
    return (
        
        <>

            <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
                <img
                    src="https://plus.unsplash.com/premium_photo-1730475800647-cacc33d43e55?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide"> {username}</h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                            soluta amet corporis accusantium aliquid consectetur eaque!
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                    >
                        {btntext}
                    </button>
                </div>
            </div>
        </>)
}
export default Cards;