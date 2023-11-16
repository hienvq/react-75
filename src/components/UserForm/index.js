import { Form, Input, Modal, Radio } from "antd";
import React, { useEffect } from "react";

const UserForm = ({ open, onSave, onCancel, initialValues }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [initialValues]);
  return (
    <Modal
      forceRender
      open={open}
      destroyOnClose={true}
      title="Create/Edit User"
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(async (values) => {
            const recordId = initialValues.id;
            await onSave({ ...values, id: recordId });
            onCancel();
            //TODO: CALL API create/edit user + Reload data
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal" initialValues={initialValues} preserve={false}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please fill Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="avatar"
          label="Avatar"
          rules={[
            {
              required: true,
              message: "Please fill Avatar!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UserForm;
