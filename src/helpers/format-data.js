const formatData = (data) =>{
    const new_data = data.split(",").map((addrs)=>{
        return addrs.replace(/\n|\r/g,'').trim()
    });

    return new_data;
}
export default formatData;