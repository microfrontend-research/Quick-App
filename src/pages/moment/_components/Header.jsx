import { SettingOutlined, PlusOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <>
      <div className="flex justify-between text-gray-200">
        <SettingOutlined className="text-xl" />
        <span>Life Moment</span>
        <PlusOutlined className="text-xl" />
      </div>
    </>
  );
}
