export const userSchema = {
    name: 'user',
    title: 'User',  
    type: 'document',
    fields: [
        {
            name: 'userId',
            title: 'User ID',
            type: 'string',
        },
        {
            name: 'uname',
            title: ' Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'image',
            title: 'User Image',
            type: 'url',
        },
        {
            name: 'password',
            title: 'Password',
            type: 'string',
        },
    ],
};