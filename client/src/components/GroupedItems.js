import React from "react";
import { shortenAddr } from "../utils";

const GroupedItems = ({ data }) => {
  return (
    <div className="group_container">
      <div className="group_header">{data[0]?.date}</div>

      <div className="group_list">
        {data?.map((item, index) => {
          return (
            <div className="list_item" key={index}>
              <div className="info_row">
                <div className="info_item">{item?.time}</div>
                <div className="info_item asset">{item?.asset}</div>
              </div>

              <div className="main_content">
                <span>{item?.id}: &nbsp;</span> {shortenAddr(item?.address)}
              </div>

              <div className="info_row">
                <div className="info_item">
                  <p>{item?.type}&nbsp;</p>
                  <p className="small">from</p>
                  <p>&nbsp;{item?.platform}</p>
                </div>
                <div className="info_item status">{item.status}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupedItems;
