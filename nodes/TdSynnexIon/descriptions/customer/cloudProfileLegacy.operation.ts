import { type IDisplayOptions, type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { customerIdProperty, providerIdProperty } from './shared.properties';

const properties: INodeProperties[] = [
	customerIdProperty,
	{
		displayName:
			'This legacy endpoint supports Azure only and will be deprecated. Use Get Cloud Profiles for new workflows.',
		name: 'legacyNotice',
		type: 'notice',
		default: '',
	},
	{ ...providerIdProperty, required: true },
	{
		displayName: 'Refresh',
		name: 'refresh',
		type: 'boolean',
		default: false,
		description: 'Whether to refresh the cloud profile',
		routing: { send: { type: 'query', property: 'refresh' } },
	},
];

const displayOptions: IDisplayOptions = {
	show: {
		resource: ['customer'],
		operation: ['getCloudProfile'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
