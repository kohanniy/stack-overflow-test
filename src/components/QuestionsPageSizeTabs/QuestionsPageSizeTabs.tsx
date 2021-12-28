import { TabsUnstyled, TabsUnstyledProps } from '@mui/material';
import { TabsList, Tab } from './Styles';

const QuestionsPageSizeTabs = (props: TabsUnstyledProps) => {
  const { onChange, value } = props;

  return (
    <TabsUnstyled value={value} onChange={onChange}>
      <TabsList>
        {[15, 30, 50].map((item) => (
          <Tab key={item} selected={value === item} value={item}>
            {item}
          </Tab>
        ))}
      </TabsList>
    </TabsUnstyled>
  );
};

export default QuestionsPageSizeTabs;
