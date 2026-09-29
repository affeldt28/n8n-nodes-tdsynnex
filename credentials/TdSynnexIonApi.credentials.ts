import type {
	IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	IHttpRequestHelper,
	INodeProperties,
} from 'n8n-workflow';

export class TdSynnexIonApi implements ICredentialType {
	name = 'tdSynnexIonApi';

	displayName = 'TD SYNNEX ION API';

	icon: Icon = {
		light: 'file:../icons/td-synnex.svg',
		dark: 'file:../icons/td-synnex.dark.svg',
	};

	documentationUrl = 'https://www.tdsynnex.com/ion/docs/#authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'hidden',
			default: 'https://ion.tdsynnex.com',
		},
		{
			displayName: 'API Base URL',
			name: 'apiBaseUrl',
			type: 'hidden',
			default: '/api/v3',
		},
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			required: true,
			default: '',
			description:
				'The account ID for the TD SYNNEX ION API. This is required for routing requests to the correct account.',
		},
		{
			displayName: 'Refresh Token',
			name: 'refreshToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
			description:
				'The refresh token for the TD SYNNEX ION API. This is used to obtain a new access token when the current one expires.',
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'refresh_token',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'hidden',
			typeOptions: {
				expirable: true,
				password: true,
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const response = (await this.helpers.httpRequest({
			method: 'POST',
			url: `${credentials.baseUrl}/oauth/token`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: {
				grant_type: credentials.grantType as string,
				refresh_token: credentials.refreshToken as string,
			},
			json: true,
		})) as {
			access_token: string;
			expires_in: number;
			refresh_token: string;
			token_type: string;
		};

		if (!response.access_token) {
			throw new Error('TD SYNNEX ION did not return an access token');
		}

		return {
			accessToken: response.access_token,
			refreshToken: response.refresh_token || credentials.refreshToken,
		};
	}

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/oauth/validateAccess',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: {
				access_token: '={{$credentials.accessToken}}',
			},
		},
	};
}
