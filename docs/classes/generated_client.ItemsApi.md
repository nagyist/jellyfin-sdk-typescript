[jellyfin-sdk-typescript](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ItemsApi

# Class: ItemsApi

[generated-client](../modules/generated_client.md).ItemsApi

ItemsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ItemsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ItemsApi.md#constructor)

### Properties

- [axios](generated_client.ItemsApi.md#axios)
- [basePath](generated_client.ItemsApi.md#basepath)
- [configuration](generated_client.ItemsApi.md#configuration)

### Methods

- [getItems](generated_client.ItemsApi.md#getitems)
- [getItemsByUserId](generated_client.ItemsApi.md#getitemsbyuserid)
- [getResumeItems](generated_client.ItemsApi.md#getresumeitems)

## Constructors

### constructor

• **new ItemsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](index.Configuration.md) |
| `basePath` | `string` |
| `axios` | `AxiosInstance` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](index.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/base.ts#L50)

## Methods

### getItems

▸ **getItems**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets items based on a query.

**`throws`** {RequiredError}

**`memberof`** ItemsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemsApiGetItemsRequest`](../interfaces/generated_client.ItemsApiGetItemsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/items-api.ts:2710](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/items-api.ts#L2710)

___

### getItemsByUserId

▸ **getItemsByUserId**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets items based on a query.

**`throws`** {RequiredError}

**`memberof`** ItemsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemsApiGetItemsByUserIdRequest`](../interfaces/generated_client.ItemsApiGetItemsByUserIdRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/items-api.ts:2722](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/items-api.ts#L2722)

___

### getResumeItems

▸ **getResumeItems**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

**`summary`** Gets items based on a query.

**`throws`** {RequiredError}

**`memberof`** ItemsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ItemsApiGetResumeItemsRequest`](../interfaces/generated_client.ItemsApiGetResumeItemsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/generated_client.BaseItemDtoQueryResult.md)\>\>

#### Defined in

[generated-client/api/items-api.ts:2734](https://github.com/thornbill/jellyfin-sdk-typescript/blob/c0c5b18/src/generated-client/api/items-api.ts#L2734)