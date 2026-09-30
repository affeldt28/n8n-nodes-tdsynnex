import { type IDisplayOptions, type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { customerIdProperty, providerIdProperty } from './shared.properties';

const properties: INodeProperties[] = [
	customerIdProperty,
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Enabled Only',
				name: 'enabledOnly',
				type: 'boolean',
				default: false,
				description: 'Whether to return only enabled cloud profiles',
				routing: { send: { type: 'query', property: 'enabledOnly' } },
			},
			providerIdProperty,
		],
	},
];

const displayOptions: IDisplayOptions = {
	show: { resource: ['customer'], operation: ['getCloudProfiles'] },
};

export const description = updateDisplayOptions(displayOptions, properties);
