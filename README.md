# FinFlux - Financial Analysis Tool

FinFlux is a web application that helps users analyze their spending patterns and receive AI-powered advice for optimizing their finances.

![FinFlux Screenshot](https://via.placeholder.com/800x400?text=FinFlux+Screenshot)

## Features

- **Transaction Analysis**: Upload your transaction data in JSON format
- **Spending Breakdown**: View your spending categorized by type
- **AI-Powered Advice**: Receive personalized recommendations to optimize your spending
- **Simple Interface**: Easy-to-use UI for quick financial insights

## Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/papasmurrph/finflux-project.git
   cd finflux-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Paste your transaction data in JSON format into the text area. Each transaction should include:
   - `date`: The transaction date (YYYY-MM-DD)
   - `category`: The spending category
   - `amount`: The transaction amount

   Example:
   ```json
   [
     {"date": "2023-01-01", "category": "Groceries", "amount": 50.00},
     {"date": "2023-01-02", "category": "Entertainment", "amount": 20.00}
   ]
   ```

2. Click "Analyze" to process your data
3. View your spending breakdown and personalized advice

## Future Enhancements

- CSV file upload support
- Interactive charts and visualizations
- Budget setting and tracking
- Historical trend analysis
- Mobile app version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI capabilities powered by [OpenAI](https://openai.com/)