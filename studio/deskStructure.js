import S from '@sanity/desk-tool/structure-builder';

import { AiFillSetting } from 'react-icons/ai';

const alreadyListed = ['siteSettings'];

export default () =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
			.title('Site settings')
			.child(
				S.document()
					.schemaType('siteSettings')
					.documentId('siteSettings')
			).icon(AiFillSetting),
		S.divider(),
		...S.documentTypeListItems()
			.filter(listItem => !alreadyListed.includes(listItem.getId()))
		])