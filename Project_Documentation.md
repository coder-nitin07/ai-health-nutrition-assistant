# Project Title: AI-Powered Health & Nutrition Assistant

# Objective:
    To build a full-stack AI-integrated platform that helps users log their daily food intake, get personalized recipe suggestions, analyze nutrition levels, and receive AI-powered fitness and dietary guidance. The goal is to promote healthier lifestyle choices using the power of Generative AI.

#  Core Features:
    ## Authentication: 
        - POST /register – Register a new user (name, email, password)
        - POST /login – Login existing user (returns JWT)
        - POST /logout – Logout and blacklist token

    ##  Food & Beverage Intake Logging:
        - POST /log-meal – Log a meal/snack with:
            - timeOfDay: morning / afternoon / evening / night
            - items: what was eaten or drunk (free text or dropdown)
            - quantity: optional

        - GET /logs – View all logged entries (filter by date)

    ## AI-Powered Recipe Creator
        - POST /ai/recipe – Generate a recipe based on:
            - Ingredients user has
            - Preferences (veg/non-veg/spicy/quick meal/etc.)

        - Output: Title + HTML/CSS formatted recipe + optional image (via AI)

    ##  AI Health & Nutrition Analyzer
        - POST /ai/analyze-health – Send past 24h logs to AI
        - Output:
            - Nutrition summary (protein, sugar, caffeine, etc.)
            - AI Feedback (e.g., “Too much caffeine”, “Add more fiber”)
            - Suggested improvements
            - Recommended time-wise meals

    ## AI Exercise & Wellness Suggestions
        - Based on diet & logged lifestyle, AI suggests:
            - 3–5 home-friendly exercises
            - Hydration tips
            - Light habits (walk, stretch, sleep tips)

    ## Validation
        - Joi or Zod for backend request validation
        - Frontend validations via form libraries (or custom)

    ##  Role-Based Access (Optional)
        - User only: meals, recipes, analysis
        - Admin (optional): manage flagged users or future expansion

    


    ## Frontend Flow (Newly Added Concept)
        - After login → /home:
            - Welcome message
            - Some details about the project on the Home Page like ABout the AI details
            - Button: "Start Health Check"


        - On clicking → /analyzer
            - AI starts asking questions:
                - What you ate (morning, afternoon, etc.)
                - Water/Caffeine/Alcohol/Sleep/Activity level
    
    
        - Once completed → AI generates full report


## Tech Stack
    # Backend:
        - Node.js + Express
        - MongoDB (Mongoose)
        - JWT Auth
        - adm-zip for any download options (if added)
        - Gemini API for AI
        - dotenv for configs

    # Frontend:
        - React.js
        - TailwindCSS
        - React Query / Axios for API
        - Framer Motion (for animated the UI and some animation for make UI attractive)

##  AI Integration
    # Gemini API:
        - Recipe creation
        - Summary of nutrition
        - Suggesting exercises


# Final Checklist: 
    - Authentication (register/login/logout)
    - Food logging API + frontend form
    - AI Recipe Generator working end-to-end
    - AI Nutrition Analyzer (based on meal logs)
    - AI Exercise Suggestions (based on data)
    - Clean and responsive UI
    - Loading & error states
    - Token handling (localStorage, authMiddleware)
    - Deploy backend (Render/Railway)
    - Deploy frontend (Vercel)


| Time         | Input Type       | Example                              |
| ------------ | ---------------- | ------------------------------------ |
| Morning      | Text             | "2 boiled eggs, 1 cup tea"           |
| Afternoon    | Text             | "Rice, dal, salad"                   |
| Evening      | Text             | "Chapati, sabzi, juice"              |
| Snacks       | Text             | "Chips, 1 Coke"                      |
| Water Intake | Dropdown / Radio | Less than 1L, 1–2L, 2–3L, 3–4L, 4+ L |
| Coffee/Tea   | Number           | "2 cups tea, 1 coffee"               |
| Alcohol      | Number / Text    | "1 beer", "None"                     |
| Sleep Hours  | Number           | 6.5 hours                            |
| Activity     | Dropdown         | Sedentary / Moderate / Active        |





| Section               | Example Output                                                                      |
| --------------------- | ----------------------------------------------------------------------------------- |
| **Nutrition Summary** | "You consumed approx 1900 calories. Too much sugar from Coke and chips."            |
| **Water/Caffeine**    | "You drank 1L water — drink more. 3 cups of tea is okay but avoid excess caffeine." |
| **Sleep + Activity**  | "6.5 hours of sleep is slightly low. Try to reach 7–8 hours."                       |
| **Recommendations**   | "Avoid soda. Include fruits. Try a light dinner. Exercise: 20-min walk."            |
| **Suggested Diet**    | "Tomorrow: oats + banana, dal-chawal, grilled veggies, lemon water."                |