import { type IDisplayOptions, type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { customerBodyProperties } from './shared.properties';

const properties: INodeProperties[] = [...customerBodyProperties];

const displayOptions: IDisplayOptions = {
	show: {
		resource: ['customer'],
		operation: ['create'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
