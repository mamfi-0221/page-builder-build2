/*
*  This schema object is used to create a table.
*  This object can be manipulated via the `Page templates` document on your studio.
*/
import { FiColumns } from "react-icons/fi"

export default {
    name: 'addTable',
    title: 'Add Table',
    icon: FiColumns,
    type: 'document',
    fields: [
        {
            name: 'tableName',
            title: 'Table Name',
            description: 'Add a name to label this table.',
            type: 'string'
        },
        {
            name: 'addTableContent',
            title: 'Add Table Content',
            type: 'table' //table type
        }
    ],
    preview: {
        select: {
            title: 'tableName'
        },
        prepare({title}){
            return { title: title ? `${title}` : 'No table name added'}
        }
    }
}