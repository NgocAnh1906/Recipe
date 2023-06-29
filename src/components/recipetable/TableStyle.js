import styled from 'styled-components';
export const Table=styled.table `
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
 ` ;
  
  /* Thiết lập màu nền, font chữ và căn chỉnh văn bản trong header của bảng */
export const TH=styled.th `
  background-color: #f2f2f2;
  color: #000;
  text-align: left;
  font-weight: bold;
  padding: 8px;
 ` ;
 /* Thiết lập màu nền và font chữ trong các cell của bảng */
export const TD=styled.td `
 background-color: #fff;
    color: #000;
    padding: 8px;
` ;
  /* Thiết lập màu nền và font chữ khi di chuột qua các cell của bảng */
export const Image=styled.image`
    width: 100px;
    height: 200px;
    display:block;
    object-fit: cover;

`;
export const TR = styled.tr`
  tr:hover td {
    background-color: #f2f2f2;
  }
`;