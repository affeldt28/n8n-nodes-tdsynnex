# n8n-nodes-tdsynnex

This is an n8n community node for the TD Synnex ION API.

It lets you use TD Synnex ION API endpoints in your n8n workflows, starting with invoice management operations for purchase credit memos.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node currently supports the following TD Synnex ION resources and operations.

## Credentials

This node uses the **TD Synnex ION API** credential.

You need the API access data provided by TD Synnex ION:

- **Client ID**: Sent as `client_id` to the token endpoint
- **Client Secret**: Sent as `client_secret` to the token endpoint
- **API Key**: Sent as the `API-KEY` header

To configure the credential in n8n:

1. Request the API access data from TD Synnex ION by contacting your TD Synnex ION account manager or support.
1. Create a new **TD Synnex ION API** credential.
2. Enter the **Client ID** provided by TD Synnex ION.
3. Enter the **Client Secret** provided by TD Synnex ION.
4. Enter the **API Key** provided by TD Synnex ION.
5. Save the credential.

The API base URL is `https://api.tdsynnex.com`
The token request uses `grant_type=client_credentials`. The returned bearer token is then sent together with the `API-KEY` header on API requests.

## Compatibility

This package uses the n8n community node API version 1 and depends on `n8n-workflow`.

No specific minimum n8n version is pinned in this package yet.


## Usage

Add the **TD Synnex ION** node to a workflow and select the **PurchaseCreditMemo** resource.

For **CreditMemo overview list**, no additional parameters are required.

For **CreditMemo by documentId**, provide the **Document Guid** value returned by the overview list or by another TD Synnex ION API response.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [TD Synnex Stream One ION API](https://www.tdsynnex.com/ion/docs/#introduction)
* [ID Synnex ION API Reference](https://www.tdsynnex.com/ion/v3api/)
