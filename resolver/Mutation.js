const {v4: uuid} = require("uuid");

exports.Mutation = {
    addCategory: (parent, {input}, {data}) => {
        const {name} = input;
        const newCategory = {
            id: uuid(),
            name
        };
        data.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {data}) => {
        const {name, image, price, onSale, quantity, categoryId} = input;
        const newProduct = {
            id: uuid(),
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId
        };
        data.products.push(newProduct);
        return newProduct;
    },
    addReview: (parent, {input}, {data}) => {
        const {date, title, comment, rating, productId} = input;
        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        };
        data.reviews.push(newReview);
        return newReview;
    },
    deleteCategory: (parent, {id}, {data}) => {
        data.categories = data.categories.filter((category) => category.id !== id);
        data.products = data.products.map((product) => {
            if (product.categoryId === id) {
                return {
                    ...product,
                    categoryId: null
                };
            } else {
                return product;
            }
        });
        return true;
    },
    deleteProduct: (parent, {id}, {data}) => {
        data.products = data.products.filter((product) => {
            return (product.id !== id);
        });
        data.reviews = data.reviews.filter((review) => {
            return (review.productId !== id);
        });
        return true;
    },
    deleteReview: (parent, {id}, {data}) => {
        data.reviews = data.reviews.filter((review) => {
            return (review.id !== id);
        });
        return true;
    },
    updateCategory: (parent, {id, input}, {data}) => {
        const index = data.categories.findIndex((category) => {
            return (category.id === id);
        });
        if (index === -1) {
            return null;
        }
        data.categories[index] = {
            ...data.categories[index],
            ...input
        };
        return data.categories[index];
    },
    updateProduct: (parent, {id, input}, {data}) => {
        const index = data.products.findIndex((product) => {
            return (product.id === id);
        });
        if (index === -1) {
            return null;
        }
        data.products[index] = {
            ...data.products[index],
            ...input,
        };
        return data.products[index];
    },
    updateReview: (parent, {id, input}, {data}) => {
        const index = data.reviews.findIndex((review) => {
            return (review.id === id);
        });
        data.reviews[index] = {
            ...data.reviews[index],
            ...input
        };
        return data.reviews[index];
    },
};
