import axios from 'axios';
import useSWR from 'swr';
import { Counter } from '../screens/Counter';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data } = useSWR('/user', fetcher);

  return <Counter title='Home' data={data}></Counter>;
}
