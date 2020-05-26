import request from "../utils/request";

export default {
  samplePostRequest: async (endpoint: String, data: Object) => {
    const response = await request.post(endpoint, data);
    return response;
  },
};
