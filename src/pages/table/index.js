import React, { Component } from 'react';
import { Table } from 'antd';
import models from '../../models/index';
import './index.less';

const { tableDataModel } = models;
class DataTable extends Component {
  getTableData = () => {
    const tableTitleData = tableDataModel.getTableTitleData();
    const tableContentData = tableDataModel.getTableContentData();
    return { tableTitleData, tableContentData };
  };

  renderTable = () => {
    const { tableTitleData, tableContentData } = this.getTableData();
    return (
      <Table
        className={'dm-table'}
        columns={tableTitleData}
        dataSource={tableContentData}
      />
    );
  };

  render() {
    return this.renderTable();
  }
}

export default DataTable;
