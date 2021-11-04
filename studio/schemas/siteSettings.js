import { AiFillSetting } from 'react-icons/ai';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
	icon: AiFillSetting,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About me',
      type: 'blockContent'
    }
  ]
}
