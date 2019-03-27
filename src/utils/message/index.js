import { message } from 'antd';

class Message {
  static info(msg, time = 2) {
    message.info(msg, time);
  }

  static success(msg, time = 3) {
    message.success(msg, time);
  }

  static error(msg, time = 3) {
    message.error(msg, time);
  }

  static warning(msg, time = 3) {
    message.warning(msg, time);
  }
}

export default Message;
