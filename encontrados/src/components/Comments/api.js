export const getComments = async () =>
{
   return [
        {
            id:'1',
            body:'Excelente atención. Definitivamente super recomendado',
            username:'Juan',
            userId:'1',
            parentId:null,
            createdAt:"2021-08-16T23:00:33.010+02:00",
        },
        {
            id:'2',
            body:'Experiencia 5 estrellas tanto por la calidad del servicio. ',
            username:'Carlos',
            userId:'2',
            parentId:null,
            createdAt:"2021-08-16T23:00:33.010+02:00",
        },
        {
            id:'3',
            body:'¡Muchas gracias! Nos alegramos que haya disfrutado de su estadía y le esperamos de regreso muy pronto.',
            username:'Carlos',
            userId:'2',
            parentId:'1',
            createdAt:"2021-08-16T23:00:33.010+02:00",
        }
    ]
}

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substring(2,9),
        body: text,
        parentId,
        userId:'1',
        username:'Juan',
        createdAt: new Date().toISOString(),
    }
}

export const updateComment = async (text) =>{
    return { text }
}

export const deleteComment = async () => {
    return {}
}