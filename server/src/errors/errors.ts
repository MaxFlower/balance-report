import { HTTP_STATUSES } from '../utils/constants';

export enum ERROR_MESSAGE {
  XPO_REQUEST_FAILED = 'Request to XRO API failed',
  FETCH_TYPE_FAILED = 'fetch failed',
  VALIDATION_ERROR = 'Validation error: periods is not in the range [1, 11]',
}

export class RequestError extends Error {
  status: HTTP_STATUSES;
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.status = HTTP_STATUSES.BAD_REQUEST;
  }
}

export class ValidationError extends Error {
  status: HTTP_STATUSES;
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.status = HTTP_STATUSES.BAD_REQUEST;
  }
}
