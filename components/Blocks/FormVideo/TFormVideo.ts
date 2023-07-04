import { IVideo } from '../../../commonTypesInterfaces/IVideo';

export type TFormVideoProps = {
  video?: IVideo;
  showVideoFormHandler?: () => void;
  updateVideoFormHandler?: () => void;
};
