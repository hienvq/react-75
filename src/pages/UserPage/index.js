import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Modal, Space, Table, Tag } from "antd";
import { createUser, deleteUser, getUsers, updateUser } from "../../apis/user-api";
import useUserList from "../../hooks/useUserList";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import UserForm from "../../components/UserForm";

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
  const [data, getData] = useUserList();
  const [open, setOpen] = useState(false);
  const [initialValues, setInitValues] = useState({});
  const onSave = async (values) => {
    //call api+ reload data
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

    await getData();
  };
  const onCancel = () => {
    setOpen(false);
    setInitValues({});
  };

  const showModal = () => {
    setOpen(true);
  };
  return (
    <div className={styles.userPage}>
      <UserForm open={open} onSave={onSave} onCancel={onCancel} initialValues={initialValues} />
      <div className={styles.button}>
        <Button type="primary" icon={<PlusOutlined />} size={"large"} onClick={showModal}>
          ADD
        </Button>
      </div>

      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
}
