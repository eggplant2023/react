const Users = () => {
    
    useEffect(() => {
        PostingService.getChatroom().then((res)=> {
                console.log(res.data)
            }
        )
           
   },[]);

    return (
    <div>
        <h1> Users </h1>
    </div>
);}

export default Users;