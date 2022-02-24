exports.Query = {
    /* Returning a Scalar Type - String, Int, Float, Boolean */
    hello: (parent, args, context) => "World",
    /* Returning an Object */
    products: (parent, {filter}, {data}) => {
        let filteredProducts = data.products;
        if (filter) {
            const {onSale, avgRating} = filter;
            if (onSale) {
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale;
                });
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    data.reviews.forEach((review) => {
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews;
                    return (avgProductRating >= avgRating);
                });
            }
        }
        return filteredProducts;
    },
    product: (parent, {id}, {data}) => {
        return data.products.find((product) => {
            return (product.id === id);
        });
    },
    categories: (parent, args, {data}) => {
        return data.categories;
    },
    category: (parent, {id}, {data}) => {
        return data.categories.find((category) => {
            return (category.id === id);
        });
    }
};
