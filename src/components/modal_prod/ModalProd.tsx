import { FC, useEffect } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import { useUpdateCommentMutation } from '../../redux/api/comment.api';



interface Props {
    modalOpen: any
    isModalOpen: any
    setIsModalOpen: any
}

type FieldType = {
    name?: string;
    price?: number;
    description?: string;
};

const ModalOpen: FC<Props> = ({ modalOpen, isModalOpen, setIsModalOpen }) => {
    const [form] = Form.useForm<FieldType>();
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (modalOpen) {
            form.setFieldsValue({
                name: modalOpen.name,
                description: modalOpen.description,
                price: modalOpen.price,
            });
        }
    }, [modalOpen, form]);

    const [updateComment] = useUpdateCommentMutation()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        updateComment({ id: Number(modalOpen.id), body: values })
            .unwrap()
            .then(res => {
                console.log('✅ Update success:', res);
            })
            .catch(err => {
                console.error('❌ Update error:', err);
            });
        form.resetFields();
        setIsModalOpen(false);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
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
            </Modal>
        </>
    );
};

export default ModalOpen;