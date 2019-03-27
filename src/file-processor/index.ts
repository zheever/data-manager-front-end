import * as XLSX from 'xlsx';
import ErrorHandle from '../utils/errorHandler';
import uniqid from 'uniqid';

interface ITitleItemInterface  {
    title: string,
    dataIndex: string,
    key: string
}

// interface ITableContentItemInterface  {
//     key: string,
// }

/**
 * 处理xlxs表格文件
 * 输出数据格式为 [{"name":"person1","score1":80,"score2":70,"score3":69},{"name":"person2","score1":30,"score2":67,"score3":100},{"name":"person3","score1":40,"score2":38,"score3":90}]
 */
export default class FileProcessor {
    /**
     * 是否将文件读取为二进制字符串
     */
    private readonly rABS: boolean = false;

    constructor(rABS: boolean) {
        this.rABS = rABS;
    }

    /**
     * 文件流转BinaryString
     * @param data
     */
    static fixData(data) {
        let o = "",
            l = 0,
            w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }

    /**
     * 读取xlxs表格文件
     * @param file
     */
    public readXLXS(file, cb?: Function) {
        let reader = new FileReader();
        reader.onload = this.onFileReaderOnLoad.bind(this, cb);
        if(this.rABS) {
           reader.readAsArrayBuffer(file);
        } else {
           reader.readAsBinaryString(file);
        }
    }

    /**
     * wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
     * wb.Sheets[Sheet名]获取第一个Sheet的数据
     * JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) )
     */
    private handleXlxsFile(data: any, cb?: Function) {
        if (!data) {
            ErrorHandle.throwError('xlxsFileProcessor 传入data不可为空');
            return null;
        }
        let wb;
        if(this.rABS) {
            wb = XLSX.read(btoa(FileProcessor.fixData(data)), {//手动转化
                type: 'base64'
            });
            cb && cb(wb);
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
            cb && cb(wb);
        }
    }

    /**
     * 文件读取完成回调函数
     */
    private onFileReaderOnLoad(cb?: Function, e?: any) {
        let data = (e.target as any).result;
        this.handleXlxsFile(data, cb);
    }

    public static getSheetBySheetName(wb, name) {
        JSON.stringify(XLSX.utils.sheet_to_json(name));
    }

    public static getFristLastLineIndex(tableData) {
        const ref = tableData['!ref'];
        const firstLineIndex = + ref.match(/[A-Za-z]+([0-9]+):[A-Za-z]([0-9]+)$/)[1];
        const lastLineIndex = + ref.match(/[A-Za-z]+([0-9]+):[A-Za-z]([0-9]+)$/)[2];
        return {firstLineIndex, lastLineIndex}
    }

    public static getTableTitle(tableData) {
        const {firstLineIndex} = FileProcessor.getFristLastLineIndex(tableData);
        let lineData = [];
        Object.keys(tableData).forEach((key) => {
            const titleRegExp = new RegExp(`([A-Za-z]+)${firstLineIndex}`,"gim");
            if (titleRegExp.test(key)) {
                const columnItem:ITitleItemInterface = {
                    title: tableData[key]['v'],
                    dataIndex: key,
                    key: key
                };
                lineData.push(columnItem);
            }
        });
        return lineData;
    }

    public static getTableContentData(tableData) {
        const {firstLineIndex, lastLineIndex} = FileProcessor.getFristLastLineIndex(tableData);
        let tableContentData = [];
        for (let x = firstLineIndex + 1; x <= lastLineIndex; x ++) {
            const contentItem:any = {};
            contentItem.id = uniqid();
            Object.keys(tableData).forEach((key) => {
                const titleRegExp = new RegExp(`([A-Za-z]+)${x}`,"gim");
                if (titleRegExp.test(key)) {
                    const contentKey = `${key.match(/([A-Za-z]+)[0-9]+/)[1]}1`;
                    contentItem[contentKey] = tableData[key]['v'];
                }
            });
            tableContentData.push(contentItem);
        }
        return tableContentData;
    }
}