import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useCreateCommentsMutation } from '../../redux/api/comment.api';

type FieldType = {
  name?: string;
  price?: number;
  description?: string;
};

const FormInput: React.FC = () => {
  const [form] = Form.useForm<FieldType>();
  const [createComment] = useCreateCommentsMutation()
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    createComment(values)
    form.resetFields();

  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='container mx-auto '>
      <div className='px-3 rounded-[10px] bg-[#ccc] w-[400px] ml-[30%] py-5'>
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout='vertical'
        >
          <Form.Item<FieldType>
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="description"
            name="description"
            rules={[{ required: true, message: 'Please input your description!' }]}
          >
            <Input />
          </Form.Item>


        <Form.Item<FieldType>
          label="price"
          name="price"
          rules={[{ required: true, message: 'Please input your price!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className='w-[100%]' loading={false}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div >
  )
}

export default FormInput;