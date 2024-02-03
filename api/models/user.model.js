import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://th.bing.com/th/id/R.afe61407b42d58c9078f21806d09d05f?rik=SjYs4Rq6LcesGg&riu=http%3a%2f%2fplanningwithkids.com%2fwp-content%2f2012%2f12%2fteaching-kids-their-address_main.jpg&ehk=8FjqlQ90%2b3vBOuX0Htl%2b6azmvvB4jtVv%2fMHM0i8bdCQ%3d&risl=&pid=ImgRaw&r=0"
            },
},{timestamps:true});


const User=mongoose.model('User',userSchema);
export default User;