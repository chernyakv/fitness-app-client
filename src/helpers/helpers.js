import { notification } from 'antd';

export const createNotification = (type, message) => {
    notification[type]({
        message: message
    });
};