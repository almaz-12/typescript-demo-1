/*
// Запрос в виде платежа
{
    "sum": 10000,
    "from": 2,
    "to": 4
}
// Ответ
{
    "status": "success",
    "data": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
},
{
    "status": "failed",
    "data": {
        "errorMessage": "Недостаточно средств",
        "errorCode": 4
    }
}
*/

interface IRequest {
  sum: number;
  from: number;
  to: number;
}

enum Status {
  SUCCESS = 'success',
  FAILED = 'failed',
}

interface DResponse {
  status: Status;
  data: DResponseSucces | DResponseFailed
}

interface DResponseSucces extends IRequest {
  databaseId: number;
}

interface DResponseFailed {
  errorMessage: string;
  errorCode: number;
}

function sendRequest(data: IRequest): DResponse {
  return {
    status: Status.SUCCESS,
    data: {
      databaseId: 567,
      sum: 10000,
      from: 2,
      to: 4
    }
  }
}