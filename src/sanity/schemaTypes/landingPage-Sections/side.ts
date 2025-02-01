export default {
    title: 'Side',
    name: 'side',
    type: 'object',
    fields: [
        {
            title: 'Side Cards',
            name: 'sideCards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Side Image',
                            name: 'sideImg',
                            type: 'image',
                        },
                        {
                            title: 'Side Heading',
                            name: 'sideHeading',
                            type: 'string',
                        }
                    ]
                }
            ]
        },
        
       
    ]
}