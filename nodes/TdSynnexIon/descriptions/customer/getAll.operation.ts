import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { pageQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [...pageQueryParameters];

const displayOptions = {
	show: {
		resource: ['customer'],
		operation: ['getAll'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
