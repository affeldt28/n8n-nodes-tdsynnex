import { type IDisplayOptions, type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { pageQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {
			pageSize: 50,
		},
		placeholder: 'Add Field',
		options: [
			...pageQueryParameters,
			{
				displayName: 'Filter by Customer Email',
				name: 'filterCustomerEmail',
				description: 'Filter by customer email address',
				type: 'string',
				default: '',
				placeholder: 'e.g. john.doe@example.com',
				routing: {
					send: {
						type: 'query',
						propertyInDotNotation: false,
						property: 'filter.customerEmail',
					},
				},
			},
			{
				displayName: 'Filter by Language Code',
				name: 'filterLanguageCode',
				description: 'Filter by customer language code',
				type: 'string',
				default: '',
				placeholder: 'e.g. en',
				routing: {
					send: {
						type: 'query',
						propertyInDotNotation: false,
						property: 'filter.languageCode',
					},
				},
			},
			{
				displayName: 'Filter by Customer Status',
				name: 'filterCustomerStatus',
				type: 'options',
				default: 'CUSTOMER_STATUS_UNSPECIFIED',
				options: [
					{
						name: 'Unspecified',
						value: 'CUSTOMER_STATUS_UNSPECIFIED',
					},
					{
						name: 'Active',
						value: 'ACTIVE',
					},
					{
						name: 'Inactive',
						value: 'INACTIVE',
					},
				],
				routing: {
					send: {
						type: 'query',
						propertyInDotNotation: false,
						property: 'filter.customerStatus',
					},
				},
			},
			{
				displayName: 'Filter by Customer Name',
				name: 'filterCustomerName',
				type: 'string',
				default: '',
				placeholder: 'e.g. John Doe',
				routing: {
					send: {
						type: 'query',
						propertyInDotNotation: false,
						property: 'filter.customerName',
					},
				},
			},
		],
	},
];

const displayOptions: IDisplayOptions = {
	show: {
		resource: ['customer'],
		operation: ['getAll'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
