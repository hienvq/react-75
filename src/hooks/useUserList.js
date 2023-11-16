import React from "react";
import { getUsers } from "../apis/user-api";

export default function useUserList() {
  //custom hook
  const [data, setData] = React.useState([]);
  const getData = async () => {
    try {
      const response = await getUsers({});
      setData(response.data);
    } catch (error) {}
  };
  React.useEffect(() => {
    getData();
  }, []);
  return [data, getData];
}
