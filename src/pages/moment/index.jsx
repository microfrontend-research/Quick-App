import Head from 'next/head';
import {useState, useEffect} from 'react';
import Router from 'next/router';
import Nav from '@/components/Nav';
import Header from './_components/Header';
import Event from './_components/Event';

export default function Moment() {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((json) => {
        console.log('xxxxx', json);
        setEvents(json.events);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Life Moment</title>
      </Head>

      <Nav />

      <div className="container mx-auto max-w-sm p-6 bg-gray-800 rounded-lg shadow-xl">
        <Header
          className="cursor-pointer"
          onTitle={() => Router.push('/moment/history')}
        />

        <div className="relative flex flex-wrap mt-2 mx-2" role="event-list">
          <ul className="absolute right-0 bg-black text-gray-300">
            <li onClick={() => Router.push('/moment/new/date')}>日期</li>
            <li onClick={() => Router.push('/moment/new/progress')}>时间进度</li>
            <li onClick={() => Router.push('/moment/new/age')}>年龄</li>
          </ul>
          <div className="w-full px-2 my-2">
            {events.map((event) => (
              <Event key={event.name} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
