import axios, { AxiosProgressEvent } from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { IProject } from '../commonTypesInterfaces/IProject';
import { IService } from '../commonTypesInterfaces/IService';
import { IUser } from '../commonTypesInterfaces/IUser';
import { IVideo } from '../commonTypesInterfaces/IVideo';

export const instance = axios.create({
  baseURL: 'http://192.168.1.3:8000/',
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
  remember,
}: IUser & { remember: boolean }): Promise<
  IUser & { access_token: string }
> => {
  return instance
    .post('auth/login', { username, password })
    .then((res) => {
      if (remember) {
        localStorage.setItem('token', res.data.access_token);
      }
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

export const postProject = (
  project: IProject,
  handleUploadProgress: (
    progressEvent: AxiosProgressEvent,
    setProgress: Dispatch<SetStateAction<number>>,
  ) => void,
  setProgress: Dispatch<SetStateAction<number>>,
): Promise<IProject> => {
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
    .post(`projects`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) =>
        handleUploadProgress(progressEvent, setProgress),
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const updateProject = (
  project: IProject,
  handleUploadProgress: (
    progressEvent: AxiosProgressEvent,
    setProgress: Dispatch<SetStateAction<number>>,
  ) => void,
  setProgress: Dispatch<SetStateAction<number>>,
): Promise<any> => {
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
      onUploadProgress: (progressEvent: AxiosProgressEvent) =>
        handleUploadProgress(progressEvent, setProgress),
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

export const postVideo = (
  video: IVideo,
  handleUploadProgress: (
    progressEvent: AxiosProgressEvent,
    setProgress: Dispatch<SetStateAction<number>>,
  ) => void,
  setProgress: Dispatch<SetStateAction<number>>,
): Promise<IVideo> => {
  const formData = new FormData();

  formData.append('name', video.name);

  formData.append('description', video.description);

  if (video.link) {
    formData.append('link', video.link);
  }

  formData.append('video', video.video);

  return instance
    .post(`videos`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) =>
        handleUploadProgress(progressEvent, setProgress),
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const updateVideo = (
  video: IVideo,
  handleUploadProgress: (
    progressEvent: AxiosProgressEvent,
    setProgress: Dispatch<SetStateAction<number>>,
  ) => void,
  setProgress: Dispatch<SetStateAction<number>>,
): Promise<any> => {
  const formData = new FormData();

  formData.append('name', video.name);

  formData.append('description', video.description);

  if (video.link) {
    formData.append('link', video.link);
  }

  formData.append('video', video.video);

  return instance
    .patch(`videos/${video.id}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) =>
        handleUploadProgress(progressEvent, setProgress),
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e.response.data.message;
    });
};

export const deleteVideo = (id: number) => {
  return instance
    .delete(`videos/${id}`, {
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
