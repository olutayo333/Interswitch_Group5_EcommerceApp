const backendDomain = "https://3197-41-76-82-123.ngrok-free.app"; 

const SummaryApi = {
  register: {
    url: `${backendDomain}/auth/register`,
    method: "post",
  },
  login: {
    url: `${backendDomain}/auth/login`,
    method: "post",
  },
  addCategory: {
    url: `${backendDomain}/category/add`,
    method: "post",
  },
  updateCategory: {
    url: `${backendDomain}/category/update`,
    method: "put",
  },
  fetchCategory: {
    url: `${backendDomain}/category/all`,
    method: "get",
  },
  deleteCategory: {
    url: `${backendDomain}/category/delete`,
    method: "del",
  },
  addProduct: {
    url: `${backendDomain}/product/add`,
    method: "post",
  },
  updateProduct: {
    url: `${backendDomain}/product/update`,
    method: "put",
  },
  fetchProduct: {
    url: `${backendDomain}/product/all`,
    method: "get",
  },
  sellProduct: {
    url: `${backendDomain}/transaction/sell`,
    method: "post",
  },

  fetchByBatch: {
    url: `${backendDomain}/transactions/byBatch`,
    method: "get",
  },
  fetchByItem: {
    url: `${backendDomain}/transaction/byBatch`,
    method: "get",
  },
  fetchByDate: {
    url: `${backendDomain}/transaction/byBatch`,
    method: "get",
  },
  config: {
    url: `${backendDomain}/category/config`,
    method: "put",
  },
  allTransactions: {
    url: `${backendDomain}/transaction/all`,
    method: "get",
  },
};

export default SummaryApi;
