import { type IDisplayOptions, type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { customerBodyProperties, customerIdProperty } from './shared.properties';

const properties: INodeProperties[] = [customerIdProperty, ...customerBodyProperties];

const displayOptions: IDisplayOptions = {
	show: { resource: ['customer'], operation: ['update'] },
};

export const description = updateDisplayOptions(displayOptions, properties);
