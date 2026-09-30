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
		displayName: 'Page Token',
		name: 'pageToken',
		type: 'string',
		// Pagination cursors are not authentication secrets.
		typeOptions: { password: false },
		default: '',
		description: 'Token from a previous response. Leave empty to request the first page.',
		routing: { send: { type: 'query', property: 'pageToken' } },
	},
];
