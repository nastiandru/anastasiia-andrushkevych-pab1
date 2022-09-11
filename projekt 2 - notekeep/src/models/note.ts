import Tag from "./Tag";

class Note {

    tags?: Tag[];
    id?: number;
    createDate?: string;
    title: string;
    content: string;

    constructor(title: string, content: string, id: number)
    {
        this.id = id;
        this.title = title;
        this.content = content;
    }

} 

export default Note;