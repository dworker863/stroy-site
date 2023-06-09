import axios from 'axios';
import { IProject } from '../commonInterfaces/IProject';
import { IService } from '../commonInterfaces/IService';
import { IUser } from '../commonInterfaces/IUser';

const baseURL = 'http://192.168.1.3:8000/';

export const instance = axios.create({
  baseURL: 'http://192.168.1.4:8000/',
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

export const deleteService = (id?: number) => {
  return instance
    .delete(`services/${id}`, {
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

export const postProject = (project: IProject) => {
  const formData = new FormData();
  console.log(project.images);

  formData.append('name', project.name);
  formData.append('description', project.description);

  if (project.review !== null) {
    console.log(JSON.stringify(project.review));

    formData.append('review', JSON.stringify(project.review));
  }

  project.images.map((image) => {
    formData.append('images', image);
  });

  formData.append('price', String(project.price));

  return instance
    .post(`projects`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return err.response.data.message;
    });
};

export const updateProject = (project: IProject) => {
  const formData = new FormData();
  console.log(project.images);

  formData.append('name', project.name);
  formData.append('description', project.description);

  if (project.review !== null) {
    console.log(JSON.stringify(project.review));

    formData.append('review', JSON.stringify(project.review));
  }

  project.images.map((image) => {
    formData.append('images', image);
  });

  formData.append('price', String(project.price));

  return instance
    .patch(`projects/${project.id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return err.response.data.message;
    });
};

export const deleteProject = (id?: number) => {
  return instance
    .delete(`projects/${id}`, {
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
