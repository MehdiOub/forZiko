import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class MessageTypeDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;

}
