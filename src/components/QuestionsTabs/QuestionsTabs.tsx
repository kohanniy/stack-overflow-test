import { TabsUnstyled } from '@mui/material';
import { TabsList, Tab } from './Styles';
import { QuestionsTabsProps } from './Types';

const QuestionsTabs = (props: QuestionsTabsProps) => {
  const { onChange, value, items } = props;

  return (
    <TabsUnstyled style={{ flexShrink: 0 }} value={value} onChange={onChange}>
      <TabsList>
        {items.map((item) => (
          <Tab key={item.id} selected={value === item.value} value={item.value}>
            {item.label}
          </Tab>
        ))}
      </TabsList>
    </TabsUnstyled>
  );
};

export default QuestionsTabs;
