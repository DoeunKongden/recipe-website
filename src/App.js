import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter,Link } from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Delecious</Logo>
        </Nav>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoratio: none;
  font-size: 1.5rem;
  font-weight: 100;
  font-family: 'Lobster Two', cursive;

`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem
  }
`


export default App;
