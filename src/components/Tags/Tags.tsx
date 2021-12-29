import { Chip } from '@mui/material';
import { TagsStyled, TagItem } from './Styles';
import { TagsProps } from './Types';

const Tags = (props: TagsProps) => {
  const { tags, onTagClick } = props;

  return (
    <TagsStyled disablePadding>
      {tags.map((tag: string) => (
        <TagItem key={tag}>
          <Chip size='small' label={tag} onClick={onTagClick ? () => onTagClick(tag) : undefined} />
        </TagItem>
      ))}
    </TagsStyled>
  );
};

export default Tags;
