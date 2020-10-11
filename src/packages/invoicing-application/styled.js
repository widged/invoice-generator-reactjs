import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: Nunito, sans-serif;
  font-size: 14px;
  color: #555;
  background: #f2f3f5;
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  
}

* {
  box-sizing: border-box;
}
`;

export const AppBox = styled.div`
  .App {
    text-align: center;
  }

  .invoice-wrapper {
    //position: relative;
    background: #fff;

    border: 1px solid rgb(169, 169, 169);
    padding: 20px;

    box-shadow: 1px 1px 1px white, 2px 2px 1px white, 3px 3px 1px gray, 4px 4px 1px white,
      5px 5px 1px white, 6px 6px 1px gray, 7px 7px 1px white;

    margin: 30px auto 50px auto;
    width: 800px;
  }

  .invoice {
    text-align: right;
  }

  .width {
    margin-left: 0px;
  }

  .w {
    width: 200px;
  }
`;

export const PageBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalsBox = styled.div``;
