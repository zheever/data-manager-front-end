import { observable, action, computed } from 'mobx';
import * as mobx from 'mobx';

export default class TableDataModel {
  // @observable tableData = [];
  @observable tableTitleData = [];
  @observable tableContentData = [];

  @action setTableTitleData(tableTitleData) {
    this.tableTitleData = tableTitleData;
  }

  @action setTableContentData(tableContentData) {
    this.tableContentData = tableContentData;
  }

  @action getTableTitleData() {
    return mobx.toJS(this.tableTitleData);
  }

  @action getTableContentData() {
    return mobx.toJS(this.tableContentData);
  }

  @action addTableData(item) {
    this.tableContentData.push(item);
  }

  @action deleteTableData(id) {
    let deleteItemIndex = -1;
    for (let i = 0; i < this.tableContentData.length; i++) {
      if (this.tableContentData[i].id === id) {
        deleteItemIndex = i;
        break;
      }
    }
    if (deleteItemIndex >= 0) {
      let tableContentDataTemp = mobx.toJS(this.tableContentData);
      tableContentDataTemp.splice(deleteItemIndex, 1);
      this.tableContentData = tableContentDataTemp;
    }
  }
}
