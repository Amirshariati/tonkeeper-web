/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BlockchainAccountInspect,
  BlockchainBlock,
  BlockchainConfig,
  BlockchainRawAccount,
  GetBlockchainBlockDefaultResponse,
  MethodExecutionResult,
  SendBlockchainMessageRequest,
  Transaction,
  Transactions,
  Validators,
} from '../models/index';
import {
    BlockchainAccountInspectFromJSON,
    BlockchainAccountInspectToJSON,
    BlockchainBlockFromJSON,
    BlockchainBlockToJSON,
    BlockchainConfigFromJSON,
    BlockchainConfigToJSON,
    BlockchainRawAccountFromJSON,
    BlockchainRawAccountToJSON,
    GetBlockchainBlockDefaultResponseFromJSON,
    GetBlockchainBlockDefaultResponseToJSON,
    MethodExecutionResultFromJSON,
    MethodExecutionResultToJSON,
    SendBlockchainMessageRequestFromJSON,
    SendBlockchainMessageRequestToJSON,
    TransactionFromJSON,
    TransactionToJSON,
    TransactionsFromJSON,
    TransactionsToJSON,
    ValidatorsFromJSON,
    ValidatorsToJSON,
} from '../models/index';

export interface BlockchainAccountInspectRequest {
    accountId: string;
}

export interface ExecGetMethodForBlockchainAccountRequest {
    accountId: string;
    methodName: string;
    args?: Array<string>;
}

export interface GetBlockchainAccountTransactionsRequest {
    accountId: string;
    afterLt?: number;
    beforeLt?: number;
    limit?: number;
}

export interface GetBlockchainBlockRequest {
    blockId: string;
}

export interface GetBlockchainBlockTransactionsRequest {
    blockId: string;
}

export interface GetBlockchainRawAccountRequest {
    accountId: string;
}

export interface GetBlockchainTransactionRequest {
    transactionId: string;
}

export interface GetBlockchainTransactionByMessageHashRequest {
    msgId: string;
}

export interface SendBlockchainMessageOperationRequest {
    sendBlockchainMessageRequest: SendBlockchainMessageRequest;
}

/**
 * BlockchainApi - interface
 * 
 * @export
 * @interface BlockchainApiInterface
 */
