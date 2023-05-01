import axios from 'axios';
import { IService } from '../commonInterfaces/IService';
import { IUser } from '../commonInterfaces/IUser';

const baseURL = 'http://192.168.1.3:8000/';

export const instance = axios.create({
  baseURL: 'http://192.168.1.3:8000/',
  withCredentials: true,
});

export const registration = ({ username, password }: IUser) => {
  return instance
    .post('auth/registration', { username, password })
    .then((res) => {
      localStorage.setItem('token', res.data.access_token);
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const login = ({ username, password }: IUser) => {
  return instance
    .post('auth/login', { username, password })
    .then((res) => {
      localStorage.setItem('token', res.data.access_token);
      console.log(localStorage.getItem('token'));

      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const fetchServices = () => {
  return fetch(`${baseURL}/services`)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const postService = (service: IService) => {
  return instance
    .post('services', service, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const updateService = (service: IService) => {
  return instance
    .patch(`services/${service.id}`, service, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data.message;
    });
};
