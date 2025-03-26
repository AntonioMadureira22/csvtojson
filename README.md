# CSV to JSON Converter

This is a simple Node.js script that converts a CSV file into a JSON file using the `csvtojson` package.

## Features
- Converts CSV data into JSON format
- Saves the JSON output to a file
- Handles errors gracefully

## Requirements
- Node.js installed

## Installation
1. Clone this repository or download the script.
2. Run the following command to install the required package:
   ```sh
   npm install csvtojson
   ```

## Usage
1. Place your CSV file in the same directory as the script.
2. Update the `csvFilePath` variable in the script to match your CSV file name.
3. Run the script using:
   ```sh
   node script.js
   ```
4. The output JSON file will be created in the same directory.

## Example
If `data.csv` contains:
```
name,age,city
John,30,New York
Jane,25,Los Angeles
```
The output `output.json` will be:
```json
[
  {
    "name": "John",
    "age": "30",
    "city": "New York"
  },
  {
    "name": "Jane",
    "age": "25",
    "city": "Los Angeles"
  }
]
```

## License
This project is open-source and available for modification and distribution.

