export class AppResponse {
  status: number;
  message: string;
  data: any;
  httpStatus: number;

  constructor(obj?: any) {
    this.status = obj && obj.status || '';
    this.message = obj && obj.message || '';
    this.data = obj && obj.data || '';
  }

  toString() {
    return 'httpStatus: ' + this.httpStatus + ', status: ' + this.status + ', message: ' + this.message + ', data: ' + this.data;
  }

  setHttpStatus(httpStatus: number) {
    this.httpStatus = httpStatus;
  }

  getHttpStatus() {
    return this.httpStatus;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status: number) {
    this.status = status;
  }

  getMessage() {
    return this.message;
  }


  setMessage(message: string) {
    this.message = message;
  }

  getData() {
    return this.data;
  }

  setData(data: any) {
    this.data = data;
  }

}
