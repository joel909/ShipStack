import { ResponseObject } from "../../../models/response.model";
export default function createResponse(success: boolean,code:number, message?: string,data?: any,) : ResponseObject{
  const response: ResponseObject = {
    code : code,
    success: success,
    message: message,
    data: data}
    return response;
}