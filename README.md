This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## The Product

The product is basically a dashboard where you can see the most important insights about how our products are doing.

1. Total products

    Here you can see how many products we have in our catalog. It’s important to keep track, because it helps us understand the size of what we handle, compare with other moments, and get context. It sounds simple, but it’s really useful.

2. Average price

    This data tells us, more or less, where we are positioned in the market. It makes us think:
    - Are we selling expensive products, or are we in a more general market?
    - When doing discounts, should we be aggressive or more moderated?
    - Are our categories similar in prices, or do we have some that are totally different?

    With these questions, we can compare categories or think about a pricing strategy, which is super important.

3. Average rating

    This shows us the quality. We need to know how clients see our products and our service. It helps to decide if the catalog is strong, if there are problems with quality, and in general to decide better in some categories or products.

4. Top rated products

    This helps us identify what we are doing well. It's important to know our strengths in the market because eventually, we will want to scale those successful products to increase our revenue. It is also useful to set a quality standard for new products that we want to sell as well.
    This is a natural area to decide where to invest in:
    - More visibility
    - Marketing campaigns
    - Prioritizing stock

5. Unavailable products

    This shows us which products are currently not available. If these products usually have good sales, this is an urgent problem to solve. It allows us to quickly make decisions, such as:
    - Should we restock?
    - Should we stop selling this product?
    - Are there recurring stock issues with this product or maybe with an entire category?

6. Chart about products categories

    The category chart helps to quickly understand how the product catalog is organized.

    The Y-axis shows the number of products in each category.
    This makes it easy to see which categories are large, which ones are small, and where there might be opportunities to add or improve products.

    When the user hovers over a bar, the chart shows the average price for that category.
    I chose to show this in the hover so the chart stays clean, but still gives useful information for people who want more detail.

    This combination lets stakeholders see:
    - Catalog size by category
    - How each category is priced on average
    - The relationship between variety and price

7. All Products section

    Here you can search for all products by name or category. Clicking on a product takes you to its detail view, where you can see the most relevant data.



## Current limitations

The dashboard does not include any sales data.
Sales information is very important to understand our real strengths and weaknesses.

- With sales data, we could unlock insights such as:

- Which products sell the most (top performers)

- Which categories generate the highest revenue

- Products with low sales that may need improvements or promotions

- Trends over time (seasonality or demand changes)

- How pricing affects sales performance

Adding sales data in the future would make the dashboard much more useful for decision-making.

## What would i improve with more time

1. Add sales data

    Sales information would unlock much better insights, such as best-selling products, revenue by category, and low-performance items. This would make the dashboard more useful for business decisions.

2. Better search and filtering

    Current is not bad, but i would definitely add full search, price/rating filters, and pagination to make the product list easier to explore.

3. Improved UI

    With more time I would polish the design, improve spacing, use consistent components, and make the dashboard look more professional.

4. Testing + CI/CD

5. Advanced insights

    In the future, I would include more metrics like price distribution, low-stock alerts, and category comparisons.
