/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewTransactionEvent
 */
export interface NewTransactionEvent {
    /**
     * 
     * @type {string}
     * @memberof NewTransactionEvent
     */
    account: string;
    /**
     * 
     * @type {number}
     * @memberof NewTransactionEvent
     */
    eventId: number;
    /**
     * 
     * @type {string}
     * @memberof NewTransactionEvent
     */
    eventName: NewTransactionEventEventNameEnum;
    /**
     * 
     * @type {string}
     * @memberof NewTransactionEvent
     */
    hashTransaction: string;
}


/**
 * @export
 */
export const NewTransactionEventEventNameEnum = {
    NewTransaction: 'new_transaction'
} as const;
export type NewTransactionEventEventNameEnum = typeof NewTransactionEventEventNameEnum[keyof typeof NewTransactionEventEventNameEnum];


/**
 * Check if a given object implements the NewTransactionEvent interface.
 */
export function instanceOfNewTransactionEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "account" in value;
    isInstance = isInstance && "eventId" in value;
    isInstance = isInstance && "eventName" in value;
    isInstance = isInstance && "hashTransaction" in value;

    return isInstance;
}

export function NewTransactionEventFromJSON(json: any): NewTransactionEvent {
    return NewTransactionEventFromJSONTyped(json, false);
}

export function NewTransactionEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewTransactionEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': json['account'],
        'eventId': json['event_id'],
        'eventName': json['event_name'],
        'hashTransaction': json['hash_transaction'],
    };
}

export function NewTransactionEventToJSON(value?: NewTransactionEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': value.account,
        'event_id': value.eventId,
        'event_name': value.eventName,
        'hash_transaction': value.hashTransaction,
    };
}

