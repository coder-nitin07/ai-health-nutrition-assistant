
function formatPromptFromLogs(logs) {
    let prompt = `Analyze the following user's daily meal and health logs. Each log represents a day's summary.\n`;

    logs.forEach((log, index) => {
        prompt += `\nLog ${index + 1}:\n`;

        // Meal Summary
        if (log.meals && log.meals.length > 0) {
            log.meals.forEach((meal, idx) => {
                prompt += `Meal ${idx + 1} - Time: ${meal.timesOfDay}, Items: ${meal.items}\n`;
            });
        } else {
            prompt += `Meals: No meals logged\n`;
        }

        // other health details
        prompt += `Water Intake: ${log.waterIntake}\n`;
        prompt += `Caffeine: ${log.caffeine}\n`;
        prompt += `Alcohol: ${log.alcohol}\n`;
        prompt += `Sleep Hours: ${log.sleepHours}\n`;
        prompt += `Activity Level: ${log.activityLevel}\n`;
    });

    prompt += `
        Now, based on the above data, give a detailed nutrition and wellness summary for TODAY only.
        - Mention water, caffeine, alcohol, sleep, and activity insights
        - Keep the tone friendly and motivating
        - Do NOT include any suggestions or advice for tomorrow
    `;

    return prompt;
}

module.exports = formatPromptFromLogs;
