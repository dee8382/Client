const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const user_schema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    products_posted: {
      type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    favourites: {
      type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    interested: {
      type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    Mobile_no : {
      type: String,
      default : null
    }
  },
  { timestamps: true }
);

const products_schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
        type: String
    },
    posted_by :{
       type: Schema.Types.ObjectId,
       ref: 'User' ,
    },
    images :{
        type: [{}]
    },
    is_verified:{
        type : Boolean,
        default : false
    },
    likes : {
        type :  [{ type: Schema.Types.ObjectId, ref: 'User' }],
        default:[]
   },
   interested_users : {
    type :  [{ type: Schema.Types.ObjectId, ref: 'User' }],
    default:[]
   },
   blue_heart : {
       type : Boolean,
       default : false
   },
   show_interested :{
       type : Boolean,
       default : false
   }

},{timestamps: true});

const thread_schema = new mongoose.Schema({
  posted_by: {
    type : Object,
    default: null
  },
  users_mnit_id:{
    type : String,
    default: ""
  },
  title :{
    type : String,
    default: ""
  },
  description:{
    type : String,
    default: "" 
  },
  discussions : {
   type : [{type : Object, content : {
     type : String,
     default : ""
   }}]
  }
},{timestamps: true})

const Product = mongoose.model("Product", products_schema);
const User = mongoose.model("User", user_schema);
const Thread = mongoose.model("Thread", thread_schema );
module.exports = { User, Product, Thread };
