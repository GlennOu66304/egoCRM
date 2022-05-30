import express from "express";

const router = express.Router();

// data model import
// const BucketListItem = require("../../models/BucketListItem");
import GoodsController from "./controller.js"; //need to add extension js, other wise will cause the error

// get:find()
router.get("/", GoodsController.goodsList);

// // // build:save()
// router.post("/", BucketListItemController.buildPost);

// // // update:findByIdAndUpdate()
// router.put("/:id", BucketListItemController.updatePost);

// // // delete the post:findByIdAndDelete()
// router.delete("/:id", BucketListItemController.deletePost);

export default router;
