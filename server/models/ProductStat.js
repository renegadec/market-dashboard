import moongose from "mongoose";

const ProductStatSchema = new moongose.Schema({
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number,
        }
    ],
    dailyData: {
        date: String,
        totalSales: Number,
        totalUnits: Number
    }
},
{ timestamps: true }
);

const ProductStat = moongose.model("ProductStat", ProductStatSchema);

export default ProductStat;
