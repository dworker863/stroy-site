import { IVideo } from '../../../commonTypesInterfaces/IVideo';

export type TCardVideoProps = {
  auth: boolean;
  video: IVideo;
  updateVideoFormHandler: () => void;
};
