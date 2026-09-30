import { type IDisplayOptions, type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { customerIdProperty } from './shared.properties';

const properties: INodeProperties[] = [customerIdProperty];

const displayOptions: IDisplayOptions = {
	show: { resource: ['customer'], operation: ['get'] },
};

export const description = updateDisplayOptions(displayOptions, properties);
