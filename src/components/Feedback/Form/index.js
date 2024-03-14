import { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { BugOutlined, HeartOutlined, LikeOutlined, QuestionOutlined } from '@ant-design/icons';

const { Option } = Select;

const FeedbackForm = ({onFeedbackSubmitted}) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        // setLoading(true);
        onFeedbackSubmitted(values)
        // try {
        //     await new Promise(resolve => setTimeout(resolve, 1000));
        //     message.success('Feedback submitted successfully!');
        //     form.resetFields();
        // } catch (error) {
        //     console.error('Error submitting feedback:', error);
        //     message.error('Failed to submit feedback. Please try again later.');
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <div className="feedback-form-container">
            <h2>Submit Feedback</h2>
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        { required: true, message: 'Please enter a title' }
                    ]}
                >
                    <Input placeholder="Enter feedback title" />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        { required: true, message: 'Please enter a description' }
                    ]}
                >
                    <Input.TextArea rows={4} placeholder="Enter feedback description" />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                    rules={[
                        { required: true, message: 'Please select a category' }
                    ]}
                >
                    <Select placeholder="Select a category">
                        <Option value="bug"><BugOutlined /> Bug Report</Option>
                        <Option value="feature"><HeartOutlined /> Feature Request</Option>
                        <Option value="improvement"><LikeOutlined /> Improvement</Option>
                        <Option value="other"><QuestionOutlined /> Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit Feedback
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FeedbackForm;
