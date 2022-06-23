import { Rings } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Loader.module.css';

const Loader = () => (
  <div className={s.Loader}>
    <Rings type="TailSpin" color="#00BFFF" height={100} width={100} />
  </div>
);
export default Loader;
