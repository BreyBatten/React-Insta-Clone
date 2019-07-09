import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 25px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid lightgrey;
`;

const LogoAndNameDiv = styled.div`
  display: flex;
  align-items: center;
  .logo {
    font-size: 50px;
  }
`;

const VerticalLineDiv = styled.div`
  height: 70px;
  margin: 0 50px;
  border-left: 2px solid black;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 60px;
  letter-spacing: 1px;
  font-family: 'Grand Hotel', cursive;
`;

const SearchBarInput = styled.input`
  text-align: center;
  margin-right: 130px;
  width: 350px;
  height: 40px;
  font-size: 18px;
  background-color: whitesmoke;
  border-radius: 8px;
`;

const HeaderIconsDiv = styled.div`
  font-size: 35px;
  display: flex;
  align-items: center;
  i {
    margin: 0 20px;
  }
`;

class SearchBar extends React.Component {
  render() {
    return (
      <Header>
        <LogoAndNameDiv>
          <i className="fa fa-instagram logo"></i>
          <VerticalLineDiv />
          <H1>Instagram</H1>
        </LogoAndNameDiv>
        <form onSubmit={this.props.handleSubmit}>
          <SearchBarInput type='text' placeholder='Search' value={this.props.searchInput} onChange={this.props.handleInput} />
        </form>
        <HeaderIconsDiv>
          <i className="fa fa-compass"></i>
          <i className="fa fa-heart"></i>
          <i className="fa fa-user"></i>
        </HeaderIconsDiv>
      </Header>
    )
  }
}

export default SearchBar;