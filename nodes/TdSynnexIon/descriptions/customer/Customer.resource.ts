import type { INodeProperties } from 'n8n-workflow';
import * as cloudProfileLegacy from './cloudProfileLegacy.operation';
import * as cloudProfiles from './cloudProfiles.operation';
import * as create from './create.operation';
import * as get from './get.operation';
import * as getAll from './getAll.operation';
import * as update from './update.operation';

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
				name: 'Create',
				value: 'create',
				description: 'Create a customer',
				action: 'Create a customer',
				routing: { request: { method: 'POST', url: '/customers' } },
			},
			{
				name: 'Get',
				description: 'Get a single customer',
				value: 'get',
				routing: {
					request: {
						method: 'GET',
						url: '=/customers/{{ encodeURIComponent($parameter.customerId) }}',
					},
				},
				action: 'Get a customer',
			},
			{
				name: 'Get Cloud Profile (Legacy)',
				value: 'getCloudProfile',
				description: 'Get a customer cloud profile',
				action: 'Get a customer cloud profile',
				routing: {
					request: {
						method: 'GET',
						url: '=/customers/{{ encodeURIComponent($parameter.customerId) }}/cloudProfile',
					},
				},
			},
			{
				name: 'Get Cloud Profiles',
				value: 'getCloudProfiles',
				description: 'Get customer cloud profiles',
				action: 'Get customer cloud profiles',
				routing: {
					request: {
						method: 'GET',
						url: '=/customers/{{ encodeURIComponent($parameter.customerId) }}/cloudProfiles',
					},
				},
			},
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
			{
				name: 'Update',
				value: 'update',
				description: 'Update a customer',
				action: 'Update a customer',
				routing: {
					request: {
						method: 'PUT',
						url: '=/customers/{{ encodeURIComponent($parameter.customerId) }}',
					},
				},
			},
		],
	},
	...getAll.description,
	...get.description,
	...create.description,
	...cloudProfiles.description,
	...cloudProfileLegacy.description,
	...update.description,
];
