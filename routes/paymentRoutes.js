import express from "express";
import expressAsyncHandler from "express-async-handler";
import Payment from "../models/paymentModel.js";
import { isAuth } from "../utils.js";


const paymentRoutes = express.Router();

paymentRoutes.post(
    "/save",
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const newPayment = new Payment({
        amountPaid: req.body.amountPaid,
        purchasedUnit: req.body.purchasedUnit,
        price: req?.body?.price,
        referenceId: req?.body?.referenceId,
        property: req?.body?.propertyId,
        user: req.body.userId,
      });
  
   
      try {
        const payment = await newPayment.save();
        res.status(200).send({status:true, message: "Payment was made and logged successfully", data: payment});
      }catch(error){
        res.status(301).send({status:false, message: "Logging payment failed", data: error});

      }
  
      
    })
  );

  paymentRoutes.get(
    '/mine',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const payments = await Payment.find({ user: req.user._id }).populate('property', 'name');
      res.send({status: true, message:"payments fetch sucessfully", data: payments});
    })
  );

  export default paymentRoutes;