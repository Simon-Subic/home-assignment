# FSC Moodlet System

This project implements the FSC (Fuelling, Servicing and Cleaning) Moodlet System.

## Deployment
- **Video Demo:** [Watch here](https://screenrec.com/share/yucsS7FQdR)
- **Live Version:** [Check it out on Vercel](https://home-assignment-navy.vercel.app/)

## Features
- Interactive moodlet system for Fuelling, Servicing and Cleaning.
- Supports different states: `Required`, `Current`, `Completed` and `Not Required`.
- Multiple display variants (Letter and Word representations).
- Style variants with different interaction states.

## Setup & Installation
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Simon-Subic/home-assignment.git
   cd home-assignment
   ```

2. **Install Dependencies:**
   ```sh
   yarn install
   ```

3. **Run the project:**
   ```sh
   yarn start
   ```

4. **Build for the production:**
   ```sh
   yarn build
   ```

## Usage Instructions
- Right-click a moodlet to toggle between `Required` and `Not Required`.
- Left-click a `Required` moodlet to move it to `Current`.
- Left-click again to set it to `Completed`.
- Once `Completed`, clicking it again will revert to `Current`.
- The moodlets cycle only between `Current` and `Completed` after the initial transitions.
