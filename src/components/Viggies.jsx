import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Link} from  'react-router-dom'

function Viggies() {
  const [viggies, setViggies] = useState([]);


  useEffect(() => {
    getViggies();
  }, []);

  const getViggies = async () => {
    const check = localStorage.getItem('viggies');
    if (check) {
      setViggies(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=9443e3ed5b714674bf7aa333a0f1c11c&number=9&tags=vegetarian`);
      const data = await api.json();

      localStorage.setItem('viggies', JSON.stringify(data.recipes));

      setViggies(data.recipes);
      console.log(data.recipes)
    }
  }

  return (
    <Wrapper>
      <h3>Viggies Recipes</h3>

      <Splide options={{
        perPage: 3,
        arrows: true,
        speed: 2,
        pagination: false,
        drag: 'free',
        gap: '3rem'
      }}>
        {viggies.map((recipes) => {
          return (
            <SplideSlide key={recipes.id}>
              <Link to={'/recipes/'+recipes.id}>
                <Card>
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt={recipes.title} />
                  <Gradient />
                </Card>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  )
}

export default Viggies

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