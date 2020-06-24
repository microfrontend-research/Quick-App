import { GoogleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export default function Event({ event = {} } = {}) {
  return (
    <div
      key={event.name}
      className="flex justify-between items-center p-4 border-b-1 text-gray-200"
    >
      <GoogleOutlined className="text-4xl" />
      <div>
        <h3>{event.name}</h3>
        <aside className="text-xs text-gray-500">
          <span>Yearly</span>·
          <span>{dayjs(event.date).format('YYYY/MM/DD')}</span>·
          <span>In</span>
        </aside>
      </div>
      <div>
        <div className="leading-none text-3xl">233</div>
        <em className="not-italic text-xs text-gray-500">Days</em>
      </div>
    </div>
  );
}
