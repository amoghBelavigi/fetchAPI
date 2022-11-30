import React, { useEffect, useState } from "react";

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());
        console.log(users);
    }

    useEffect( () => {
        getUsers();
    }, []);

    return (
    <>
        <h2>List of GitHub Users</h2>
        <div className="container-fluid mt-5">
            <div className="row text-center">
            {
                users.map( (curElem) => {
                    return(
                    <div className="col-10 col-md-4 mt-5">
                    <div class="card p-2">
                        <div class="d-flex align-items-center">
                            <div class="image"><img src={curElem.avatar_url} class ="rounded" width="155"/></div>
                            <div class="ml-3 w-100">
                                <h4 class="mb-0 mt-0 textLeft">{curElem.login}</h4><span className="textLeft">Web Developer</span>
                                <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats"></div>
                                <div class="d-flex flex-column"> <span class="articles">Articles</span> <span class="number1">38</span></div>
                                <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2">980</span></div>
                                <div class="d-flex flex-column"> <span class="rating">Rating</span> <span class="number3">8.9</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })
            }


                
            </div>
        </div>
    </>
  );
};

export default UseEffectAPI;
