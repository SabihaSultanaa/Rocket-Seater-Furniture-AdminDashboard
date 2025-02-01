export default {
    title: 'Blog',
    name: 'blog',
    type: 'object',
    fields: [
        {
            title: 'Blog Cards',
            name: 'blogCards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Blog Image',
                            name: 'blogImg',
                            type: 'image',
                        },
                        {
                            title: 'Blog Heading',
                            name: 'blogHeading',
                            type: 'string',
                        },
                        {
                            title: 'Blog Time',
                            name: 'blogTime',
                            type: 'string',
                        },
                        {
                            title: 'Blog Date',
                            name: 'blogDate',
                            type: 'string',
                        },
                        {
                            title: 'Blog Author',
                            name: 'blogAuthor',
                            type: 'string',
                        },
                    
                        {
                            title: 'Blog Material',
                            name: 'blogMaterial',
                            type: 'string',
                        },
                        {
                            title: 'Blog Description',
                            name: 'blogDescription',
                            type: 'string',
                        },
                      
                    ]
                }
            ]
        },
    ]
}