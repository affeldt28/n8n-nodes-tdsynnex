import type { INodeProperties } from 'n8n-workflow';

export const pageQueryParameters: INodeProperties[] = [
	{
		displayName: 'Page Size',
		name: 'pageSize',
		type: 'number',
		default: 50,
		required: true,
		typeOptions: { minValue: 1, numberPrecision: 0 },
		description: 'Requested number of customers per page; the API may return fewer',
		routing: { send: { type: 'query', property: 'pageSize' } },
	},
	{
		displayName: 'Page Cursor',
		name: 'pageCursor',
		type: 'string',
		default: '',
		description:
			"Cursor from the previous response's nextPageToken. Leave empty to request the first page.",
		routing: { send: { type: 'query', property: 'pageToken' } },
	},
];
