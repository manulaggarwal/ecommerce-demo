import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
  const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
  return {
    login: ({ email, password }) => client.request({
      method: 'POST',
      url: '/sessions',
      data: {
        email,
        password
      }
    }),
    signUp: ({...data}) => client.request({
      method: 'POST',
      url: '/users',
      data
    }),
    logOut: () => client.request({
      method: 'DELETE',
      url: '/sessions'
    }),
    editUserDetails: ({...data}) => client.request({
        method: 'PUT',
        url: '/users/edit',
        data
    }),
    addToCart: (id) => client.request({
      method: 'POST',
      url: `/users/cart/add/${id}`,
      id
    }),
    getCartItems: () => client.request({
      method: 'GET',
      url: '/users/cart'
    }),
    removeCartItem: (id) => client.request({
      method: 'DELETE',
      url: `/users/cart/remove/${id}`
    }),
    addAddress: ({...data}) => client.request({
      method: 'POST',
      url: '/users/addAddress',
      data
    }),
    editAddress: ({...data}) => client.request({
      method: 'PUT',
      url: '/users/editAddress',
      data
    }),
    deleteAddress: (id) => client.request({
      method: 'DELETE',
      url: `/users/deleteAddress/${id}`
    })
  };
};

