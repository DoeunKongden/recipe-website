import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css/skyblue';
import {motion} from 'framer-motion'


function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular(); //running get popular as soon as componet is rendered
    }, []); //add array to pass in information 

    const getPopular = async () => {
        //storing our fetch in local storage
        const check = localStorage.getItem("popular"); //getting local storage item

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=9443e3ed5b714674bf7aa333a0f1c11c&number=9`); //to add api key ?apiKey=${enviroment variable}
            const data = await api.json(); //giving us a json format from the api 

            localStorage.setItem("popular", JSON.stringify(data.recipes)); //in local storage we can only save string whihc is why we use stringify
            setPopular(data.recipes);
            console.log(data.recipes)
        }

    }


    return (
        <Wrapper>
            <h3>Popular Recipes</h3>
            <Splide options={{
                perPage: 3,
                arrows: true,
                speed: 2,
                pagination: false,
                drag: 'free',
                gap: '3rem',
            }}>
                {popular.map((recipes) => {
                    return (
                        <SplideSlide key={recipes.id}>
                            <Card>
                                <Link to={'/recipes/'+recipes.id}>
                                    <p>{recipes.title}</p>
                                    <img src={recipes.image} alt={recipes.title} />
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    );

}

const Wrapper = styled.div`
    margin: 4rem 2rem;
`;

const Card = styled.div`
    min-height: 25rem;
    max-width: 600px;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    } 
    
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform:  translate(-50%,0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular