
function formatPromptFromLogs(logs) {
    let prompt = `Analyze the following user's daily meal and health logs. Each log represents a day's summary.\n`;

    logs.forEach((log, index) => {
        prompt += `\nLog ${index + 1}:\n`;
        prompt += `Time of Day: ${log.timesOfDay}\n`;
        prompt += `Items: ${log.items}\n`;
        prompt += `Quantity: ${log.quantity}\n`;
        prompt += `Water Intake: ${log.waterIntake}\n`;
        prompt += `Caffeine: ${log.caffeine}\n`;
        prompt += `Alcohol: ${log.alcohol}\n`;
        prompt += `Sleep Hours: ${log.sleepHours}\n`;
        prompt += `Activity Level: ${log.activityLevel}\n`;
    });

    prompt += `
        Now, based on the above data, do the following:
        - Give a detailed nutrition and wellness summary for TODAY
        - Mention if the user drank less water or consumed too much caffeine, etc.
        - Recommend 3 improvements the user should try TOMORROW (e.g., eat more fiber, reduce caffeine)
        - Keep the tone friendly and motivating
    `;

    return prompt;
}

module.exports = formatPromptFromLogs;
