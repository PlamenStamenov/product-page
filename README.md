# Responsive Product Page

This project is a React-based web application that provides an online shopping experience. It's designed with a modern and user-friendly interface and uses the latest best practices in web development.



## Features

The application includes the following features:

1. **Product Display** - The application fetches product data, including categories, from an API and displays them on the page. The products are divided into categories, and the user can filter products by category.

2. **Filtering and Sorting** - Users can filter products based on their categories. The filtering action updates not only the displayed products but also the total product count per category. The active category is highlighted for a better user experience. Products can also be sorted by price, both in ascending and descending order.

3. **Loading More Products** - The product display supports loading more products via a Load More button. When the user clicks the button, additional products are fetched and displayed in the product list.

4. **Responsive Design** - The web application is designed to be responsive. It offers an optimal viewing experience across a wide range of devices, from desktop computer monitors to mobile phones.

5. **Back to Top Button** - A convenient 'Back to Top' button allows users to quickly navigate back to the top of the page after scrolling.

6. **Category Navigation** - Users can easily navigate between different categories of products using the category navigation bar.

7. **Product Details** - Users can view detailed information about a product. The product details are displayed below the product image in the product tile. The product details include name, description, rating, price, discounted price, and Add to Cart button. Fetched product data is used to populate the product details.

8. **Add to Cart** - When clicking the Add to Cart button it triggers an alet that the broduct is added to the shopping cart.



## How to Run the Application

1. Clone the repository into your local machine.

2. Navigate to the project directory.

3. Install the dependencies using the following command:

    ```
    npm install
    ```
or
    ```
    yarn install
    ```

4. Run the application using the following command:

    ```
    npm start
    ```
or
    ```
    yarn start
    ```
The application will be available at http://localhost:3000.



## Technologies Used

- React.js
- Scss (Sass)
- HTML5
- JavaScript
- Git



## Future Improvements

- Implement user authentication
- Allow users to add products to a shopping cart
- Integrate with a payment gateway for checkout
- Add a search bar to search for products
- Add a product image carousel
- Add product details page



## Credits

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)



## License

This project is not licensed.