import {useState, useEffect} from 'react';
import Nav from '@/components/Nav';
import Header from './_components/Header';
import Event from './_components/Event';

export default function Moment() {
  let [historyToday, setHistoryToday] = useState([]);

  // useEffect(() => {
  //   fetch("/api/events")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log("xxxxx", json);
  //       setEvents(json.events);
  //     });
  // }, []);

  return (
    <>
      <Nav />

      <div className="container mx-auto max-w-sm p-6 bg-gray-800 rounded-lg shadow-xl">
        <Header left="return" title="history · today" />

        <div className="flex flex-wrap mt-2 mx-2" role="event-list">
          <div role="date slug"></div>
          <div role="news slider"></div>
          <div className="w-full px-2 my-2"></div>
        </div>
      </div>
    </>
  );
}
