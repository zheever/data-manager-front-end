import DmService from '../../services';

export default class ErrorHandler {
  static throwError(message, isStrict = false) {
    DmService.log(message);
    if (!isStrict) {
      setTimeout(function() {
        // throw new Error(message);
      }, 0);
    } else {
      throw new Error(message);
    }
  }
}
