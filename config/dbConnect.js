const mongoose = require('mongoose');
const dbConnect = async ()=>{
    
try {
    const connection = await mongoose.connect(process.env.MONGOD_URL);
    console.log('Database connected successfully');   
    return connection 
}
 catch (error) {
    console.log(error);    
}
}
module.exports = dbConnect;
