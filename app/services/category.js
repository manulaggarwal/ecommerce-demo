import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    fetchCategories: () => client.request({
      method: 'GET',
      url: '/categories'
    }),
    fetchCategoryWithProducts: (id) => client.request({
        method: 'GET',
        url: `/category/${id}`
    }),
    getProduct: (id) => client.request({
      method: 'GET',
      url: `/product/${id}`
    })
  };
};

