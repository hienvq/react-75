import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notiSelector } from "../../store/selectors/notiSelector";
import { closeNoti } from "../../store/slices/notiSlice";

export default function MyNotification() {
  const [messageApi, contextHolder] = message.useMessage();
  const { isOpen, type, message: content } = useSelector(notiSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    isOpen &&
      messageApi.open({
        type: type,
        content: content,
        duration: 3,
        onClose: () => {
          dispatch(closeNoti());
        },
      });
  }, [isOpen]);
  return <>{contextHolder}</>;
}
