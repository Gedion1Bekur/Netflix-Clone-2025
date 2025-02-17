// import React from 'react'

import Row from "../Row/Row";
import Data from "../../../util/fetchdata";
import styles from './rowList.module.css' 
function RowList() {
  return (
    <>
      {Data?.map((data, i) => {
        return (
          <div className={styles.row_cotainer} key={i}>
            <Row
              fetchUrl={data.fetchUrl}
              title={data.title}
              isLarge={data.isLarge}
            />
          </div>
        );
      })}
    </>
  );
}

export default RowList;
