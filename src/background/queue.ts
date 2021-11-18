import 'dotenv/config'
import 'express-async-errors'
import Queue from "./libs/Queue";
Queue.process()
console.log('Queue is Running')