// import React from 'react'

import Row from "../Row/Row";
import Data from "../../../util/fetchdata";

function RowList() {
  return <>
  {Data?.map((data,i)=>{

    return(

      <Row
      fetchUrl={data.fetchUrl}
      title={data.title}
      isLarge={data.isLarge}
      key={i}
      />
    )
  })}
  
  
  </>;
}

export default RowList;
