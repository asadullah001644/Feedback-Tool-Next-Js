"use client"
import { useState } from 'react';
import { Button, Modal,message } from 'antd';
import FeedbackForm from '@/components/Feedback/Form';
import FeedbackList from '@/components/Feedback/Listing';
import { Axios } from 'axios';
import { feedbackSubmission } from '@/services/auth.service';

const FeedbackPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [feedbackData, setFeedbackData] = useState(null);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleFeedbackSubmitted = async (formData) => {
        try {
            const response = await feedbackSubmission(formData);
            console.log('Login response:', response);
        } catch (error) {
            console.error('Login error:', error);
            message.error(error.response.data.message)
        }
    };

    return (
        <div>
            <div className="header">
                <h1>Feedback</h1>
                <Button type="primary" onClick={toggleModal}>Add Feedback</Button>
            </div>
            <Modal
                title="Submit Feedback"
                visible={isModalVisible}
                onCancel={toggleModal}
                footer={null}
            >
                <FeedbackForm onFeedbackSubmitted={handleFeedbackSubmitted} />
            </Modal>
            <div className="content">
                {feedbackData ? (
                    <FeedbackList feedbackData={feedbackData} />
                ) : (
                    <p>No feedback data found.</p>
                )}
            </div>
        </div>
    );
};

export default FeedbackPage;
