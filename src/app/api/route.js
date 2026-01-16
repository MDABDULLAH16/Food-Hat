export const feedback = [{
    id: 1,
    message:'wow! darun cilo'
}, {
    id: 2,
    message:'testy khabar'
}]
export async function GET(request) {
    return Response.json({status:200,
        message:'welcome next js api',
    })
}
