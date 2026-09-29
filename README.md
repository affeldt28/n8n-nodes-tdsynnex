# n8n-nodes-tdsynnex

This is an n8n community node package for TD SYNNEX services.

It lets you use TD SYNNEX APIs in your n8n workflows, starting with customer listing in StreamOne ION. Additional TD SYNNEX services can be added as separate nodes within this package.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

The package name is `@affeldt28/n8n-nodes-tdsynnex`.

## Operations

The **TD SYNNEX ION** node currently supports the following resources and operations:

### Customer

| Operation      | API                                                                                               | Implemented |
| -------------- | ------------------------------------------------------------------------------------------------- | ----------- |
| List customers | [GET /api/v3/accounts/{accountId}/customers](https://www.tdsynnex.com/ion/v3api/)                     | ✅          |

## Credentials

This node uses the **TD SYNNEX ION API** credential.

You need:

- **Account ID**: The ION account whose customers you want to access.
- **Refresh Token**: An API refresh token obtained from the ION admin portal.

To configure the credential in n8n:

1. Create a new **TD SYNNEX ION API** credential.
2. Enter your **Account ID**.
3. Enter your **Refresh Token**.
4. Save and test the credential. The test requests `POST /oauth/validateAccess`.

The API base URL is `https://ion.tdsynnex.com/api/v3`. The credential requests an access token from `https://ion.tdsynnex.com/oauth/token` using `grant_type=refresh_token`. API requests use the returned token in the `Authorization: Bearer` header.

The credential handles the token exchange directly; it does not provide an interactive browser authorization flow. Client ID, Client Secret, and API Key are not required by this credential.

## Compatibility

This package uses the n8n community node API version 1 and depends on `n8n-workflow`.

No specific minimum n8n version is pinned in this package yet.

## Usage

1. Add the **TD SYNNEX ION** node to your workflow.
2. Select your **TD SYNNEX ION API** credential.
3. Set **Resource** to **Customer**.s
4. Set **Operation** to **Get Many**.
5. Set **Page Size** to the requested number of customers. The default is `50`.
6. Leave **Page Token** empty for the first page, or enter the continuation token from a previous response.
7. Execute the node to retrieve customers and use the response in subsequent workflow steps.

Each execution requests one page and returns the API response. Automatic pagination is not implemented.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [TD SYNNEX ION documentation](https://www.tdsynnex.com/ion/docs/#introduction)
- [TD SYNNEX ION API reference](https://www.tdsynnex.com/ion/v3api/)
