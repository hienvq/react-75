import React from "react";
import { getUsers } from "../apis/user-api";

export default function useUserList() {
  //custom hook
  const [data, setData] = React.useState([]);
  const [totalData, setTotalData] = React.useState(0);
  const getData = async (page = 1) => {
    try {
      const response = await getUsers({
        params: {
          _page: page,
          _limit: 5,
        },
      });
      setData(response.data);
      setTotalData(Number(response.headers["x-total-count"]));
    } catch (error) {}
  };
  React.useEffect(() => {
    getData(1);
  }, []);
  return [data, getData, totalData];
}
