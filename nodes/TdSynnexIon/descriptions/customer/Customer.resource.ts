import type { INodeProperties } from 'n8n-workflow';
import * as getAll from './getAll.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customer'],
			},
		},
		routing: {
			request: {
				baseURL:
					'={{ $credentials.baseUrl }}{{ $credentials.apiBaseUrl }}/accounts/{{$credentials.accountId}}',
			},
		},
		options: [
			{
				name: 'Get Many',
				description: 'Get a list of customers',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/customers',
					},
				},
				action: 'Get many customers',
			},
		],
	},
	...getAll.description,
];
