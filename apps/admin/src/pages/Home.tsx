import axios from 'axios';
import useSWR from 'swr';
import { Counter } from '../screens/Counter';

const fetcher = (url: string) => axios.post(url).then((res) => res.data);
const fetcherGet = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  useSWR('/login', fetcher);
  const { data } = useSWR('/user', fetcherGet);

  return <Counter title='Home' data={data}></Counter>;
}
