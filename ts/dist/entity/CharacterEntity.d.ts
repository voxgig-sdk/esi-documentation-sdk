import { EsiDocumentationEntityBase } from '../EsiDocumentationEntityBase';
import type { EsiDocumentationSDK } from '../EsiDocumentationSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch } from '../EsiDocumentationTypes';
declare class CharacterEntity extends EsiDocumentationEntityBase<Character> {
    constructor(client: EsiDocumentationSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
}
export { CharacterEntity };
