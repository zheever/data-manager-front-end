import React, { Component } from 'react';
import DMService from '../../services';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableList: [] /*历史上传表格文件列表*/
    };
  }

  async componentDidMount(): void {
    const { table_list: tableList } = await DMService.getTableList();
    console.log(tableList);
    this.setState({
      tableList
    });
  }

  render() {
    const { tableList } = this.state;
    return (
      <ul>
        {tableList.map((item, _id) => {
          return <li key={_id}>{item.name}</li>;
        })}
      </ul>
    );
  }
}

export default TableList;
