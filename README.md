# ProdMate: AI-Powered Product Descriptions at Your Fingertips

Introducing ProdMate, a powerful web application that uses OpenAI's advanced language model, ChatGPT, to generate unique, high-quality product descriptions, categories, and prices for well-known products. This app also fetches product images from Amazon, making it a one-stop solution for e-commerce businesses.

With ProdMate, you can save time and resources spent on manual product description writing, and instead, get descriptive and compelling product information at the click of a button.

## Key Features

- Generates unique product descriptions using ChatGPT: Say goodbye to generic product descriptions that do not stand out. With Product Description Generator, you get unique and engaging descriptions that will capture your customers' attention and drive sales.
- Determines the product category: The app accurately determines the category of the product, ensuring that your products are properly categorized and easily searchable on your e-commerce platform.
- Generates a price for the product: With Product Description Generator, you can get an estimated price for the product, eliminating the need for manual price research and saving you time and effort.
- Fetches product images from Amazon: The app fetches product images directly from Amazon, making it easy for you to showcase your products in the best light possible.

## Technologies Used

- HTML
- CSS
- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [OpenAI's ChatGPT](chat.openai.com/)
- [ChatGPT Api](https://github.com/transitive-bullshit/chatgpt-api) - Thanks to [@Travis Fischer](https://github.com/transitive-bullshit)
- [Puppeteer](https://pptr.dev/)

## Getting Started

You must have [Node.js](https://nodejs.org/) >= 18.

Here's how you can set up and start using ProdMate:

1. Clone the repository: Use the following command to clone the repository to your local machine:

```
git clone https://github.com/AbuBakar-here/prodmate.git
```

2. Install dependencies: Navigate to the project directory and run the following command to install the necessary dependencies:

```
npm install
```

3. Obtain ChatGPT credentials: To generate unique description, its category and approx. price, you will need to obtain ChatGPT credentials.
4. Configure the app: Replace the placeholder values in `config/vars.env` with your ChatGPT credentials.
5. Start the development server: Finally, run the following command to start the development server and start using ProdMate:

```
npm start
```

## Contributing

If you would like to contribute to the development of ProdMate, feel free to submit a pull request. Your contributions are greatly appreciated!

## License

ProdMate is licensed under the MIT License. See the [LICENSE](https://github.com/AbuBakar-here/prodmate/blob/main/LICENSE) file for details.