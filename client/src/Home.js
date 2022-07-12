import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { Fragment, useState } from "react";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import GroupedItems from "./components/GroupedItems";
import BarLoader from "./components/BarLoader";

const TXNS_SEARCH_QUERY = gql`
  query Transactions($filter: String) {
    transactions(filter: $filter) {
      id
      status
      date
      time
      asset
      type
      address
      platform
    }
  }
`;

const Home = () => {
  const [searchedText, setSearchedText] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { data, loading, error, refetch } = useQuery(TXNS_SEARCH_QUERY);

  const RefetchList = () => {
    setSearchedText(searchInput);
    refetch({
      filter: searchInput,
    });
  };

  return (
    <div className="home_container">
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        refetchList={RefetchList}
      />
      <FilterBar refetch={refetch} />

      {loading ? (
        <div className="loading_container">
          <p>Loading Transactions</p>
          <BarLoader />
        </div>
      ) : error ? (
        <div className="loading_container">
          <p>An error occured while loading transactions</p>
          <i className="ph-smiley-nervous error_icon" />
        </div>
      ) : (
        <div className="grouped_items_cover">
          {data?.transactions?.length === 0 ? (
            <div className="empty_list">
              <p>"{searchedText}" did not match any result!</p>
            </div>
          ) : (
            data?.transactions.map((group, i) => {
              return (
                <Fragment key={i}>
                  <GroupedItems data={group} />
                </Fragment>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
