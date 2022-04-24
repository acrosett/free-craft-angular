import { Link } from './Link';


export class ItemData {

    id: string;
    content: string;
    title: string;
    summary: string;
    links: Link[];
    weight?: number;

}