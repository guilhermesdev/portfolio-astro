import { AiFillTags } from 'react-icons/ai';

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: AiFillTags,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color'
    },
    {
      name: 'textColor',
      title: 'Text color',
      type: 'color'
    }
  ]
}
