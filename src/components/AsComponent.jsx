import {brandIcons} from '@/shareds/categIcon';

export function AsIcon({as = 'antdesign', ...props} = {}) {
  let Icon;
  if (brandIcons[as]) {
    Icon = brandIcons[as];
  } else {
    Icon = () => <span></span>;
  }

  return <Icon {...props} />;
}
