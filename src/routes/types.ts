import { globalState } from '@sf/ffr-core/es';
import { HomePageModel } from './homepage/HomePageModel';
import { DetailModel } from './detail/DetailModel';

export type TGlobalState = globalState<typeof HomePageModel & typeof DetailModel>;
