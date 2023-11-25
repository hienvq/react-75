import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Modal, Space, Table, Tag } from "antd";
import { createUser, deleteUser, getUsers, updateUser } from "../../apis/user-api";
import useUserList from "../../hooks/useUserList";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import UserForm from "../../components/UserForm";
import { useDispatch } from "react-redux";
import { notiError, notiSuccess } from "../../store/slices/notiSlice";

export default function UserPage() {
  const [modal, contextHolder] = Modal.useModal();
  // [{age: a}, {age: b}]
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <b>{name}</b>,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (url) => <img src={url} width={160} alt="" />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            ghost
            onClick={() => {
              setInitValues(record);
              showModal();
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              modal.confirm({
                title: "Confirm Delete",
                icon: <ExclamationCircleOutlined />,
                content: "Are you sure?",
                okText: "OK",
                cancelText: "Cancel",
                onOk: async () => {
                  console.log("HienVQ ~  record:", record);

                  // Call api delete by id = record.id
                  await deleteUser(record.id);
                  await getData();
                },
              });
            }}
          >
            Delete
          </Button>
          {contextHolder}
        </Space>
      ),
    },
  ];
  const [data, getData, total] = useUserList();
  const [open, setOpen] = useState(false);
  const [initialValues, setInitValues] = useState({});
  const dispatch = useDispatch();
  const onSave = async (values) => {
    try {
      //call api+ reload data
      // throw new Error("ERRRR");
      if (!values.id) {
        await createUser({
          name: values.name,
          avatar: values.avatar,
        });
      } else {
        await updateUser(values.id, {
          name: values.name,
          avatar: values.avatar,
        });
      }
      await getData(1);
      dispatch(notiSuccess({ message: "SUCCESSSSS" }));
    } catch (err) {
      dispatch(notiError({ message: "ERRRORRRRRR" }));
    }
  };
  const onCancel = () => {
    setOpen(false);
    setInitValues({});
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleChangePage = async (page) => {
    console.log("HienVQ ~  page:", page);
    await getData(page);
  };
  return (
    <div className={styles.userPage}>
      <UserForm open={open} onSave={onSave} onCancel={onCancel} initialValues={initialValues} />
      <div className={styles.button}>
        <Button type="primary" icon={<PlusOutlined />} size={"large"} onClick={showModal}>
          ADD
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{ pageSize: 5, total: total, onChange: handleChangePage }}
      />
    </div>
  );
}
// số trang = Làm tròn lên (tổng số bản ghi / số lượng bản ghi trên 1 trang)
