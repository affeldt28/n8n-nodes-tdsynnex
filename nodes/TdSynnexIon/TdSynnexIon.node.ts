import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import { customer } from './descriptions';

export class TdSynnexIon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TD SYNNEX ION',
		name: 'tdSynnexIon',
		icon: {
			light: 'file:../../icons/td-synnex.svg',
			dark: 'file:../../icons/td-synnex.dark.svg',
		},
		group: ['input'],
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		version: 3,
		description: 'Interact with the TD SYNNEX ION API',
		defaults: {
			name: 'TD SYNNEX ION',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'tdSynnexIonApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{ $credentials.baseUrl }}{{ $credentials.apiBaseUrl }}',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: 'customer',
				options: [
					{
						name: 'Customer',
						value: 'customer',
					},
				],
			},
			...customer.description,
		],
	};
}
