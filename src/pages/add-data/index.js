import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { createForm } from 'rc-form';
import models from '../../models/index';
import Message from '../../utils/message/index';
import './index.less';

const { tableDataModel } = models;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

@createForm()
class addData extends Component {
  addData = () => {
    this.props.form.validateFields((error, value) => {
      debugger;
      if (!!error) {
        Message.error(error);
      }
      tableDataModel.addTableData(value);
      Message.info('添加数据成功！');
    });
  };

  render() {
    return (
      <div>
        <Form {...formItemLayout}>
          {tableDataModel.tableTitleData.map((item, index) => {
            const { getFieldDecorator } = this.props.form;
            const { title, key } = item;
            return (
              <Form.Item label={title}>
                {getFieldDecorator(key, {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your data!'
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            );
          })}
        </Form>
        <Button onClick={this.addData} />
      </div>
    );
  }
}

export default addData;
