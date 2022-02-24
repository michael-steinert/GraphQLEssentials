exports.Category = {
    products: ({id: categoryId}, {filter}, {data}) => {
        let filteredCategoryProducts = data.products.filter((product) => {
                return (product.categoryId === categoryId);
            }
        );
        if (filter) {
            if (filter.onSale === true) {
                filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
                        return product.onSale;
                    }
                );
            }
        }
        return filteredCategoryProducts;
    }
};
