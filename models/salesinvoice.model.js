const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  hsn: {
    type: String,
    require: true
  },
  qun: {
    type: String,
    require: true
  },
  selectedUnit: {
    type: String,
    require: true
  },
  unit: {
    type: Array,
    require: true
  },
  price: {
    type: String,
    require: true
  },
  discountPerAmount: {
    type: String,
    require: true
  },
  discountPerPercentage: {
    type: String,
    require: true
  },
  tax: {
    type: String,
    require: true
  },
  taxAmount: {
    type: String,
    require: true
  },
  amount: {
    type: String,
    require: true
  },
}, { _id: false });

const additionalChargeSchema = new mongoose.Schema({
  particular: {
    type: String,
    require: true
  },
  amount: {
    type: String,
    require: true
  }
}, { _id: false });

const salesInvoiceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true
  },
  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'party',
    required: true
  },
  salesInvoiceNumber: {
    type: String,
    required: true
  },
  invoiceDate: {
    type: Date,
    required: true
  },
  DueDate: {
    type: Date,
    required: true
  },
  items: {
    type: [itemSchema],
    required: true
  },
  discountType: {
    type: String,
  },
  discountAmount: {
    type: String,
  },
  discountPercentage: {
    type: String,
  },
  additionalCharge: {
    type: [additionalChargeSchema],
  },
  paymentStatus: {
    type: String,
    enumm: ['0', '1'], // 0=notPaid | 1=paid;
    default: '0'
  },
  dueAmount:{
    type: String
  },
  paymentAccount: {
    type: String
  },
  note: {
    type: String,
  },
  terms: {
    type: String,
  },
  isDel: {
    type: Boolean,
    default: false
  },
  isTrash: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("salesinvoice", salesInvoiceSchema);
