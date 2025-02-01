

export default{
    title: 'cards section',
    name: 'cardsSection',
    type: 'object',

    fields: [
        {
            title: 'Card',
            name: 'card',
            type: 'array',
            of:[
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Card Image',
                            name: 'cardImg',
                            type: 'image',
                        },
                        {
                            title: 'Card Heading',
                            name: 'cardHeading',
                            type: 'string',
                        },
                      
                      
                        {
                            title: 'Card Price',
                            name: 'cardPrice',
                            type: 'number',
                        },]
                }
            ]
        }
    ]
}