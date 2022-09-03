export const getPosts = async () =>

{
   return [
        {
            id:'1',
            image:'./images/caba.jpg',
            title: 'new post',
            body:'post uno',
            parentId:null,
            username:'Juan',
            userId:'1',
            rating:'4',
            reviewCount:'50'
        },
        {
            id:'2',
            image:'./images/caba.jpg',
            title: 'new post',
            body:'post dos',
            parentId:null,
            username:'Carlos',
            userId:'1',
            rating:'5',
            reviewCount:'60'
        }
    ]
}

export const createPost = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substring(2,9),
        body: text,
        parentId,
        userId:'1',
        username:'Juan',
        createdAt: new Date().toISOString(),
    }
}