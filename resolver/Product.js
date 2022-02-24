exports.Product = {
    category: ({categoryId}, args, {data}) => {
        return data.categories.find((category) => {
            return (category.id === categoryId);
        });
    },
    reviews: ({id}, args, {data}) => {
        return data.reviews.filter((review) => {
            return (review.productId === id);
        });
    }
};
