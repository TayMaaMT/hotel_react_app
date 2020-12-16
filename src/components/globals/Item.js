import React from "react";
import styled from "styled-components";
import { setRem, setColor} from "../../style/styles";
const Item = ({ icon,title,data=""}) => {
return (
    <TableConatin>
         <table>
           <tbody></tbody>
           <thead>
           <tr>
              <td><img src={icon} alt="icon" />{title}</td>
              <td className="data">{data}</td>
            </tr>
           </thead>
        </table>
    </TableConatin>
);
};

const TableConatin = styled.div`
margin:0 auto;

table {
    border-collapse: collapse;
    width: ${setRem(400)};
    
}
th, td {
    padding: ${setRem(10)};
    text-align: left;
    border-bottom: 1px solid ${setColor.primaryColor}
}; 
  }
  td img{
      width:30px;
      height:30px;
      float:left;
      margin:0 20px 0 0;
  }
  .data{
    text-align:right;
  }

`;

export default Item;
