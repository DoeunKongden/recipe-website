import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

function Search() {

    const [input, Setinput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        navigate('/search/'+input);
        e.preventDefault();
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch className='SVG'/>
                <input onChange={(e) => Setinput(e.target.value)} type="text" value={input}></input>

            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    max-width: 1200px;    

    div{
        width: 100%;
        position: relative;
        justify-content: between;
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        margin-left: 10%;
        border: none;
        border-radius: 1rem;
        outline: none;
        width:80%;
    }

    .SVG{
        position: absolute;
        top:39%;
        left: 12%;
        color: white;
    }

`


export default Search