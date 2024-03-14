import { useState } from 'react';
import { List, Avatar, Pagination } from 'antd';
import {UserOutlined} from '@ant-design/icons';

const FeedbackList = ({feedbackData}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="feedback-list-container">
            <h2>Feedback List</h2>
            <List
                itemLayout="horizontal"
                dataSource={feedbackData.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                pagination={false}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar icon={<UserOutlined />} />}
                            title={<a href="#">{item.title}</a>}
                            description={`Category: ${item.category} | Submitted by: ${item.user}`}
                        />
                    </List.Item>
                )}
            />
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={feedbackData.length}
                onChange={handlePageChange}
                style={{ marginTop: '20px', textAlign: 'center' }}
            />
        </div>
    );
};

export default FeedbackList;
