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

    


    ## Frontend Flow (Updated Concept)
        - After login → /home:
            - Welcome message
            - Some details about the project and the AI's role
            - Button: "Start Health Check"

        - On clicking → /analyzer:
            - A step-by-step form-based UI appears
                - Step 1: Select times of day (e.g., Morning, Afternoon, Night)
                - Step 2: For each selected time, enter what you ate
                - Step 3: Select your Water Intake (e.g., <1L, 1–2L, etc.)
                - Step 4: Select your Caffeine intake (None, 1 cup, etc.)
                - Step 5: Alcohol consumption (Yes/No)
                - Step 6: Sleep hours (input number)
                - Step 7: Activity Level (Sedentary, Moderate, Active)

            - After all steps are filled → Button: "Get Today's Report"
                - Sends data to backend AI endpoint
                - AI returns health summary + suggestions

        - Display the AI report to the user in a clean readable format


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



| Page              | Route       | Login Required? | Notes                                        |
| ----------------- | ----------- | --------------- | -------------------------------------------- |
| **Home Page**     | `/`         | ✅ Yes           | Show user streak, "Get Started" button, etc. |
| **Generate Page** | `/generate` | ✅ Yes           | Ask questions only after login               |
| **Summary Page**  | `/summary`  | ✅ Yes           | Show AI output for the logged-in user        |
| **Login Page**    | `/login`    | ❌ No            | Open to all                                  |
| **Signup Page**   | `/signup`   | ❌ No            | Open to all                                  |
| **404 Page**      | `*`         | ❌ No            | Open to all                                  |




|--------------------------------------------------|
|                    Navbar                        |
|     Logo          |    "About"  "Docs"  [Login]  |
|--------------------------------------------------|

|                                                  |
|     💡 Big Heading: "Generate AI Web Pages"      |
|     📄 Small Subheading: "Answer a few Qs, done!"|
|                                                  |
|     🔥 Your Streak: 4-day streak! (👤 John)        | ← if logged in
|                                                  |
|     [ Get Started ] ← CTA button                 |
|                                                  |
|     🔍 Preview Screenshot / Sample Output        |
|                                                  |
|     Footer: GitHub | Privacy | Contact           |
|--------------------------------------------------|









| Element               | Recommended Color           | Notes                                                          |
| --------------------- | --------------------------- | -------------------------------------------------------------- |
| **Background**        | `#0F0F0F` or `#121212`      | Deep dark gray, not pure black (for less strain & smoother UI) |
| **Primary Text**      | `#F0F0F0` or `#FFFFFF`      | Light gray or white for readability                            |
| **Secondary Text**    | `#B0B0B0` or `#9E9E9E`      | Muted gray for sublabels, descriptions                         |
| **Primary Accent**    | `#00C896` (Mint Green)      | Fresh, health-focused, energetic                               |
| **CTA Buttons**       | `#00E0A1` hover → `#00C896` | Call to action stands out clearly                              |
| **Warning/Alert**     | `#FF6B6B` or `#FF4C4C`      | For errors, alerts                                             |
| **Input Fields BG**   | `#1E1E1E`                   | Soft dark background for inputs                                |
| **Borders/Dividers**  | `#2C2C2C`                   | Thin lines or outlines for separation                          |
| **Success Highlight** | `#32CD80` or `#3FE094`      | For success messages or highlights                             |


| Purpose             | Color       | Hex Code  | Emotion/Message               |
| ------------------- | ----------- | --------- | ----------------------------- |
| AI / Technology     | Indigo Blue | `#3F51B5` | Intelligent, trustworthy      |
| Health & Freshness  | Mint Green  | `#00C896` | Clean, fresh, healthy         |
| Wellness / Calmness | Teal        | `#009688` | Calm, balance, wellness       |
| Highlight / CTA     | Aqua        | `#00FFF7` | Bright, energetic, futuristic |


Font Family: Inter, Poppins, or Roboto (clean & readable)
Shadow: Use subtle green/blue glow on hover or focus
















| 📄 Page            | 🧠 Animation Idea(s)                                       | 🛠 Tool           |
| ------------------ | ---------------------------------------------------------- | ----------------- |
| **Login / Signup** | Slide-in form on load, glowing input focus, shake on error | Tailwind + Framer |
| **Home Page**      | Fade-in Hero, typewriter text, bouncing CTA                | Framer Motion     |
| **Generate Page**  | Each question enters with slide/fade, progress bar fills   | Framer + Tailwind |
| **Summary Page**   | AI content fades/zooms in, copy button scales on hover     | Framer Motion     |
| **404 Page**       | Lottie animation (lost character), fade-in message + CTA   | Lottie            |
| **Global Nav**     | Smooth hover underline or scale effects                    | Tailwind          |

| Step | Page                      | Features to Add                                                                                           | Notes                             |
| ---- | ------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 1    | **Login**                 | - Email/password fields <br> - Submit button <br> - JWT auth <br> - Animation on login button             | Protected Routes setup after this |
| 2    | **Signup**                | - Name/email/password <br> - Confirm password <br> - Animations                                           | Redirect to login on success      |
| 3    | **Home**                  | - Welcome message <br> - CTA to generate questions <br> - Smooth page load animation                      | Protected                         |
| 4    | **Generate**              | - Question form <br> - Input fields <br> - Loading animation when submitting                              | Protected                         |
| 5    | **Summary**               | - Display generated summary <br> - Reveal animation <br> - Copy/share buttons                             | Protected                         |
| 6    | **404 Page**              | - “Page Not Found” message <br> - Cute animation or icon <br> - Back to Home link                         | Accessible for all                |
| 7    | **Loading + Transitions** | Add Framer Motion transitions between pages <br> Add Lottie or CSS loading spinner for generate → summary | Optional but adds polish          |
| 8    | **Responsive**            | Add responsiveness **after each section** is built                                                        | Not left to the very end          |








quesions -
| Step | Question Prompt                  | Schema Field                  | Input Type           |
| ---- | -------------------------------- | ----------------------------- | -------------------- |
| 1    | What did you eat today and when? | `items`, `timesOfDay`         | Multi-select + Input |
| 2    | How much water?                  | `waterIntake`                 | Single-select        |
| 3    | Tea/Coffee intake                | `caffeine`                    | Single-select        |
| 4    | Alcohol today?                   | `alcohol`                     | Yes/No               |
| 5    | Sleep hours?                     | `sleepHours` (update to enum) | Single-select        |
| 6    | Activity level?                  | `activityLevel`               | Single-select        |
