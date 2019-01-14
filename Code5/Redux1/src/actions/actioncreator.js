export const actionCreator=(name, first, second)=>{
    return {
        type:name,payload:{first:first,second:second}
    }
}