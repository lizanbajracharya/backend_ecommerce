// use the path of your model
import Product from "../models/productModel.js";
import mongoose from "mongoose";
// use the new name of the database
const url = "mongodb://localhost:27017/tst";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Product Add", () => {
  // the code below is for insert testing
  it("Add product testing", () => {
    const product = {
      name: "Nokia",
      price: "21",
      countInStock: "1",
      description: "asd",
      category: "ad",
      color: "test",
      brand: "test",
      image: "asd.jpg",
      numReviews: "0",
      user: "620a2f821b86afdd7100e60e",
    };

    return Product.create(product).then((pro_ret) => {
      expect(pro_ret.name).toEqual("Nokia");
    });
  });

  // it("to test the update review", async () => {
  //   return Product.findByIdAndUpdate(
  //     { _id: Object("620a5392b979f19e3871cc3e") }, // Add The product id
  //     {
  //       $set: {
  //         reviews: [
  //           {
  //             name: "test",
  //             comment: "test",
  //             rating: "12",
  //             user: "620a2f821b86afdd7100e60e", //add the available user id
  //           },
  //         ],
  //       },
  //     }
  //   ).then((pp) => {
  //     expect(pp.reviews.length > 0).toEqual(true);
  //   });
  // });

  it("to test the update", async () => {
    return Product.findByIdAndUpdate("620a5392b979f19e3871cc3e", {
      $set: { name: "ram" },
    }).then((pp) => {
      expect(pp.name).toEqual("ram");
    });
  });

  it("to get all product", async () => {
    return Product.find().then((pp) => {
      expect(pp.statusCode).toEqual(undefined);
    });
  });

  // // // the code below is for delete testing
  //     it('to test the delete product is working or not', async () => {
  //         const status = await Product.deleteMany();
  //         expect(status.ok).toBe(1);
  // });
});
