import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    createOrder: () => client.request({
      method: 'GET',
      url: '/order/create'
    }),
    addShippingAddress: ({...data}) => client.request({
      method: 'POST',
      url: '/order/addShippingAddress',
      data
    }),
    addBillingAddress: ({...data}) => client.request({
      method: 'POST',
      url: '/order/addBillingAddress',
      data
    })
  };
};