export interface BlockchainApiInterface {
    /**
     * Blockchain account inspect
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    blockchainAccountInspectRaw(requestParameters: BlockchainAccountInspectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainAccountInspect>>;

    /**
     * Blockchain account inspect
     */
    blockchainAccountInspect(requestParameters: BlockchainAccountInspectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainAccountInspect>;

    /**
     * Execute get method for account
     * @param {string} accountId account ID
     * @param {string} methodName contract get method name
     * @param {Array<string>} [args] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    execGetMethodForBlockchainAccountRaw(requestParameters: ExecGetMethodForBlockchainAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MethodExecutionResult>>;

    /**
     * Execute get method for account
     */
    execGetMethodForBlockchainAccount(requestParameters: ExecGetMethodForBlockchainAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MethodExecutionResult>;

    /**
     * Get account transactions
     * @param {string} accountId account ID
     * @param {number} [afterLt] omit this parameter to get last transactions
     * @param {number} [beforeLt] omit this parameter to get last transactions
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainAccountTransactionsRaw(requestParameters: GetBlockchainAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>>;

    /**
     * Get account transactions
     */
    getBlockchainAccountTransactions(requestParameters: GetBlockchainAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions>;

    /**
     * Get blockchain block data
     * @param {string} blockId block ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainBlockRaw(requestParameters: GetBlockchainBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainBlock>>;

    /**
     * Get blockchain block data
     */
    getBlockchainBlock(requestParameters: GetBlockchainBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainBlock>;

    /**
     * Get transactions from block
     * @param {string} blockId block ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainBlockTransactionsRaw(requestParameters: GetBlockchainBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>>;

    /**
     * Get transactions from block
     */
    getBlockchainBlockTransactions(requestParameters: GetBlockchainBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions>;

    /**
     * Get blockchain config
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainConfigRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainConfig>>;

    /**
     * Get blockchain config
     */
    getBlockchainConfig(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainConfig>;

    /**
     * Get last known masterchain block
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainMasterchainHeadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainBlock>>;

    /**
     * Get last known masterchain block
     */
    getBlockchainMasterchainHead(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainBlock>;

    /**
     * Get low-level information about an account taken directly from the blockchain.
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainRawAccountRaw(requestParameters: GetBlockchainRawAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainRawAccount>>;

    /**
     * Get low-level information about an account taken directly from the blockchain.
     */
    getBlockchainRawAccount(requestParameters: GetBlockchainRawAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainRawAccount>;

    /**
     * Get transaction data
     * @param {string} transactionId transaction ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainTransactionRaw(requestParameters: GetBlockchainTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>>;

    /**
     * Get transaction data
     */
    getBlockchainTransaction(requestParameters: GetBlockchainTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction>;

    /**
     * Get transaction data by message hash
     * @param {string} msgId message ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainTransactionByMessageHashRaw(requestParameters: GetBlockchainTransactionByMessageHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>>;

    /**
     * Get transaction data by message hash
     */
    getBlockchainTransactionByMessageHash(requestParameters: GetBlockchainTransactionByMessageHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction>;

    /**
     * Get blockchain validators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    getBlockchainValidatorsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Validators>>;

    /**
     * Get blockchain validators
     */
    getBlockchainValidators(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Validators>;

    /**
     * Send message to blockchain
     * @param {SendBlockchainMessageRequest} sendBlockchainMessageRequest both a single boc and a batch of boc serialized in base64 are accepted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlockchainApiInterface
     */
    sendBlockchainMessageRaw(requestParameters: SendBlockchainMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Send message to blockchain
     */
    sendBlockchainMessage(requestParameters: SendBlockchainMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class BlockchainApi extends runtime.BaseAPI implements BlockchainApiInterface {

    /**
     * Blockchain account inspect
     */
    async blockchainAccountInspectRaw(requestParameters: BlockchainAccountInspectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainAccountInspect>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling blockchainAccountInspect.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/accounts/{account_id}/inspect`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockchainAccountInspectFromJSON(jsonValue));
    }

    /**
     * Blockchain account inspect
     */
    async blockchainAccountInspect(requestParameters: BlockchainAccountInspectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainAccountInspect> {
        const response = await this.blockchainAccountInspectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Execute get method for account
     */
    async execGetMethodForBlockchainAccountRaw(requestParameters: ExecGetMethodForBlockchainAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MethodExecutionResult>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling execGetMethodForBlockchainAccount.');
        }

        if (requestParameters.methodName === null || requestParameters.methodName === undefined) {
            throw new runtime.RequiredError('methodName','Required parameter requestParameters.methodName was null or undefined when calling execGetMethodForBlockchainAccount.');
        }

        const queryParameters: any = {};

        if (requestParameters.args) {
            queryParameters['args'] = requestParameters.args;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/accounts/{account_id}/methods/{method_name}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"method_name"}}`, encodeURIComponent(String(requestParameters.methodName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MethodExecutionResultFromJSON(jsonValue));
    }

    /**
     * Execute get method for account
     */
    async execGetMethodForBlockchainAccount(requestParameters: ExecGetMethodForBlockchainAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MethodExecutionResult> {
        const response = await this.execGetMethodForBlockchainAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get account transactions
     */
    async getBlockchainAccountTransactionsRaw(requestParameters: GetBlockchainAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getBlockchainAccountTransactions.');
        }

        const queryParameters: any = {};

        if (requestParameters.afterLt !== undefined) {
            queryParameters['after_lt'] = requestParameters.afterLt;
        }

        if (requestParameters.beforeLt !== undefined) {
            queryParameters['before_lt'] = requestParameters.beforeLt;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/accounts/{account_id}/transactions`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsFromJSON(jsonValue));
    }

    /**
     * Get account transactions
     */
    async getBlockchainAccountTransactions(requestParameters: GetBlockchainAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions> {
        const response = await this.getBlockchainAccountTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get blockchain block data
     */
    async getBlockchainBlockRaw(requestParameters: GetBlockchainBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainBlock>> {
        if (requestParameters.blockId === null || requestParameters.blockId === undefined) {
            throw new runtime.RequiredError('blockId','Required parameter requestParameters.blockId was null or undefined when calling getBlockchainBlock.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/blocks/{block_id}`.replace(`{${"block_id"}}`, encodeURIComponent(String(requestParameters.blockId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockchainBlockFromJSON(jsonValue));
    }

    /**
     * Get blockchain block data
     */
    async getBlockchainBlock(requestParameters: GetBlockchainBlockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainBlock> {
        const response = await this.getBlockchainBlockRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transactions from block
     */
    async getBlockchainBlockTransactionsRaw(requestParameters: GetBlockchainBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transactions>> {
        if (requestParameters.blockId === null || requestParameters.blockId === undefined) {
            throw new runtime.RequiredError('blockId','Required parameter requestParameters.blockId was null or undefined when calling getBlockchainBlockTransactions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/blocks/{block_id}/transactions`.replace(`{${"block_id"}}`, encodeURIComponent(String(requestParameters.blockId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionsFromJSON(jsonValue));
    }

    /**
     * Get transactions from block
     */
    async getBlockchainBlockTransactions(requestParameters: GetBlockchainBlockTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transactions> {
        const response = await this.getBlockchainBlockTransactionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get blockchain config
     */
    async getBlockchainConfigRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainConfig>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/config`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockchainConfigFromJSON(jsonValue));
    }

    /**
     * Get blockchain config
     */
    async getBlockchainConfig(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainConfig> {
        const response = await this.getBlockchainConfigRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get last known masterchain block
     */
    async getBlockchainMasterchainHeadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainBlock>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/masterchain-head`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockchainBlockFromJSON(jsonValue));
    }

    /**
     * Get last known masterchain block
     */
    async getBlockchainMasterchainHead(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainBlock> {
        const response = await this.getBlockchainMasterchainHeadRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get low-level information about an account taken directly from the blockchain.
     */
    async getBlockchainRawAccountRaw(requestParameters: GetBlockchainRawAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BlockchainRawAccount>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getBlockchainRawAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/accounts/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BlockchainRawAccountFromJSON(jsonValue));
    }

    /**
     * Get low-level information about an account taken directly from the blockchain.
     */
    async getBlockchainRawAccount(requestParameters: GetBlockchainRawAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BlockchainRawAccount> {
        const response = await this.getBlockchainRawAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction data
     */
    async getBlockchainTransactionRaw(requestParameters: GetBlockchainTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling getBlockchainTransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/transactions/{transaction_id}`.replace(`{${"transaction_id"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Get transaction data
     */
    async getBlockchainTransaction(requestParameters: GetBlockchainTransactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.getBlockchainTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction data by message hash
     */
    async getBlockchainTransactionByMessageHashRaw(requestParameters: GetBlockchainTransactionByMessageHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters.msgId === null || requestParameters.msgId === undefined) {
            throw new runtime.RequiredError('msgId','Required parameter requestParameters.msgId was null or undefined when calling getBlockchainTransactionByMessageHash.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/messages/{msg_id}/transaction`.replace(`{${"msg_id"}}`, encodeURIComponent(String(requestParameters.msgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     * Get transaction data by message hash
     */
    async getBlockchainTransactionByMessageHash(requestParameters: GetBlockchainTransactionByMessageHashRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.getBlockchainTransactionByMessageHashRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get blockchain validators
     */
    async getBlockchainValidatorsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Validators>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/blockchain/validators`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ValidatorsFromJSON(jsonValue));
    }

    /**
     * Get blockchain validators
     */
    async getBlockchainValidators(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Validators> {
        const response = await this.getBlockchainValidatorsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Send message to blockchain
     */
    async sendBlockchainMessageRaw(requestParameters: SendBlockchainMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.sendBlockchainMessageRequest === null || requestParameters.sendBlockchainMessageRequest === undefined) {
            throw new runtime.RequiredError('sendBlockchainMessageRequest','Required parameter requestParameters.sendBlockchainMessageRequest was null or undefined when calling sendBlockchainMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v2/blockchain/message`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendBlockchainMessageRequestToJSON(requestParameters.sendBlockchainMessageRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Send message to blockchain
     */
    async sendBlockchainMessage(requestParameters: SendBlockchainMessageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.sendBlockchainMessageRaw(requestParameters, initOverrides);
    }

}
