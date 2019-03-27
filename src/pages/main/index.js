import React, { Component } from 'react';
import { Upload, Button, Icon } from 'antd';
import Message from '../../utils/message/index.js';
import FileProcessor from '../../file-processor/index.ts';
import Card from '../../components/card/index.js';
import models from '../../models/index';
import './index.less';
import { withRouter } from 'react-router';

const { tableDataModel } = models;
@withRouter
export default class Main extends Component {
  onUploadStateChange = info => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      const fileProcessor = new FileProcessor(false);
      fileProcessor.readXLXS(info.file.originFileObj, tableData => {
        if (!tableData) {
          return;
        }
        const dataSource = tableData.Sheets[tableData.SheetNames[0]];
        const tableTitleData = FileProcessor.getTableTitle(dataSource);
        const tableContentData = FileProcessor.getTableContentData(dataSource);
        tableDataModel.setTableTitleData(tableTitleData);
        tableDataModel.setTableContentData(tableContentData);
        setTimeout(() => {
          this.props.history.push('/table');
        }, 500);
      });
      Message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      Message.error(`${info.file.name} file upload failed.`);
    }
  };
  /**
   * 获取Antd Upload组件参数
   * @returns {{headers: {authorization: string}, onChange(*): void, name: string, action: string}}
   */
  getUploadProps() {
    return {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text'
      },
      onChange: this.onUploadStateChange
    };
  }

  render() {
    return (
      <div className={'main'}>
        <div id={'demo'} />
        <Card>
          <div className={'upload-container'}>
            <div className={'icon-upload-wrapper'}>
              <Upload className={'upload-component'} {...this.getUploadProps()}>
                <div className={'icon-upload'} />
              </Upload>
            </div>
            <div className={'tip-text-wrapper'}>
              select <span className={'tip-strong-text'}>file</span> to upload
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
