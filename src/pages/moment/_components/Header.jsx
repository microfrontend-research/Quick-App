import Router from "next/router";
import {
  SettingOutlined,
  PlusOutlined,
  LeftOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const headerIcons = {
  setting: SettingOutlined,
  add: PlusOutlined,
  return: (props) => <LeftOutlined {...props} onClick={() => Router.back()} />,
  done: CheckOutlined,
};

const fn = () => {};
const inlinePlaceholder = () => <span></span>;

export default function Header({
  className,
  onLeft = fn,
  onTitle = fn,
  onRight = fn,
  title = "Life Moment",
  left = "setting",
  right = "add",
} = {}) {
  const LeftIcon = left ? headerIcons[left] : inlinePlaceholder;
  const RightIcon = right ? headerIcons[right] : inlinePlaceholder;

  return (
    <>
      <div className={`flex justify-between text-gray-200 ${className}`}>
        <LeftIcon onClick={onLeft} className="text-xl" />
        <span onClick={onTitle}>{title.toUpperCase()}</span>
        <RightIcon onClick={onRight} className="text-xl" />
      </div>
    </>
  );
}
