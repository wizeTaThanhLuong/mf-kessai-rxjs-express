export type TResponse = {
  payload: object;
  code: number;
};

class Service {
  static rejectResponse(payload: object, code: number = 500): TResponse {
    return { payload, code };
  }

  static successResponse(payload: object, code: number = 200): TResponse {
    return { payload, code };
  }
}

export default Service;
