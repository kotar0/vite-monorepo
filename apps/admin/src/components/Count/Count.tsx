import { useContext } from 'react';
import { GlobalContext, IGlobalContext } from '../../providers/SampleGlobalProvider';

export function Count() {
  const { count } = useContext(GlobalContext) as IGlobalContext;
  return <span>{count}</span>;
}
