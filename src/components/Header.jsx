import React from "react";
import { TopNavStyle } from "../styles/HeaderStyle";
import GlobalStyle from "../GlobalStyles";

function Header({ sortOrder, onChangeSortOrder }) {
  return (
    <div>
      <GlobalStyle />
      <TopNavStyle>
        <div> React : Todo List </div>
        <div>
          <select value={sortOrder} onChange={onChangeSortOrder}>
            <option value="asc" selected>
              오름차순
            </option>
            <option value="desc">내림차순</option>
          </select>
        </div>
      </TopNavStyle>
    </div>
  );
}

export default Header;
