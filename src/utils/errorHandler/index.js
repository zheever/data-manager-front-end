export default class ErrorHandler {
  static throwError(message, isStrict = false) {
    if (!isStrict) {
      setTimeout(() => {
        throw new Error(message);
      });
    } else {
      throw new Error(message);
    }
  }
}
