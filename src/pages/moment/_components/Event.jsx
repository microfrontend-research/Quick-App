import dayjs from 'dayjs';
import {AsIcon} from '@/components/AsComponent';

export default function Event({event = {}} = {}) {
  return (
    <div
      key={event.name}
      className="flex justify-between items-center p-4 border-b-1 text-gray-200">
      <AsIcon as={event.icon} className="text-4xl" />
      <div>
        <h3>{event.name}</h3>
        <aside className="text-xs text-gray-500">
          <span>Yearly</span>·<span>{dayjs(event.date).format('YYYY/MM/DD')}</span>·<span>In</span>
        </aside>
      </div>

      <div>
        <div className="leading-none text-3xl">{dayjs(event.date).diff(dayjs(), 'day')}</div>
        <em className="not-italic text-xs text-gray-500">Days</em>
      </div>
    </div>
  );
}
