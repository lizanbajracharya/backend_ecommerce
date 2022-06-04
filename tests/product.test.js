// use the path of your model
import Product from "../models/productModel.js";
import mongoose from "mongoose";
// use the new name of the database
const url =
  "mongodb+srv://ecommerce:ecommerce@cluster0.1qjl1.mongodb.net/?retryWrites=true&w=majority";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

var productid = "";

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
      productid = pro_ret._id;
      expect(pro_ret.name).toEqual("Nokia");
    });
  });

  it("To get product by id", async () => {
    return Product.findById({ _id: productid }).then((pp) => {
      expect(pp.name).toEqual("Nokia");
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

  it("To test the update", async () => {
    return Product.findByIdAndUpdate(productid, {
      $set: { name: "ram" },
    }).then((pp) => {
      expect(pp.name).toEqual("Nokia");
    });
  });

  it("To get all product", async () => {
    return Product.find().then((pp) => {
      expect(pp.statusCode).toEqual(undefined);
    });
  });

  it("To get product by color", async () => {
    return Product.find({ color: "Red" }).then((pp) => {
      expect(pp.statusCode).toEqual(undefined);
    });
  });

  it("To get product by brand", async () => {
    return Product.find({ brand: "Red" }).then((pp) => {
      expect(pp.statusCode).toEqual(undefined);
    });
  });

  it("To get product by name", async () => {
    return Product.find({ name: "Red" }).then((pp) => {
      expect(pp.statusCode).toEqual(undefined);
    });
  });

  it("To get product by price", async () => {
    return Product.find({ price: 12 }).then((pp) => {
      expect(pp.statusCode).toEqual(undefined);
    });
  });

  // // // the code below is for delete testing
  //     it('to test the delete product is working or not', async () => {
  //         const status = await Product.deleteMany();
  //         expect(status.ok).toBe(1);
  // });
});
