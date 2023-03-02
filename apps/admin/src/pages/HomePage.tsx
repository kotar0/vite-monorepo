import axios from 'axios';
import useSWR from 'swr';
import { CounterScreen } from '../screens/CounterScreen';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function HomePage() {
  const { data } = useSWR('/user', fetcher);

  return <CounterScreen title='Home' data={data} />;
}
