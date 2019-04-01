import React, { Component } from 'react';
import DMService from '../../services';
import { DM_ROOT_ADDRESS } from '../../constants';

class FileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    };
  }

  async componentDidMount(): void {
    const { file_list: fileList } = await DMService.getFileList();
    this.setState({ fileList });
  }

  render() {
    const { fileList } = this.state;
    if (fileList && fileList.length >= 0) {
      return (
        <ul>
          {fileList.map(item => {
            const { file_name: fileName, _id: id } = item;
            return (
              <li key={id}>
                {fileName}
                <a
                  href={`${DM_ROOT_ADDRESS}/download/${fileName}`}
                  download={fileName}
                >
                  下载
                </a>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div>没有历史文件</div>;
    }
  }
}

export default FileList;
