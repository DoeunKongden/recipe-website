import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';


function Recipes() {
    let params = useParams();
    const [detail, setDetail] = useState({});
    const [active, setActive] = useState("Instruction")

    const fetchData = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=9443e3ed5b714674bf7aa333a0f1c11c`);
        const detailData = await data.json();
        setDetail(detailData);
        console.log(detailData);
    }

    useEffect(() => {
        fetchData();
    }, [params.name])

    return <DetailWrapper
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.6}}
    >
        <div>
            <h2>{detail.title}</h2>
            <img src={detail.image} alt={detail.title} />
        </div>

        <Info>
            <Button className={active === 'Instruction' ? 'active' : ''} onClick={() => setActive('Instruction')}>Instruction</Button>
            <Button className={active === 'Ingredient' ? 'active' : ''} onClick={() => setActive('Ingredient')}>Ingredient</Button>

            {active==="Instruction" && (
                <div>
                    <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
                    <h3 dangerouslySetInnerHTML={{ __html: detail.instructions }}></h3>
                </div>)}

            {active==="Ingredient" && (
                <ul>
                    {detail.extendedIngredients?.map((ingredient) =>
                        <li key={ingredient.id}>{ingredient.original}</li>
                    )}
                </ul>
            )}
        </Info>
    </DetailWrapper>
}


const DetailWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  h3{
    font-size: 1rem;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size:1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Button = styled.button`
  padding: 1rem, 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  

  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;

  &:hover{
    transition: 0.5s ease-in-out;
    background: #4F95DA;  
  }
`
const Info = styled.div`
  margin-left: 5rem;
`


export default Recipes