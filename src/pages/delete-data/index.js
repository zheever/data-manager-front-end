import React, { Component } from 'react';
import { Table } from 'antd';
import './index.less';
import { inject, observer } from 'mobx-react';
import ErrorHandler from '../../utils/errorHandler';

@inject('tableDataModel')
@observer
class deleteTable extends Component {
  deleteData = (text, record) => {
    this.props.tableDataModel.deleteTableData(record.id);
  };

  componentDidMount() {
    ErrorHandler.throwError('aaaa');
  }

  getTableData = () => {
    let tableTitleData = this.props.tableDataModel.getTableTitleData();
    if (!!tableTitleData && tableTitleData.length !== 0) {
      tableTitleData.push({
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a
              href="javascript:;"
              onClick={() => {
                this.deleteData(text, record);
              }}
            >
              删除
            </a>
          </span>
        )
      });
    }
    const tableContentData = this.props.tableDataModel.tableContentData;
    return { tableTitleData, tableContentData };
  };

  renderTable = () => {
    const { tableTitleData, tableContentData } = this.getTableData();
    return (
      <Table
        className={'delete-data-table'}
        columns={tableTitleData}
        dataSource={tableContentData}
      />
    );
  };

  render() {
    return this.renderTable();
  }
}

export default deleteTable;
