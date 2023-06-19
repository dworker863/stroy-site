import axios from 'axios';
import { IProject } from '../commonTypesInterfaces/IProject';
import { IService } from '../commonTypesInterfaces/IService';
import { IUser } from '../commonTypesInterfaces/IUser';

export const instance = axios.create({
  baseURL: 'http://192.168.1.4:8000/',
  withCredentials: true,
});

export const registration = ({
  username,
  password,
}: IUser): Promise<IUser & { access_token: string }> => {
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

export const login = ({
  username,
  password,
}: IUser): Promise<IUser & { access_token: string }> => {
  return instance
    .post('auth/login', { username, password })
    .then((res) => {
      localStorage.setItem('token', res.data.access_token);
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const checkJwt = (): Promise<boolean> => {
  return instance
    .get('auth/login', {
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
    .catch((e) => {
      return e.response.data.message;
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
    .catch((e) => {
      return e.response.data.message;
    });
};

export const postProject = (project: IProject): Promise<IProject> => {
  const formData = new FormData();

  formData.append('name', project.name);
  formData.append('description', project.description);

  if (project.review !== null) {
    formData.append('review', JSON.stringify(project.review));
  }

  project.images.map((image) => {
    formData.append('images', image);
  });

  formData.append('price', String(project.price));

  console.log(1111);

  return instance
    .post(`projects`, formData, {
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

export const updateProject = (project: IProject): Promise<any> => {
  const formData = new FormData();

  formData.append('name', project.name);
  formData.append('description', project.description);

  if (project.review !== null) {
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
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const deleteProject = (id?: number): Promise<number> => {
  return instance
    .delete(`projects/${id}`, {
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
