import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

function Search() {
    const [search, setSearch] = useState([]);
    let param = useParams();

    const getSearch = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9443e3ed5b714674bf7aa333a0f1c11c&query=${name}`)
        const recipe = await data.json();
        setSearch(recipe.results);
    };
    useEffect(() => {
        getSearch(param.search);
    }, [param.search]);


    return <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
    >
        {search.map((item) => {
            return (
                <Link to={'/recipes/' + item.id}>
                    <Card key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Card>
                </Link>
            )
        })}
    </Grid>
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img{
        width:100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Search