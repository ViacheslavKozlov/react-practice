import styled from 'styled-components';

export const HeaderListContainer = styled.nav`
.headerList {
    display: flex;
    list-style: none;
    color: #ffffff;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
  }
  .headerListItem {
    text-transform: uppercase;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:hover {
      color: blueviolet;
      cursor: pointer;
    }
  }
`