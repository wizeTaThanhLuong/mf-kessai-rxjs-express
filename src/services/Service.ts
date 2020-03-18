export type TSuccessResponse = {
  payload: object;
  code: number;
};

export type TRejectResponse = {
  payload: object;
  code: number;
};

class Service {
  static rejectResponse(payload: object, code: number = 500): TRejectResponse {
    return { payload, code };
  }

  static successResponse(payload: object, code: number = 200): TSuccessResponse {
    return { payload, code };
  }
}

export default Service;
